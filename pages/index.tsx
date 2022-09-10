//@ts-nocheck
import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Layout from '../components/app-layout'
import Map from '../components/map'
import AddBookPopup from '../components/add-book-popup'
import TextField from '../lib/components/text-field'
import Link from 'next/link'
import { useGeolocated } from 'react-geolocated'
import { useBook } from '../lib/api/useBook'


const DEFAULT_CENTER = [38.907132, -77.036546]

const Home: NextPage = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [books, setBooks] = useState(data)
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [filterValue, setFilterValue] = useState('');
  const [filterMode, setFilterMode] = useState('title');

  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: false,
      },
      userDecisionTimeout: 5000,
    });

  const { addBook } = useBook()

  const handleChangeFilterValue = (e: React.ChangeEvent<KeyboardEvent>) => setFilterValue(() => e.target.value);
  const handleChangeFilterMode = (e: React.ChangeEvent<MouseEvent>) => setFilterMode(() => e.target.value)

  useEffect(() => {
    setFilteredBooks(() => filterValue ? books.filter(book => book[filterMode] && book[filterMode].includes(filterValue)) : books)
  }, [filterValue, filterMode, books])

  return (
    <Layout>
      <Head>
        <title>Belarusian Book Crossing</title>
      </Head>
      <AddBookPopup isOpen={isOpen} onSuccess={addBook} onClose={() => setIsOpen(false)} />
      <div className="flex flex-col grow items-center gap-y-10">
        <div className="flex gap-x-4">
          <TextField placeholder='Start typing' onChange={handleChangeFilterValue} value={filterValue} />
          <div className="flex border border-black rounded-lg overflow-hidden">
            <div className="grow flex text-center">
              <input id="fid-1" type="radio" name="radio" value="title" checked={filterMode === 'title'} className="hidden peer" onChange={handleChangeFilterMode} />
              <label htmlFor="fid-1" className="peer-checked:bg-gray-300 p-2 cursor-pointer w-28">Назва кнігі</label>
            </div>
            <div className="flex grow text-center border-l border-black">
              <input id="fid-2" type="radio" name="radio" value="isbn" checked={filterMode === 'isbn'} className="hidden peer" onChange={handleChangeFilterMode} />
              <label htmlFor="fid-2" className="peer-checked:bg-gray-300 p-2 cursor-pointer w-28">ISBN</label>
            </div>
          </div>
        </div>
        <button className="border border-black p-2 rounded-lg" onClick={() => setIsOpen(true)}>Дадаць кнігу</button>
        <Map className="w-full h-[40rem]" center={coords ? [coords.latitude, coords.longitude] : DEFAULT_CENTER} zoom={5}>
          {({ TileLayer, Marker, Popup }) => (
            <>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              />
              {filteredBooks.map(book => (
                <Marker position={[book.latitude, book.longitude]} key={book.id}>
                  <Popup>
                    <p>Аўтар: {book.author}</p>
                    <p>Назва: {book.title}</p>
                    <p>Кантакты: {book.contacts}</p>
                    <p>Год: {book.year ? book.year : 'Няма'}</p>
                    <Link href={`/books/${book.id}`}>Зрабіць запыт на кнігу</Link>
                  </Popup>
                </Marker>
              ))}
            </>
          )}
        </Map>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.API_URL}/books`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
export default Home
