import React from "react";

interface Product {
    id: number;
    imageUrl: string;
    title: string;
    description: string;
    price: string;
}

const ProductDisplay: React.FC = () => {
    // Dummy list of products
    const products: Product[] = [
        {
            id: 1,
            imageUrl: "/img/Product/img-1.jpg",
            title: "Product 1",
            description: "This is a description for Product 1.",
            price: "$29.99"
        },
        {
            id: 2,
            imageUrl: "/img/Product/img-2.jpg",
            title: "Product 2",
            description: "This is a description for Product 2.",
            price: "$39.99"
        },
        {
            id: 3,
            imageUrl: "/img/Product/img-3.jpg",
            title: "Product 3",
            description: "This is a description for Product 3.",
            price: "$49.99"
        },
    ];

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold text-center mb-8">Product List</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                    <div key={product.id} className="max-w-xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                        <div className="w-full h-70">
                            <img
                                src={product.imageUrl}
                                alt={product.title}
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductDisplay;