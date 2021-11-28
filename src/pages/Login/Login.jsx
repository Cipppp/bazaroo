import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FiLogIn } from 'react-icons/fi';
import { IoMdContact } from 'react-icons/io';
import { AiOutlineUserAdd } from 'react-icons/ai';
import useWindowDimensions from '../../components/hooks/useWindowDimensions';
import { Navbar } from '../../components';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';

const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`;

function Sidebar({ sidebar_data, showModal, setShowModal }) {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => {
        setShowModal(!showModal);
        setSidebar(!sidebar);
    };

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar flex justify-between pl-4 pr-4 shadow-xs">
                    <Link
                        to="/"
                        className="text-black font-bold font-josefin text-3xl flex "
                    >
                        Bazaroo
                    </Link>

                    <Link to="#" className="menu-bars">
                        <FaBars
                            onClick={() => {
                                showSidebar();
                                setShowModal(false);
                            }}
                            style={{ color: 'black' }}
                        />
                    </Link>

                    <nav className={sidebar ? 'nav-menu active ' : 'nav-menu'}>
                        <ul
                            className="nav-menu-items"
                            onClick={() => {
                                showSidebar();
                                setShowModal(true);
                            }}
                        >
                            <li className="navbar-toggle ">
                                <Link to="#" className="menu-bars ml-6">
                                    <AiOutlineClose className="mt-10" />
                                </Link>
                            </li>
                            {sidebar_data.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link
                                            to={item.path}
                                            className="flex items-center justify-center"
                                        >
                                            {item.icon}
                                            <span className="nav-span">
                                                {item.title}
                                            </span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </IconContext.Provider>
        </>
    );
}

function Login() {
    // eslint-disable-next-line
    const { height, width } = useWindowDimensions();
    const [showModal, setShowModal] = useState(true);

    const openModal = () => {
        setShowModal((prev) => !prev);
    };

    const sidebar_data = [
        {
            title: 'Logare',
            path: '#',
            icon: <FiLogIn />,
            cName: 'nav-text',
        },
        {
            title: 'Create',
            path: '/register',
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

    const modalRef = useRef();

    const animation = useSpring({
        config: {
            duration: 250,
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
    });

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    };

    const keyPress = useCallback(
        (e) => {
            if (e.key === 'Escape' && showModal) {
                setShowModal(false);
            }
        },
        [setShowModal, showModal]
    );

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress);
    }, [keyPress]);

    return (
        <>
            {/* Navbar  */}
            {width > 600 ? (
                <Navbar sidebar_data={sidebar_data} />
            ) : (
                <Sidebar
                    sidebar_data={sidebar_data}
                    onClick={closeModal}
                    showModal={showModal}
                    setShowModal={setShowModal}
                />
            )}
            {/* Main section */}
            <section
                className="flex h-screen w-screen items-center justify-center p-8"
                onClick={closeModal}
            >
                {showModal ? (
                    <div
                        ref={modalRef}
                        className="w-full md:w-10/12 lg:w-8/12 h-full flex justify-center items-center"
                    >
                        <animated.div style={animation} className="w-full m-2">
                            <div
                                showModal={showModal}
                                className="bg-[#272A45] w-full sm:p-6 md:p-8 lg:p-10 lg:text-base h-full shadow-md text-white relative z-10 border-2 rounded-3xl"
                            >
                                <div className="flex p-2 w-full flex-col items-center justify-center text-white">
                                    <div>
                                        <CloseModalButton
                                            aria-label="Close modal"
                                            onClick={() =>
                                                setShowModal((prev) => !prev)
                                            }
                                        />
                                    </div>
                                    <h1 className="mb-4 font-josefin text-xl">
                                        Logare
                                    </h1>
                                    <form
                                        action="submit"
                                        className="font-josefin w-full text-xs"
                                    >
                                        {/* Email  */}
                                        <h1 className="">Email:</h1>
                                        <input
                                            type="email"
                                            autoFocus
                                            required
                                            className="w-full p-2 focus:outline-none   border-2 border-black"
                                        />
                                        {/* Password  */}
                                        <h1 className=" pt-2">Parola</h1>
                                        <input
                                            type="password"
                                            required
                                            className="w-full p-2 focus:outline-none   border-2 border-black"
                                        />
                                        {/* button  */}
                                        <p className="mt-2">Nu ai cont?</p>
                                        <p>Inregistreaza-te</p>
                                        <div className="btnContainer flex place-items-start justify-center mb-5 text-black">
                                            <button className="focus:outline-none bg-[#AFD0FF] rounded-3xl p-2 mt-4 font-bold tracking-wider transition ease-out duration-300">
                                                Conectare
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </animated.div>
                    </div>
                ) : null}
            </section>
        </>
    );
}

export default Login;
