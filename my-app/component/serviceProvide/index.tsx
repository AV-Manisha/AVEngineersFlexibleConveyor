import React from 'react';


interface ServiceProvideProps {
    title?: string;
}

export default function ServiceProvide({ title = 'SERVICE PROVIDED' }: ServiceProvideProps) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{title}</h1>
            <br></br>
            <p className="text-lg text-gray-600">
               As one of the best loading conveyor manufacturer in China. YiFan Conveyor supply small individual conveyors, through to complete factory installations. The flexible roller conveyor systems use PLC control with distribution software, sensors, pneumatics and electrics. Our installation and service team are always ready for full support, locally or internationally.
            </p>
            <br />
            <div className="flex">
            <div>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Receiving an inquiry</li>
                <li>Understand customer requirements</li>
                <li>Recommend suitable conveyor type and price</li>
                <li>Further communication on product technical parameters, payment terms, delivery time</li>
                <li>Confirm order, send PI, pay 30% deposit</li>
                <li>Double check requirements and arrange production</li>
                <li>Sending photo and video</li>
                <li>Pay 70% balance and arrange shipment</li>
                <li>Online assist installation</li>
            </ul>
            </div>
            <div>
            <img src="/img/Product/img-1.jpg" alt="service provide" className="mt-6 rounded-lg shadow-lg w-full max-w-3xl" />
            </div>
            </div>
        </div>
    );
}