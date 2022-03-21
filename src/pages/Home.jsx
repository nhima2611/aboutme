import React from 'react'
import { useNavigate } from "react-router-dom";
import{ BsArrowRight} from 'react-icons/bs'

import hero from '../asset/hero.jpg'

const Home = () => {
    const  navigate = useNavigate();
    const scrollTop = () => {
      navigate( "/about");
      window.scrollTo({top: 0, behavior: 'smooth'} )
    }

  return (
    <div className='flex flex-col-reverse  h-full items-center  '>
        <div className='px-5 flex flex-col py-14  '>
            <h1 className='text-6xl font-semibold tracking-widest leading-tight underline decoration-2  ' >I am</h1>
            <h3 className='text-5xl leading-tight font-bold underline decoration-2 '>a Front-end Developer</h3>
            <span className='italic'>SINCE 1999</span>
            <button onClick={scrollTop} className='flex justify-center items-center mt-8 gap-4 border-2 w-[200px] mx-auto  py-2 text-gray-500 hover:shadow-md mb-8'>View more <BsArrowRight/> </button>
        </div>
        <div>
            <img src={hero} alt="" />
        </div>
    </div>
  )
}

export default Home