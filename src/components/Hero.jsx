import React from 'react'
import About from './About';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
    <section className='px-10 py-6 relative bg-pink-200 h-[90vh] bg-[url(/src/assets/hero.jpg)] 
    bg-cover bg-center flex items-center justify-center'>
        <div className='absolute h-[90vh] inset-0 z-0 bg-black/25'></div>
        <div className='flex gap-2 flex-col items-center justify-center z-10 text-white h-100 '>
        <h1 className='text-7xl'>Welcome to NØTHĨNG</h1>
        <p className='text-xl'>Fresh ingredients. Authentic recipes. Heartfelt hospitality.</p>
        <Link to={'/contact'}> <button className='bg-green-800 rounded-[4px] p-2 mt-2 cursor-pointer hover:bg-green-600'>Reserve a Table</button></Link>
        </div>
    </section>
    <About/>
    </>
  )
}

export default Hero;