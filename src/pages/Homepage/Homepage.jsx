import React from 'react';
import { ReactComponent as HomepageImg } from '../../assets/homepage.svg';
import { CarouselComp, Footer, Navbar, Sidebar } from '../../components';
import './Homepage.css';
import useWindowDimensions from '../../components/hooks/useWindowDimensions';
import { AiOutlineUserAdd } from 'react-icons/ai';
import { IoMdContact } from 'react-icons/io';
import { FiLogIn } from 'react-icons/fi';

function Homepage() {
    const { height, width } = useWindowDimensions();
    const sidebar_data = [
        {
            title: 'Logare',
            path: '#',
            icon: <FiLogIn />,
            cName: 'nav-text',
        },
        {
            title: 'Create',
            path: '#',
            icon: <AiOutlineUserAdd />,
            cName: 'nav-text',
        },

        {
            title: 'Contact',
            path: '#',
            icon: <IoMdContact />,
            cName: 'nav-text',
        },
    ];

    return (
        <>
            <div>
                {width > 600 ? (
                    <Navbar />
                ) : (
                    <Sidebar SidebarData={sidebar_data} />
                )}

                {/* Main section */}
                <section className="grid grid-rows-2 h-screen place-items-center p-8 text-center">
                    <div>
                        <h1 className="font-josefin text-4xl">
                            Invatatul nu a fost niciodata mai simplu!
                        </h1>
                        <p className="font-josefin text-md mt-6">
                            Platforma ideala pentru meditatii online, atat
                            pentru profesori, cat si pentru studenti .
                        </p>
                    </div>
                    <div className="flex justify-center items-center">
                        <HomepageImg className="w-10/12" />
                    </div>
                </section>

                {/* How does it work section */}
                <section className="h-auto w-screen place-items-center p-5 font-josefin">
                    <div
                        className="grid grid-rows-3 bg-[#272A45] rounded-3xl text-white p-2 "
                        style={{
                            boxShadow:
                                '-8px -24px 0px 7px  rgba(179,208,255,0.79)',
                        }}
                    >
                        {/* First row */}
                        <div className="row-span-1 flex text-center items-center justify-center ">
                            <h1 className="pb-4">Cum functioneaza ?</h1>
                        </div>
                        {/* Second row */}
                        <div className="row-span-2 grid grid-cols-2 text-center text-xs">
                            {/* First col */}
                            <div className="grid grid-rows-2">
                                <div>
                                    <h2>Stii prea multe si vrei sa predai?</h2>
                                    <p>Inscrie-te ca profesor</p>
                                </div>
                                <div>
                                    <button className="btn pt-1 pb-1 pr-3 pl-3 mt-2 border-solid border-2">
                                        Predau
                                    </button>
                                </div>
                            </div>

                            {/* Second col */}
                            <div className="grid grid-rows-2">
                                <div>
                                    <h2>Stii prea putine si vrei sa inveti?</h2>
                                    <p>Inscrie-te ca student</p>
                                </div>
                                <div>
                                    <button className="btn pt-1 pb-1 pr-3 pl-3 mt-2 border-solid border-2">
                                        Invat
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Carousel section  */}
                <section className="mt-16">
                    <CarouselComp />
                </section>

                {/* Contact section */}
                <section>
                    <div>
                        <div className="w-full p-4 items-center justify-center font-josefin text-xs contact_container">
                            <div className="text-center">
                                <h1 className="text-xl">
                                    Intampini dificultati?{' '}
                                </h1>
                                <span className="text-lg">Contacteaza-ne</span>
                            </div>
                            <form action="submit">
                                {/* Email  */}
                                <h1 className="">Nume</h1>
                                <input
                                    type="text"
                                    autoFocus
                                    required
                                    className="w-full p-2 focus:outline-none rounded-lg  border-4 border-black"
                                />
                                {/* Password  */}
                                <h1 className=" pt-2">Email</h1>
                                <input
                                    type="email"
                                    required
                                    className="w-full p-2 focus:outline-none rounded-lg  border-4 border-black"
                                />
                                {/* Mesaj  */}
                                <h1 className=" pt-2">Mesaj</h1>
                                <textarea className="w-full p-2 focus:outline-none rounded-lg border-4 border-black" />
                                {/* button  */}
                                <div className="btnContainer flex place-items-start justify-center mb-5">
                                    <button className="focus:outline-none bg-[#AFD0FF] rounded-3xl p-2 mt-4 font-bold tracking-wider transition ease-out duration-300">
                                        Trimite
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default Homepage;
