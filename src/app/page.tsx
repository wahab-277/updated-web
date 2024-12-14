import React from 'react'
import Image from "next/image";
import Head from "../components/Header";
import Foot from "../components/Footer"



const Home = () => {
  return (



    <div className="relative">

      <Head />
      <div className="banner1 flex justify-center items-center shadow-lg h-[600px] bg-blue-50 ">

        <div className="left">
          <h2 className="text-4xl font-semibold text-gray-500">Hey, I am Wahab  </h2><br />
          <h1 className="text-7xl font-bold text-gray-800 mt-2">I create <span className="text-blue-800">product design </span>
            <br /> and brand experience
          </h1>
          <p className="text-gray-600 mt-6 max-w-md font-normal text-2xl">
            A Computer Science graduate, A website developer, A Search Engine Optimization Expert.<span className="danda">|</span>
          </p>
          <button className="mt-6 py-3 px-6 bg-blue-800 text-white font-semibold rounded-lg hover:bg-blue-600 shadow-xl">Get In Touch</button>

        </div>

        <div className="right ml-96">
          <Image src="/dp.png" alt="Dp" className="object-cover" width={600} height={600}></Image>
        </div>

      </div>
      <div className="banner2 items-center flex-col justify-center">
        <div className="heading"><h1 className="text-4xl text-black font-bold text-[64px] mt-20 ml-56 mb-20">My Expertise</h1></div>

        <div className="4section grid grid-cols-1 md:grid-cols-4 items-center gap-4 ml-11 mr-11">

          <div className="1 rounded-xl p-12 bg-blue-50 h-full min-h-[240px] shadow-lg">
            <h1 className="font-bold text-3xl">Strategy & Direction</h1><br />
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore quo velit aut deleniti, vel quam nobis</p>
          </div>

          <div className="2 rounded-xl p-12 bg-blue-50 h-full min-h-[240px] shadow-lg">
            <h1 className="font-bold text-3xl">Branding & logo</h1><br />
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore quo velit aut deleniti, vel quam nobis</p>
          </div>

          <div className="3 rounded-xl p-12 bg-blue-50 h-full min-h-[240px] shadow-lg">
            <h1 className="font-bold text-3xl">UI & UX Design</h1><br />
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore quo velit aut deleniti, vel quam nobis</p>
          </div>

          <div className="4 rounded-xl p-12 bg-blue-50 h-full min-h-[240px] shadow-lg">
            <h1 className="font-bold text-3xl">Webflow Development</h1><br />
            <p className="text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore quo velit aut deleniti, vel quam nobis</p>
          </div>

        </div>    {/*4section*/}

      </div>    {/*banner2*/}

      <div className="banner3 my-8">
        <h2 className="text-center text-2xl mb-4">Watch Our Video</h2>
        <div className="flex justify-center">
        <video
        className="max-h-max rounded-lg shadow-lg"
        src="/videos/project.mp4"
        autoPlay
        muted
        loop>

      </video>
        </div>
      </div>   {/*banner3*/}






{/* Additional Moving Content Section */ }
<div className="bg-gray-100 py-20">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-semibold mb-6">Keep Scrolling</h2>
    <p className="text-gray-600">
      Nunc tincidunt, nisl et fermentum rhoncus, orci nisl tristique arcu, vel tincidunt neque lorem eget mi. Sed non tortor et urna faucibus tincidunt non eu risus.
    </p>
  </div>
</div>



{/* Section with Fixed Background */ }
<div className=" h-[800px] bg-fixed  bg-cover bg-center bg-[url('/london.jpg')]">
  <div className="h-full bg-animation flex items-center justify-center">
    <h1 className="text-white text-4xl font-bold">Fixed Background Effect</h1>
  </div>
</div>


{/* Additional Moving Content Section */ }
<div className="bg-gray-100 py-20">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-3xl font-semibold mb-6">Keep Scrolling</h2>
    <p className="text-gray-600">
      Nunc tincidunt, nisl et fermentum rhoncus, orci nisl tristique arcu, vel tincidunt neque lorem eget mi. Sed non tortor et urna faucibus tincidunt non eu risus.
    </p>
  </div>
  </div>

  <Foot />
</div>       /*body*/
  )
};

export default Home;
