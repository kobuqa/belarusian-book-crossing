import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import AppLayout from '../components/app-layout'
import Link from 'next/link'
import { Button } from 'antd';

const Home: NextPage = () => {

    return (
        <AppLayout>
            <Head>
                <title>Belarusian Book Crossing</title>
            </Head>
            <div className="h-full">
                <h1>Вас вітае Belarusian Book Crossing!</h1>
                <p>Мы праект, прызначаны для таго, каб дапамагчы табе знайсці беларускія кніжкі і аднадумцаў за мяжой.</p>
                <p>Уводзь назву твора ці нумар ISBN праз форму пошуку і атрымай спіс лакацый, дзе нехта гатовы падзяліцца кніжкай.</p>
                <h1>Як гэта працуе?</h1>
                <p>Пераходзь на старонку з <Link href="/map">мапай</Link> і карыстайся пошукам. Ты можаш узяць кніжку па прынцыпе book crossing, часова пазычыць яе, абмяняцца на іншую ці нават пераслаць у іншую краіну поштай.</p>
                <h1> Стварай сваю бібліятэку.</h1>
                <p>Ты можаш ананімна дадаць свае кніжкі на мапу. Такія запісы будуць выдаленыя праз 7 дзён.</p>
                <p>Калі не хочаш, каб твае кантакты былі даступныя незарэгістраваным карыстальнікам, то дадай кніжку, аўтарызаваўшыся праз сацсетку.</p>
                <p>Гэта бяспечна, бо наш сэрвіс аўтаматычна карэктуе твае месцазнаходжанне: нікто не будзе ведаць твой дакладны адрас - толькі раён, дзе знаходзіцца кніга. Пакінь свае кантакты, каб іншыя карыстальнікі маглі выйсці з табой на сувязь.</p>
                <Button type="primary" shape="round">
                    <Link href='/map'>Пасбрабаваць</Link>
                </Button>
            </div>
        </AppLayout >
    )
}

export default Home
