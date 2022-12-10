import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from './components/Header';
let nuctorno = 'https://cdn.discordapp.com/avatars/1051112109288734809/b42794d6c869d08e4e3418319dc27fc2.webp?size=512';

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-black text-white">
      <Head>
        <title>Proxy Studios - Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <div className='flex justify-center'>
            <div className='bg-nr bg-opacity-40 w-[300px] h-[300px] rounded-lg bg-[url(https://wallpaperaccess.com/full/435988.jpg)] bg-cover hover:translate-y-[-5px] transition duration-200 ease-in-out'>
                <div className='text-center'>
                <h1 className='font-bold text-5xl pt-[30px] text-center inline-block'>Nuctorno</h1>
                <p className='font-medium text-gray-400 text-center pt-[10px]'>Strives to bring the best moderation to discord</p>
                <br></br>
                <a href='https://discord.com/api/oauth2/authorize?client_id=1030807295661187163&permissions=8&scope=bot%20applications.commands' className='flex justify-center pt-[89px]'><button className='w-[200px] h-[40px] rounded-full bg-black bg-opacity-50 text-white text-center hover:bg-white hover:translate-y-[-2px] hover:border-white hover:text-black transition duration-500 ease-in-out'>Invite</button></a>
                </div>
            </div>

            <div className='ml-20 bg-nr bg-opacity-40 w-[300px] h-[300px] rounded-lg bg-[url(https://wallpaperaccess.com/full/435988.jpg)] bg-cover hover:translate-y-[-5px] transition duration-200 ease-in-out'>
                <div className='text-center'>
                <h1 className='font-bold text-5xl pt-[30px] text-center inline-block'>SnapinGoo</h1>
                <p className='font-medium text-gray-400 text-center pt-[10px]'>SnapinGoo Is a Discord Bot That Can #Moderate #Protect #Entertain Your Server With His Features As in Giveaways_Auto-Moderation_Tickets</p>
                <br></br>
                <a href='https://discord.com/api/oauth2/authorize?client_id=832390209881899039&permissions=1100585757719&scope=bot%20applications.commands' className='flex justify-center pt-[40px]'><button className='w-[200px] h-[40px] rounded-full bg-black bg-opacity-50 text-white text-center hover:bg-white hover:translate-y-[-2px] hover:border-white hover:text-black transition duration-500 ease-in-out'>Invite</button></a>
                </div>
            </div>
        </div>
      </main>
    </div>
  )
}

export default Home
