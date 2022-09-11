import Head from 'next/head'
import Layout from '../components/app-layout'
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Belarusian Book Crossing</title>
      </Head>
      <div className="flex flex-col grow items-center gap-y-10">
        <Image src="/logo.png" width={349} height={88} alt="Belarusian Book Crossing"/>
        <div className="align-self-center">
          <div>
            <label htmlFor="fid-1" className="peer-checked:bg-gray-300 p-2 w-28">Вас вітае Belarusian Book Crossing!</label>
            <br/>
            <br/>
            <label htmlFor="fid-1" className="peer-checked:bg-gray-300 p-2 w-28">Мы праект, прызначаны для таго, каб дапамагчы табе знайсці беларускія кніжкі і аднадумцаў за мяжой.</label>
            <br/>
            <label htmlFor="fid-1" className="peer-checked:bg-gray-300 p-2 w-28">Уводзь назву твора ці нумар ISBN праз форму пошуку і атрымай спіс лакацый, дзе нехта гатовы падзяліцца кніжкай.</label>
          </div>
          <br/>
          <br/>
          <div>
            <label htmlFor="fid-1" className="peer-checked:bg-gray-300 p-2 w-28">Як гэта працуе?</label>
            <br/>
            <br/>
            <label htmlFor="fid-1" className="peer-checked:bg-gray-300 p-2 w-28">Пераходзь на старонку з <Link href="/">мапай</Link> і карыстайся пошукам. Ты можаш узяць кніжку па прынцыпе book crossing, часова пазычыць яе, абмяняцца на іншую ці нават пераслаць у іншую краіну поштай.</label>
          </div>
          <br/>
          <br/>
          <div>  
            <label htmlFor="fid-1" className="peer-checked:bg-gray-300 p-2 w-28">Стварай сваю бібліятэку.</label>
            <br/>
            <br/>
            <label htmlFor="fid-1" className="peer-checked:bg-gray-300 p-2 w-28">Ты можаш ананімна дадаць свае кніжкі на мапу. Такія запісы будуць выдаленыя праз 7 дзён.</label>
            <br/>
            <label htmlFor="fid-1" className="peer-checked:bg-gray-300 p-2 w-28">Калі не хочаш, каб твае кантакты былі даступныя незарэгістраваным карыстальнікам, то дадай кніжку, аўтарызаваўшыся праз сацсетку.</label>
            <label htmlFor="fid-1" className="peer-checked:bg-gray-300 p-2 w-28">Гэта бяспечна, бо наш сэрвіс аўтаматычна карэктуе твае месцазнаходжанне: нікто не будзе ведаць твой дакладны адрас - толькі раён, дзе знаходзіцца кніга. Пакінь свае кантакты, каб іншыя карыстальнікі маглі выйсці з табой на сувязь.</label>
          </div>
        </div>
      </div>
    </Layout>
  )
}
