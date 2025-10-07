import React from 'react';
import Hero from '@/components/Home';
import About from '@/components/section/about';
import Service from '@/components/section/Service';
import Skills from '@/components/section/Skills';


const index = () => {
  return (
    <div className='w-full h-full flex flex-col gap-10 '>
      <Hero/>
      <About/>
      <Service/>
      <Skills/>
    </div>
  )
}

export default index