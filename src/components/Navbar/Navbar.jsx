import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ sidebar_data }) {
    return (
        <div>
            <div className="navbar font-josefin flex justify-between">
                <Link to="/" className="mt-2 ml-10 text-4xl font-bold">
                    Bazaroo
                </Link>
                <div className="flex items-center">
                    {sidebar_data.map((item, index) => {
                        return (
                            <button
                                key={index}
                                className="btn pt-1 pb-1 mr-8 pr-3 pl-3 mt-2 bg-[#AFD0FF] text-black"
                            >
                                <Link
                                    to={item.path}
                                    className="flex items-center justify-center"
                                >
                                    <span>{item.title}</span>
                                </Link>
                            </button>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default Navbar;
