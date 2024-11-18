import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


const Head = () => {
  return (
    <div>

      <header className="text-gray-600 body-font flex bg-[#1E40AF] justify-center gap-x-96 item-center p-2 shadow-2xl">
        <div className="container flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="ml-3 text-xl text-white">A.WAHAB</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">

            <ul className=" flex text-2xl space-x-8 font-semibold text-white">
              <li><Link href={"/"} className="hover:text-blue-500">Home</Link></li>
              <li><Link href={"/portfolio"} className="hover:text-blue-500">Portfolio</Link></li>
              <li><Link href={"/testimonial"} className="hover:text-blue-500">Testimonials</Link></li>
              <li><Link href={"/coin-market"} className="hover:text-blue-500">Coin-market</Link></li>
              <li><Link href={"/contact"} className="hover:text-blue-500">Contact</Link></li>
            </ul>
          </nav>
          
        </div>
      </header>





    </div>


  )

}

export default Head;