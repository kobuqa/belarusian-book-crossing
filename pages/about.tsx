//@ts-nocheck
import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import Layout from '../components/app-layout'

const logo = require('https://i.postimg.cc/ydTFQQRn/BBC.png');

  return (
    <Layout>
      <Head>
        <title>Belarusian Book Crossing</title>
      </Head>
      <div className="page-content">
        <div className="logo-pic">
          <img src={String(logo)} />
        </div>
        <div>
          <label htmlFor="fid-1" className="peer-checked:bg-gray-300 p-2 cursor-pointer w-28">Вас вітае Belarusian Book Crissing!</label>
          <label htmlFor="fid-1" className="peer-checked:bg-gray-300 p-2 cursor-pointer w-28">Мы праэкт, прызначаны для таго, каб дапамагчы табе знайсці беларускія кніжкі і аднадумцаў за мяжой.</label>
          <label htmlFor="fid-1" className="peer-checked:bg-gray-300 p-2 cursor-pointer w-28">Уводзь назву твора ці нумар ISBN праз форму пошуку і атрымай спіс лакацый, дзе нехта гатовы падзяліцца кніжкай.</label>
          <label htmlFor="fid-1" className="peer-checked:bg-gray-300 p-2 cursor-pointer w-28">Як гэта працуе?</label>
          <label htmlFor="fid-1" className="peer-checked:bg-gray-300 p-2 cursor-pointer w-28">Пераходзь на старонку з мапай [спасылка] і карыстайся пошукам. Ты можаш узяць кніжку па прынцыпе book crossing, часова пазычыць яе, абмяняцца на іншую ці нават пераслаць у іншую краіну поштай.</label>
          <label htmlFor="fid-1" className="peer-checked:bg-gray-300 p-2 cursor-pointer w-28">Стварай сваю бібліятэку.</label>
          <label htmlFor="fid-1" className="peer-checked:bg-gray-300 p-2 cursor-pointer w-28">Ты можаш ананімна дадаць свае кніжкі на мапу.</label>
          <label htmlFor="fid-1" className="peer-checked:bg-gray-300 p-2 cursor-pointer w-28">Гэта бяспечна, бо наш сэрвіс аўтаматычна карэктуе твае месцазнаходжанне: нікто не будзе ведаць твой дакладны адрас - толькі раён, дзе знаходзіцца кніга.Пакінь свае кантакты, каб іншыя карыстальнікі маглі выйсці з табой на сувязь (будуць даступныя толькі аўтарызаваным юзерам).</label>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
}
export default Home
