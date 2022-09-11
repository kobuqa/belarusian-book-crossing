import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import Image from 'next/image'
import { signOut } from "next-auth/react"
import Link from 'next/link';


type LayoutProps = {
    children: React.ReactNode,
};
export default function Layout({ children }: LayoutProps) {
    const { data } = useSession()
    const router = useRouter()

    return (
        <>
            <div className="min-h-screen flex flex-col">
                <header className="flex justify-between p-4">
                    <Image src="/logo.png" width={200} height={30} alt="Belarusian Book Crossing"  />
                    <nav className="flex">
                        <li className={`bg-gray-200 hover:bg-gray-300 p-3 border-r border-r-gray-300 cursor-pointer ${router.pathname === '/' && 'bg-gray-300'}`} onClick={() => router.push('/')}>Галоўная</li>
                        <li className={`bg-gray-200 hover:bg-gray-300 p-3 border-r border-r-gray-300 cursor-pointer ${router.pathname === '/map' && 'bg-gray-300'}`} onClick={() => router.push('/map')}>Мапа</li>
                        <li className={`bg-gray-200 hover:bg-gray-300 p-3  cursor-pointer ${router.pathname === '/about' && 'bg-gray-300'}`} onClick={() => router.push('/about')}>Пра нас</li>
                    </nav>
                    {data && (
                        <>
                            <div className="flex items-center gap-x-2">
                                <p>{data.user?.name}</p>
                                <Image alt={data.user?.name || ''} src={data.user?.image || ''} width={48} height={48} className="rounded-full" />
                            </div>
                            <button onClick={() => signOut()} className="border rounded-md px-4">Sign out</button>
                        </>)
                    }
                </header>
                <main className="flex grow">
                    {children}
                </main>
                <div className='text-center w-[12rem] border rounded-sm hover:bg-gray-300 bg-gray-200 p-2 m-auto mb-4'>
                    <Link href='https://www.patreon.com/belarusian_book_crossing'>Падтрымаць праект</Link>
                </div>
            </div>
            <footer className="flex py-8 border-t border-gray-400 items-center justify-center mx-3">
                Powered by kbq
            </footer>
        </>
    )
}