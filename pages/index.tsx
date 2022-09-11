//@ts-nocheck
import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Layout from '../components/app-layout'
import AddBookPopup from '../components/add-book-popup'
import Link from 'next/link'
import { useGeolocated } from 'react-geolocated'
import { useBook } from '../lib/api/useBook'


const Home: NextPage = ({ data }) => {

    return (
        <Layout>
            <Head>
                <title>Belarusian Book Crossing</title>
            </Head>
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
