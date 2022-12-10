import Header from './components/Header';

export default function Custom403() {
    return (
        <div className="h-screen bg-[url(https://wallpapercave.com/wp/wp3198557.jpg)] bg-cover text-white">
            <head>
            <title>Proxy Studios - 403 No Access</title>
        <link rel="icon" href="/favicon.ico" />
            </head>
        <Header />
        <div className='text-center pt-[50px]'>
            <h1 className='text-5xl font-bold'>Holey Smokes! How Did This Happen!</h1>
            <br></br>
            <p className='font-medium text-2xl'>You do not have access to this page! Nothing to worry</p>
            <p className='font-medium text-2xl'>we came to take you away back home!</p>
            <br></br>
            <a href='/'><button className='w-[200px] h-[40px] rounded-full bg-black bg-opacity-50 text-white text-center hover:bg-white hover:translate-y-[-2px] hover:border-white hover:text-black transition duration-500 ease-in-out'>Home</button></a>
            <br></br>
            <br></br>
            <p className='text-2xl'>Error Code <span className='font-medium'>PROXY-403</span></p>
        </div>
        </div>
    )
  }