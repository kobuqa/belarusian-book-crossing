import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import useIDB from '../lib/hooks/useIDB'
import styles from '../styles/Home.module.css'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../components/app-layout'
import UserPanel from '../components/user-panel'
import UserContent from '../components/user-content'

const Home: NextPage = () => {
  const { books } = useIDB()
  const { status } = useSession()
  const router = useRouter()

  useEffect(() => {
    console.log(status)
    if (status === 'unauthenticated') router.push('/auth/signin')
  }, [status, router])

  return (
    <Layout>
      <Head>
        <title>My Profile</title>
      </Head>
      <div className="flex grow gap-x-10 min-h-full justify-center items-center">
        <UserPanel />
        <UserContent />
      </div>
    </Layout>
  )
}

export default Home
