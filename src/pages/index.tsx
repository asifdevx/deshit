import React from 'react';
import Hero from '@/components/Home';
import About from '@/components/section/about';

const index = () => {
  return (
    <div className='w-full h-full flex flex-col '>
      <Hero/>
      <About/>
    </div>
  )
}

export default index