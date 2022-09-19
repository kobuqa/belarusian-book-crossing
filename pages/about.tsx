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
      <div className="p-4">
        З намі можна звязацца праз: <a href="mailto:belarusian.book.crossing@gmail.com">belarusian.book.crossing@gmail.com</a>
        <br />
      </div>
      <div className="p-4">
        <h3>Каманда</h3>
        <ul>
          <li>
            Ганна - ідэя, арганізацыя
          </li>
          <li>
            Аляксандр - frontend developer
          </li>
          <li>
            Аляксей - backend developer
          </li>
          <li>
            Аляксандра - універсальны салдат
          </li>
          <li>
            Кірыл - распрацоўка бота
          </li>
          <li>
            Піліп - распрацоўка бота
          </li>
        </ul>
      </div>
    </Layout>
  )
}
