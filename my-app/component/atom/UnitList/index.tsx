import React from 'react';

export default function UnitList() {
const conveyorUnits= [
    {
        id: 1,
        src: '/img/Product/img-1.jpg',
        alt: 'conveyor unit 1',
    },
    {
        id: 2,
        src: '/img/Product/img-2.jpg',
        alt: 'conveyor unit 2',
    },
    {
        id: 3,
        src: '/img/Product/img-3.jpg',
        alt: 'conveyor unit 3',
    },
    {
        id: 4,
        src: '/img/Product/img-4.webp',
        alt: 'conveyor unit 4',
    },
     {
        id: 5,
        src: '/img/Product/img-5.webp',
        alt: 'conveyor unit 5',
    },
    {
        id: 6,
        src: '/img/Product/img-6.webp',
        alt: 'conveyor unit 6',
    },
    {
        id: 7,
        src: '/img/Product/img-7.webp',
        alt: 'conveyor unit 7',
    },
    {
        id: 8,
        src: '/img/Product/img-8.jpg',
        alt: 'conveyor unit 8',
    },
    {
        id: 9,
        src: '/img/Product/img-9.jpg',
        alt: 'conveyor unit 9',
    },
    {
        id: 10,
        src: '/img/Product/img-10.webp',
        alt: 'conveyor unit 10',
    },
    {
        id: 11,
        src: '/img/Product/img-11.jpg',
        alt: 'conveyor unit 11',
    },
    {
        id: 12,
        src: '/img/Product/img-12.webp',
        alt: 'conveyor unit 12',
    },
   
]

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold text-center mb-8">Product List</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {conveyorUnits.map((unit) => (
                    <div key={unit.id} className="max-w-xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                        <div className="w-full h-70">
                            <img
                                src={unit.src}
                                alt={unit.alt}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}