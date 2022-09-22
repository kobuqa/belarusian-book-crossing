import Head from 'next/head'
import Layout from '../components/app-layout'
import { Typography } from 'antd';
const { Title } = Typography;

export default function About() {
  return (
    <Layout>
      <Head>
        <title>Каманда</title>
      </Head>
      <p>
        З намі можна звязацца праз: <a href="mailto:belarusian.book.crossing@gmail.com">belarusian.book.crossing@gmail.com</a>
      </p>
      <Title level={2}>Каманда</Title>
      <Title level={5}>Ганна - ідэя, арганізацыя</Title>
      <Title level={5}>Аляксандр - frontend developer</Title>
      <Title level={5}> Аляксей - backend developer</Title>
      <Title level={5}>Аляксандра - універсальны салдат</Title>
      <Title level={5}>Кірыл - распрацоўка бота</Title>
      <Title level={5}>Піліп - распрацоўка бота</Title>
    </Layout>
  )
}
