import React from 'react';
import { ReactComponent as StudentImg } from '../../assets/student.svg';

function CarouselCard({ name, message }) {
    return (
        <>
            <div className="grid grid-rows-2 border-4 p-4 w-10/12 rounded-3xl">
                <div className="flex items-center">
                    <StudentImg className="pl-4" />
                    <span className="pl-4">{name}</span>
                </div>
                <div>
                    <p>{message}</p>
                </div>
            </div>
        </>
    );
}

export default CarouselCard;
