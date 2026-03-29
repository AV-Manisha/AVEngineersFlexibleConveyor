import React from 'react';


interface ServiceProvideProps {
    title?: string;
}

export default function ServiceProvide({ title = 'SERVICE PROVIDED' }: ServiceProvideProps) {
    return (
        <div className="flex flex-col justify-center bg-gray-50 p-4 pt-10">
            <div className='grid sm:grid-cols-1 md:grid-cols-2  gap-10'>
            <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
            <br></br>
            <p className="text-lg text-gray-600">
               As one of the best loading conveyor manufacturer in China. YiFan Conveyor supply small individual conveyors, through to complete factory installations. The flexible roller conveyor systems use PLC control with distribution software, sensors, pneumatics and electrics. Our installation and service team are always ready for full support, locally or internationally.
            </p>
            <br />
            
            <p className="text-lg text-gray-600">Receiving an inquiry</p>
                <p className="text-lg text-gray-600">Understand customer requirements</p>
                <p className="text-lg text-gray-600">Recommend suitable conveyor type and price</p>
                <p className="text-lg text-gray-600">Further communication on product technical parameters, payment terms, delivery time</p>
                <p className="text-lg text-gray-600">Confirm order, send PI, pay 30% deposit</p>
                <p className="text-lg text-gray-600">Double check requirements and arrange production</p>
                <p className="text-lg text-gray-600">Sending photo and video</p>
                <p className="text-lg text-gray-600">Pay 70% balance and arrange shipment</p>
                <p className="text-lg text-gray-600">Online assist installation</p>
            </div>
            <div>
               <img className="mt-4 h-130 sm:w-full md:w-120 object-cover transform rounded-xl bg-white shadow-xl transition duration-300 hover:scale-120" src='/img/service-img.jpg' alt='service' />
            </div>
            </div>
        </div>
    );
}