import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import {BiMenuAltLeft} from 'react-icons/bi'
import {IoIosClose} from 'react-icons/io'

import avatar from '../asset/avt.jpg'

const nav = [   

    {
        display : "Home",
        path : "/"
    },
    {
        display : "About",
        path : "/about"
    },
    {
        display : "Skill",
        path : "/skill"
    },
    {
        display : "Contact",
        path : "/contact"
    },
    

]

const Header = () => {

        const [open, setOpen] = useState(false)
        const show = () => {
            setOpen(!open)
           
        }

  return (
     

      <div>
      {
          !open ? (
            <div className='w-full h-11 bg-gray-500 bg-gradient-to-br flex justify-start items-center sticky'>
              <BiMenuAltLeft onClick={show} className="text-6xl text-white p-2 " />
              </div>
          ) : (
           
            <div className='w-[340px] h-[900px] absolute bg-gray-300 z-50'>
            <div className='flex justify-end p-2'>
            <IoIosClose className='text-4xl text-gray-700 ' onClick={show} />
            </div>
            <div className='flex gap-2 flex-col justify-center items-center text-center '>
                <img src={avatar} alt="" className='rounded-full bg-cover w-2/3 h-2/3 mt-10' />
                <h3 className='font-semibold text-lg'>MA NAM NHI</h3>
                <span className='font-semibold'>FRONT END DEVELOPER </span> 
                <span className='text-blue-500 opacity-80'>IN VIETNAM</span>
            </div>
            <div className='mt-[80px] flex flex-col items-center gap-10'>
                <ul className='' onClick={show}>
                {
                    nav.map((item, index) => {
                        return (
                                <Link to={item.path} >
                            <li className='text-gray-700 text-base font-semibold hover:text-gray-400'>
                                    {item.display}
                            </li>
                                </Link>
                        )
                    })
                }
                </ul>
            </div>
            <div className='text-center mt-[60px] flex flex-col text-sm opacity-60'>
                <span>Coppyright 2020 All right reserved</span>
                <span>Design  by Namnhi</span>
            </div>
        </div>
    
          )
      }
    
    </div>
    
  )
}

export default Header