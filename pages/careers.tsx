import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from './components/Header';
let nuctorno = 'https://cdn.discordapp.com/avatars/1051112109288734809/b42794d6c869d08e4e3418319dc27fc2.webp?size=512';

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Head>
        <title>Proxy Studios - Careers</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <h1 className='text-5xl font-medium text-center pt-[30px]'>BE A PART OF A <span className=' line-through'>TEAM</span> FAMILY</h1>
        <div className='flex justify-center pt-[50px]'>
            <div className='inline-block bg-nr w-[400px] h-[200px] rounded-lg'>
                <div className='text-center bg-bg w-full h-[30px] rounded-t-lg font-medium text-gray-500'>Department</div>
                <h1 className='text-3xl font-bold text-center pt-[20px]'>Desgin</h1>
                <br></br>
                <a href='https://forms.gle/rjPmpRsMaTJGidhR9' className='flex justify-center'><button className='w-[200px] h-[40px] rounded-full bg-black bg-opacity-60 text-white text-center hover:bg-white hover:translate-y-[-2px] hover:border-white hover:text-black transition duration-500 ease-in-out'>Apply</button></a>
            </div>

            <div className='ml-20 inline-block bg-nr w-[400px] h-[200px] rounded-lg'>
                <div className='text-center bg-bg w-full h-[30px] rounded-t-lg font-medium text-gray-500'>Department</div>
                <h1 className='text-3xl font-bold text-center pt-[20px]'>UI/UX</h1>
                <br></br>
                <a href='https://forms.gle/Z7YyU3PFmNvNFZWr8' className='flex justify-center'><button className='w-[200px] h-[40px] rounded-full bg-black bg-opacity-60 text-white text-center hover:bg-white hover:translate-y-[-2px] hover:border-white hover:text-black transition duration-500 ease-in-out'>Apply</button></a>
            </div>

            <div className='ml-20 inline-block bg-nr w-[400px] h-[200px] rounded-lg'>
                <div className='text-center bg-bg w-full h-[30px] rounded-t-lg font-medium text-gray-500'>Department</div>
                <h1 className='text-3xl font-bold text-center pt-[20px]'>Developer</h1>
                <br></br>
                <a href='https://forms.gle/CJJfqTTs4DDbErSK8' className='flex justify-center'><button className='w-[200px] h-[40px] rounded-full bg-black bg-opacity-60 text-white text-center hover:bg-white hover:translate-y-[-2px] hover:border-white hover:text-black transition duration-500 ease-in-out'>Apply</button></a>
            </div>
        </div>
      </main>
    </div>
  )
}

export default Home
