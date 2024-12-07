import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useState } from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Hero = () => {
const[sidebar,setsidebar] = useState(false);
  return (
    <main className='bg-green-900 md:py-6 md:px-12' >
   <section className='relative min-h-[650px] bg-gradient-to-t from-green-700 to-slate-50 w-full md:rounded-xl shadow-md' >
    <div className="container">
        <Navbar sidebar={sidebar}
        setsidebar={setsidebar} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-[650px] place-items-center">
            {/* text container */}
           <div className='space-y-4 p-4 md:mt-0 mt-[100px]' >
            <h1 data-aos="fade-up" className='text-3xl pl-6 md:pl-14' >01_____________</h1>
            <h2 data-aos="fade-up" data-aos-delay="300" className='text-3xl font-bold uppercase  ' >Porsche 911</h2>
            <p data-aos="fade-up" data-aos-delay="600" className='text-sm' >"Beyond Performance – 50 Years of Porsche Turbo , Driving in its most beautiful form , Dare to be driven by dreams". </p>
           <button data-aos="fade-up" data-aos-delay="800" className='border border-green-600 rounded-md text-xl py-2 px-4 ' >Start</button>
           </div>
           {/* img container */}
           <div>
            <img data-aos="zoom-in"
             className='w-[400px] z-[1]' src={'https://www.mansory.com/sites/default/files/styles/car_view/public/2023-07/side-view-porsche-911.png?itok=_cQkcFtl '} alt=''/>
           </div>
           {/* blank container */}
           <div className='md:hidden' ></div>

        </div>
    </div>
    <h1 data-aos="zoom-out" className='text-center text-[80px] font-bold sm:text-[120px] md:text-[150px] xl:text-[180px] absolute bottom-0 w-full z-0' >911-GT</h1>
    
    {
      sidebar &&(
        <div className=' absolute top-0 right-0 w-full h-full bg-gradient-to-b from-slate-200 to bg-green-600 md:w-[90px] ' >
          <div className='w-full h-full flex flex-col gap-4 justify-center items-center'>
            {/* lining */}
            <div className='w-[1px] h-[60px] bg-black' ></div>
            {/* socialmedialinks */}
            <div className='inline-block p-1 rounded-full cursor-pointer border border-black' >
              <FaFacebookF className='text-2xl' />
            </div >
            <div className='inline-block p-1 rounded-full cursor-pointer border border-black' >
              <FaLinkedinIn className='text-2xl' />
            </div>
            <div className='inline-block p-1 rounded-full cursor-pointer border border-black' >
              <FaInstagram className='text-2xl' />
            </div>
            {/* lining */}
            <div className='w-[1px] h-[60px] bg-black' ></div>


          </div>
        </div>
      )
    }

   </section>
    </main>
  )
}

export default Hero
