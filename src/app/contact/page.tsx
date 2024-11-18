import React from 'react'
import Head from '../../components/Header'
import Foot from '../../components/Footer'

const Contact = () => {
    return (
        <div className='bg-[#EFF6FF]'>

            <Head />

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto flex flex-col">
                    <div className="lg:w-full mx-auto">
                        <div className="rounded-lg h-96  overflow-hidden">
                            <img
                                alt="content"
                                className="object-cover object-center h-full w-full"
                                src="../../../about.png"
                            />
                        </div>
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                    <img
                                        src="../../../amar.jpg"
                                        alt="Your Profile Picture"
                                        className="w-20 h-20 rounded-full"
                                    />

                                </div>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-gray-900 text-xl">
                                        Abdul Wahab
                                    </h2>
                                    <div className="w-28 h-1 bg-indigo-500 rounded mt-2 mb-4" />
                                    <p className="text-base">
                                        A Computer Science graduate, A software architect, An international work aspirant.
                                    </p>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p className="leading-relaxed text-lg mb-4">
                                    Meggings portland fingerstache lyft, post-ironic fixie man bun banh
                                    mi umami everyday carry hexagon locavore direct trade art party.
                                    Locavore small batch listicle gastropub farm-to-table lumbersexual
                                    salvia messenger bag. Coloring book flannel truffaut craft beer
                                    drinking vinegar sartorial, disrupt fashion axe normcore meh
                                    butcher. Portland 90's scenester vexillologist forage post-ironic
                                    asymmetrical, chartreuse disrupt butcher paleo intelligentsia pabst
                                    before they sold out four loko. 3 wolf moon brooklyn.
                                </p>
                                <a className="text-indigo-500 inline-flex items-center">
                                    Learn More
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        className="w-4 h-4 ml-2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe
                            width="100%"
                            height="100%"
                            className="absolute inset-0"
                            frameBorder={0}
                            title="map"
                            marginHeight={0}
                            marginWidth={0}
                            scrolling="no"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16089.505862310723!2d67.05740720250033!3d24.95547034439802!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb340979a089751%3A0xb5046520e6b41807!2sBuffer%20Zone%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e1!3m2!1sen!2s!4v1731897032034!5m2!1sen!2s"
                            style={{ filter: "contrast(1) " }}
                        />
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                    ADDRESS
                                </h2>
                                <p className="mt-1">
                                    North-Nazimabad, Karachi, Sindh, 74500.
                                </p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                                    EMAIL
                                </h2>
                                <a className="text-indigo-500 leading-relaxed">abdulwahab.idc@gmail.com</a>
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                                    PHONE
                                </h2>
                                <p className="leading-relaxed">0318-1257744</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-[#EFF6FF] flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
                            Feedback
                        </h2>
                        <p className="leading-relaxed mb-5 text-gray-600">
                            Provide your valuable feedback.
                        </p>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                defaultValue={""}
                            />
                        </div>
                        <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Button
                        </button>
                        <p className="text-xs text-gray-500 mt-3">
                            Chicharrones blog helvetica normcore iceland tousled brook viral
                            artisan.
                        </p>
                    </div>
                </div>
            </section>


            <Foot />

        </div>
    )
}

export default Contact;
