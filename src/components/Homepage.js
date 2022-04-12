import React from 'react'
import '../styles.css';
import {Link}  from 'react-router-dom'
import logo from '../logo.png'
import houses from '../bg-houses.png'
import pen from '../pen.png'
import { BrowserRouter } from 'react-router-dom';
const Homepage = () => {
  return (
    <div className='font-Roman'> 
    <header>
    <div className='h-full w-full bg-gradient-to-b from-white to-red-400'>
    <div className='flex justify-evenly'>
    <div className = 'flex p-5'>
    <img src= {logo} alt="Icon" className='h-7 w-7' />
     <div className = "flex font-bold text-lg p-1">BARBIE & CIMON NOTAIRES</div> 
     </div>
      <BrowserRouter>
      <div className = " p-6 space-x-7 font-semibold ">
      <Link className='hover:text-neutral-300' to = "/a propos">A PROPOS</Link>
      <Link className='hover:text-neutral-300' to = "/Nos services">NOS SERVICES</Link>
      <Link className='hover:text-neutral-300' to = "/articles">ARTICLES</Link>
      <Link className='hover:text-neutral-300' to = "/Contacts">CONTACTS</Link>
      <Link className='hover:text-neutral-300' to = "">EN</Link>
      </div>
      </BrowserRouter>
      </div>
      <div className='flex'>
      <div className='m-16'>
      <div className='text-sm font-semibold'> 
      <span className=' text-red-700 text-sm'>NOUS VALORISONS LA</span> <br /> <span className='text-4xl text-red-700 '>CLARTE</span> <br />
      <span className='mt-12'> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident mollitia id magnam neque nemo incidunt sequi rem, dolorem libero quas sunt ab officiis dignissimos autem facere culpa aut laboriosam odit! </span> <br></br> <button className='border border-red-700 font-bold rounded-md text-red-700 h-18 w-40 mt-9 p-4 hover:bg-red-900 hover:text-white'>En savour plus</button></div>
      </div>
      <img src={pen} alt="pen" className = ''  />
      </div>
      <img src={houses} alt="houses" />
      </div>
      </header>

      <body>
          
      <div className='pb-10 '>
      <div className='text-blue-700 text-4xl p-14 font-semibold'> <span className='text-blue-700 text-sm'>NOS</span> <br /> SERVICES</div>
      <div className='flex justify-center space-x-3 '>
      <div className='w-96 h-30 bg-blue-900 rounded-lg shadow-2xl overflow-hidden hover:bg-blue-600'><button className=' flex  text-2xl text-white p-12'>COPROPRIETE</button></div>
      <div className='w-96 h-30 bg-orange-900 rounded-lg shadow-2xl overflow-hidden hover:bg-orange-800'><button className=' flex text-2xl text-white p-12'>PLANIFICATION FAMILIAE</button></div>
      <div className='w-96 h-30 bg-red-900 rounded-lg shadow-2xl overflow-hidden hover:bg-red-800'><button className=' flex text-2xl text-white p-12 justify-center'>IMMOBILIER</button></div>
      </div>
      </div>


      <div className='py-10 h-50 bg-neutral-200'>
      <div className='text-blue-800 text-4xl p-14 font-semibold'> <span className='text-blue-700 text-sm'>LES</span> <br /> ARTICLES</div>
      <div className='flex justify-evenly p-14 space-x-5 '>
      <div className='w-76 h-30 bg-white rounded-lg overflow-hidden hover:shadow-2xl'><span className=' text-black font-semibold '>
      <h5 className='p-3 text-md'>Titre de l'article</h5>
      </span> <h6 className='p-3 text-xs'>18th Mars 2021 <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dignissimos eius nostrum id eaque, necessitatibus ex, exercitationem, dicta eligendi nobis quis veritatis aperiam officia est rem ullam illo vel consectetur. </h6></div>
      <div className='w-76 h-30 bg-white rounded-lg hover:shadow-2xl overflow-hidden'><span className=' text-black font-semibold '>
      <h5 className='p-3 text-md'>Titre de l'article</h5>
      </span> <h6 className='p-3 text-xs'>18th Mars 2021 <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dignissimos eius nostrum id eaque, necessitatibus ex, exercitationem, dicta eligendi nobis quis veritatis aperiam officia est rem ullam illo vel consectetur. </h6></div>
      <div className='w-76 bg-white rounded-lg hover:shadow-2xl overflow-hidden'><span className=' text-black font-semibold'>
      <h5 className='p-3 text-md'>Titre de l'article</h5>
      </span> <h6 className='p-3 text-xs'>18th Mars 2021 <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dignissimos eius nostrum id eaque, necessitatibus ex, exercitationem, dicta eligendi nobis quis veritatis aperiam officia est rem ullam illo vel consectetur. </h6></div>
      <div className='w-76 bg-white rounded-lg hover:shadow-2xl overflow-hidden'><span className=' text-black font-semibold'>
      <h5 className='p-3 text-md'>Titre de l'article</h5>
      </span> <h6 className='p-3 text-xs'>18th Mars 2021 <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut dignissimos eius nostrum id eaque, necessitatibus ex, exercitationem, dicta eligendi nobis quis veritatis aperiam officia est rem ullam illo vel consectetur. </h6></div>
      </div>
      </div>

      </body>


      <footer className='flex bg-white h-50 justify-evenly space-x-1 '>
      <div className = 'flex p-20'>
      <img src= {logo} alt="Icon" className='h-7 w-7' />
       <div className = "flex font-bold text-lg p-1">BARBIE & CIMON NOTAIRES</div> 
       </div>

      <div className='flex justify-end pt-12 space-x-12'>
      <div className = " flex flex-col space-y-5 font-light m-5 ">
      <a href = "#propos">PROPOS</a>
      <a href = "#services">NOS SERVICES</a>
      <a href = "#articles">ARTICLES</a>
      <a href = "#Contacts">CONTACT</a>
      </div>
      
      <div className='font-semibold pt-5 w-15'>BUREAU <br /> <span className='text-sm font-light'> 101 , BOULEVARD SAINT <br /> JOSEPH O' MONTREAL, <br /> QC H2P 2P7</span>  <br /> NOUS SUIVRE </div>
      </div>
      </footer>
      </div>
  )
}

export default Homepage