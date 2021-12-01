import React from 'react';
import Carousel from 'react-elastic-carousel';
import { CarouselCard } from '..';
import './CarouselComp.css';

function CarouselComp() {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1280, itemsToShow: 4 },
    ];

    const items = [
        { name: 'Andrei', message: 'Mi-am luat in sfarsit restanta' },
        { name: 'Dan', message: 'Predare excelenta!' },
        {
            name: 'Daria',
            message: 'Daca nu ar fi fost Bazaroo n-as fi reusit in viata',
        },
    ];

    return (
        <div>
            <div className="flex justify-start items-center ">
                <h1 className="font-josefin ml-10 mb-2 text-2xl">
                    Ce zic utilizatorii?
                </h1>
            </div>
            <Carousel
                breakPoints={breakPoints}
                className="font-josefin text-xs md:text-sm"
            >
                {items.map((item) => (
                    <CarouselCard name={item.name} message={item.message} />
                ))}
            </Carousel>
        </div>
    );
}

export default CarouselComp;
