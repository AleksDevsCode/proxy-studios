import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from './components/Header';

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Head>
        <title>Proxy Studios</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <div className='pt-[100px] px-[190px]'>
          <h1 className='font-bold text-5xl'>TAKE CONTROL.</h1>
          <br></br>
          <p className='font-medium text-gray-400'>Take control over your experience and live in the moment.</p>
          <p className='font-medium text-gray-400'>PROXY STUDIOS strives to make the best products for everyone</p>
          <p className='font-medium text-gray-400'>with high quality desgins and endless fun.</p>
          <br></br>
          <a href='/projects'><button className='w-[200px] h-[40px] rounded-full bg-white text-black text-center hover:bg-black hover:border-2 hover:translate-y-[-2px] hover:border-white hover:text-white transition duration-500 ease-in-out'>projects</button></a>
          <a href='/careers'><button className='ml-4 w-[200px] h-[40px] rounded-full bg-white text-black text-center hover:bg-black hover:border-2 hover:translate-y-[-2px] hover:border-white hover:text-white transition duration-500 ease-in-out'>careers</button></a>
        </div>
        <br></br>
        <div className='bg-[url(https://wallpapercave.com/wp/wp3198557.jpg)] bg-cover w-full h-[533px]'>
          <h1 className='pt-[200px] text-center font-bold text-7xl'>NUCTORNO</h1>
          <p className='font-medium text-gray-300 text-center pt-[10px]'>Strives to bring the best moderation to discord</p>
          <br></br>
          <a href='/nuctornoinvite' className='flex justify-center'><button className='w-[200px] h-[40px] rounded-full bg-black bg-opacity-50 text-white text-center hover:bg-white hover:translate-y-[-2px] hover:border-white hover:text-black transition duration-500 ease-in-out'>Invite</button></a>
        </div>
      </main>
    </div>
  )
}

export default Home
