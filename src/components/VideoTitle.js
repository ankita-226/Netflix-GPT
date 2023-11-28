import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen  aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradien-to-r from black'>
  <h1 className=' text-2xl md:text-3xl font-bold'>{title}</h1>
  <p className='hidden md:inline-block py-6 text-lg w-1/2'>{overview}</p>
  <div className=''>
    <button className='bg-white text-black mt-4 py-2 md:py-4 px-6 md:mt-0 md:px-12  rounded-md  text-xl hover:bg-opacity-80 '> Play</button>
    <button className='hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 rounded-md  text-xl bg-opacity-50'>More Info</button>
  </div>


    </div>
  )
}

export default VideoTitle