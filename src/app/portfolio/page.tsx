import React from 'react'
import Head from '../../components/Header';


const portfolio = () => {
  return (
    <div>


      <Head />
 
      <video
        className="w-full max-w-8xl  rounded-lg shadow-lg"
        src="/videos/project.mp4"
        autoPlay
        muted
        loop>

      </video>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">PROJECTS</h1>
        <p className="text-lg md:text-2xl">
          Let's take an overview to my projects.
        </p>
      </div>

    
      

    </div>
  )
}

export default portfolio;