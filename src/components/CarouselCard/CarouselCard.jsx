import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';

function CarouselCard({ name, message }) {
    return (
        <>
            <div className="grid grid-rows-2 border-4 p-4 w-full sm:w-8/12 m-2 rounded-3xl">
                <div className="flex items-center">
                    <BsFillPersonFill size={20} />
                    <span className="pl-2">{name}</span>
                </div>
                <div>
                    <p>{message}</p>
                </div>
            </div>
        </>
    );
}

export default CarouselCard;
