import React from 'react'
import Image from 'next/image'

const TopLeftImage = () => {
  return (
    <div className='absolute top-0 left-0 mix-blend-color-dodge w-[200px] lg:w-[400px] opacity-50'>
      <Image src="/top-left-img.png" width={400} height={400} alt='top-left'/>
    </div>
  )
}

export default TopLeftImage