import Tag from '../asset/1.png'

import React from 'react'

const Skill = () => {
  return (
    <div className='px-3 opacity-70 '>
        <div className='flex flex-col gap-10'>
            <span className='font-semibold text-2xl'>Programing Languages :</span>
            <ul className='list-disc px-5 text-lg font-semibold'>
                <li>HyperText Markup Language (HTML5) </li>
                <li>Sascading Style Sheets (CSS3)</li>
                <li>JavaScript</li>
            </ul>
            <span className='font-semibold text-2xl'>Library</span>
            <ul className='text-lg font-semibold list-disc px-5'>
                <li className='text-lg font-semibold' >React JS (React Router, Redux, Redux Toolkit, React Hook)</li>
            </ul>
            <span className='font-semibold text-2xl '>Framework</span>
            <ul className='text-lg font-semibold list-disc px-5'>
                <li>Tailwind CSS</li>
                <li>SCSS</li>
            </ul>
            <span className='text-center font-semibold mt-8'>Keep your eyes on the stars and your feet on the ground. —Theodore Roosevelt</span>
            <img src={Tag} alt="" className='w-4/5 h-2/3 ml-12' />
        </div>
    </div>
  )
}

export default Skill