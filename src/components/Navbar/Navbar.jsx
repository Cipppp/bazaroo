import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div>
            <div className="navbar font-josefin flex justify-between">
                <h1 className="mt-2 ml-10 text-4xl">Bazaroo</h1>
                <div className="flex items-center">
                    <button className="btn pt-1 pb-1 mr-8 pr-3 pl-3 mt-2 bg-[#AFD0FF] text-black">
                        Logare
                    </button>
                    <button className="btn pt-1 pb-1 mr-8 pr-3 pl-3 mt-2 bg-[#AFD0FF] text-black">
                        Creare cont
                    </button>
                    <button className="btn pt-1 pb-1 mr-8 pr-3 pl-3 mt-2 bg-[#AFD0FF] text-black">
                        Contact
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
