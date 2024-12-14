"use client"
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Foot: React.FC = () => {

    const footerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
          if (footerRef.current) {
            const { width, height, left, top } = footerRef.current.getBoundingClientRect();
    
            // Calculate the cursor position relative to the footer
            const x = e.clientX - left;
            const y = e.clientY - top;
    
            // Calculate the offset for the background position
            // Adjust these values for intensity and opposite direction
            const moveX = ((x / width) - 5) * -20; // Adjust -20 for horizontal intensity
            const moveY = ((y / height) - 0.5) * -20; // Adjust -20 for vertical intensity
    
            // Set the background position with calculated values
            footerRef.current.style.backgroundPosition = `${50 + moveX}% ${50 + moveY}%`;
          }
        };

        const footerElement = footerRef.current; // Store the ref value in a local variable
        
        // Attach the event listener to footer element
        if (footerElement) {
          footerElement.addEventListener('mousemove', handleMouseMove);
        }

        // Clean up event listener on unmount
        return () => {
          if (footerElement) {
            footerElement.removeEventListener('mousemove', handleMouseMove);
          }
        };
    }, []);

    return (
        <div ref={footerRef} className="footer bg-[url('/map.png')] bg-cover bg-center bg-black text-center text-sm text-white border-t border-[#eaeaea]">
            <div className="container justify-center flex flex-col mt-20 pb-5 mx-auto px-5 max-w-[1200px]">
                <div className="footer-item m-2 flex-[1_0_200px] text-left md:flex-[1_0_100%] md:text-center">
                    <Link className='text-white text-2xl no-underline hover:text-[#23527c]' href="/about">About Us</Link>
                </div>
                <div className="footer-item m-2 flex-[1_0_200px] text-left md:flex-[1_0_100%] md:text-center">
                    <Link className='text-white text-2xl no-underline hover:text-[#23527c]' href="/contact">Contact Us</Link>
                </div>
                <div className="footer-item m-2 flex-[1_0_200px] text-left md:flex-[1_0_100%] md:text-center">
                    <Link className='text-white text-2xl no-underline hover:text-[#23527c]' href="/services">Terms of Service</Link>
                </div>
                <div className="footer-item m-2 flex-[1_0_200px] text-left md:flex-[1_0_100%] md:text-center">
                    <Link className='text-white text-2xl no-underline hover:text-[#23527c]' href="/privacy">Privacy Policy</Link>
                </div>

                <div className="social-icons md:mt-5 md:mb-5">
                    <Link className="mx-1 text-[18px]" href="#" target="_blank">
                        <i className="fa-brands fa-facebook fa-3x"></i>
                    </Link>
                    <Link className="mx-1 text-[18px]" href="#" target="_blank">
                        <i className="fa-brands fa-x-twitter fa-3x"></i>
                    </Link>
                    <Link className="mx-1 text-[18px]" href="#" target="_blank">
                        <i className="fa-brands fa-instagram fa-3x"></i>
                    </Link>
                    <Link className="mx-2 text-[18px]" href="www.linkedin.com/in/abdul-wahab-630b2023a" target="_blank">
                        <i className="fa-brands fa-linkedin fa-3x"></i>
                    </Link>
                </div>

                <div className="reserved mx-auto text-center mt-4">
                    <p>&copy; 2024 My Website. All Rights Reserved.</p>
                </div>

            </div>  {/*container*/}

        </div>   /*footer*/
    );
};

export default Foot;
