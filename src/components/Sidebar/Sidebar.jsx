import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import './Sidebar.css';
import { IconContext } from 'react-icons/lib';
import { Modal } from '..';

function Sidebar({ sidebar_data }) {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <div className="navbar flex justify-between pl-4 pr-4 shadow-xs">
                    <Link
                        to="/"
                        className="text-black font-bold font-josefin text-3xl flex  focus:outline-none "
                    >
                        Bazaroo
                    </Link>

                    <Link to="#" className="menu-bars  focus:outline-none">
                        <FaBars
                            onClick={showSidebar}
                            style={{ color: 'black' }}
                        />
                    </Link>

                    <nav className={sidebar ? 'nav-menu active ' : 'nav-menu'}>
                        <ul className="nav-menu-items" onClick={showSidebar}>
                            <li className="navbar-toggle  focus:outline-none">
                                <Link
                                    to="#"
                                    className="menu-bars ml-6  focus:outline-none"
                                >
                                    <AiOutlineClose className="mt-10" />
                                </Link>
                            </li>
                            {sidebar_data.map((item, index) => {
                                return (
                                    <li key={index} className={item.cName}>
                                        <Link
                                            to={item.path}
                                            className="flex items-center justify-center  focus:outline-none"
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

export default Sidebar;
