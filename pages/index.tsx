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
import axios from 'axios'
import https from 'https'
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
      <div className="flex flex-col min-w-full">
        <div className="flex flex-col grow items-center gap-y-10">
    Main Page
        </div>
        <Link href='https://www.patreon.com/belarusian_book_crossing' className='w-[12rem] mb-10 text-center p-1 m-auto border rounded-sm'>Падтрымаць праект</Link>
      </div>
    </Layout>
  )
}

export default Home
