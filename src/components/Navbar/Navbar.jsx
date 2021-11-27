import React from 'react';
import logo from '../../assets/top_navbar.svg';

function Navbar() {
    return (
        <div>
            <div className="grid grid-cols-6">
                <h1 className="font-josefin col-span-2 text-center mt-2 ml-2 text-4xl">
                    <svg
                        width="100"
                        height="100"
                        viewBox="0 0 100 100"
                        fill="none"
                    >
                        <rect width="100" height="100" fill="url(#pattern0)" />
                        <defs>
                            <pattern
                                id="pattern0"
                                patternContentUnits="objectBoundingBox"
                                width="1"
                                height="1"
                            >
                                <use transform="scale(0.0208333)" />
                            </pattern>
                            <image id="image0_393_225" width="48" height="48" />
                        </defs>
                    </svg>
                </h1>
                <img src={logo} className="col-span-4" alt="" />
            </div>
        </div>
    );
}

export default Navbar;
