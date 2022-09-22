//@ts-nocheck
import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Layout from '../components/app-layout'
import AddBookPopup from '../components/add-book-popup'
import { Input, Button } from 'antd';
import { useGeolocated } from 'react-geolocated'
import { useBook } from '../lib/api/useBook'
import axios from 'axios'
import https from 'https'
import Map from '../components/map'
import { Spinner } from '../lib/components/spinner'


const { Search } = Input;

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
    setFilteredBooks(() => filterValue ? books.filter(book => book[filterMode] && book[filterMode].toLowerCase().includes(filterValue.toLowerCase())) : books)
  }, [filterValue, filterMode, books])


  return (
    <Layout>
      <Head>
        <title>Мапа</title>
      </Head>
      <AddBookPopup isOpen={isOpen} onSuccess={addBook} onClose={() => setIsOpen(false)} />
      <div className="flex flex-col min-w-full">
        <div className="flex flex-col grow items-center gap-y-10">
          <div className="flex gap-x-4">
            <Search
              placeholder="Пачнi шукаць"
              allowClear
              enterButton="Знайсцi"
              size="large"
              value={filterValue}
              onChange={handleChangeFilterValue}

              onSearch={() => { }}
            />
          </div>
          <Button type="primary" onClick={() => setIsOpen(true)}>Дадаць кнігу</Button>
          {coords ? <Map coords={[coords.latitude, coords.longitude]} items={filteredBooks} /> : <div>Надбываю каардынаты... <Spinner /></div>}
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await axios.get(`${process.env.API_URL}/books`, {
    httpsAgent: new https.Agent({
      rejectUnauthorized: false
    })
  })
  return { props: { data: res.data } }
}
export default Home
