import React from 'react'


const Contact = () => {
  return (
    <div className='flex flex-col gap-20 items-center'>
        <h2 className='text-2xl mt-4  font-semibold'>seek me at</h2>
        <div className='flex flex-col items-center gap-8'>
            <a href="https://www.facebook.com/nhima2611">
              <img src="https://www.facebook.com/images/fb_icon_325x325.png" alt="" className='w-1/3 mx-auto' />
              </a>
            <a href="https://www.facebook.com/nhima2611" className='text-lg text-blue-500'>facebook.com/nhima2611</a>
        </div>
        <div className='flex flex-col items-center text-center'>
          <a href="https://www.instagram.com/novNhima/">
            <img src="https://logowik.com/content/uploads/images/instagram-icon.jpg" alt="" className='w-1/3 mx-auto mb-10' />
            <a href="https://www.instagram.com/novNhima/" className='text-lg text-red-500'>instagram.com/novNhima/</a>
            </a>
        </div>
        <div className='flex flex-col items-center gap-8'>
          <a href="https://topdev.vn/blog/wp-content/uploads/2017/09/github1.png">
          <img src="https://topdev.vn/blog/wp-content/uploads/2017/09/github1.png" alt="" className='w-1/3 mx-auto mb-8' />
          </a>
            <a href="https://github.com/nhima2611" className='text-lg '>github.com/nhima2611</a>
        </div>
    </div>
  )
}

export default Contact