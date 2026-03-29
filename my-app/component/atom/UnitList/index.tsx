import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function UnitList() {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const conveyorUnits = [
        {
            id: 1,
            ProductName: 'Conveyor Unit 1',
            src: '/img/Product/img-1.jpg',
            alt: 'conveyor unit 1',
        },
        {
            id: 2,
            ProductName: 'Conveyor Unit 2',
            src: '/img/Product/img-2.jpg',
            alt: 'conveyor unit 2',
        },
        {
            id: 3,
            ProductName: 'Conveyor Unit 3',
            src: '/img/Product/img-3.jpg',
            alt: 'conveyor unit 3',
        },
        {
            id: 4,
            ProductName: 'Conveyor Unit 4',
            src: '/img/Product/img-4.webp',
            alt: 'conveyor unit 4',
        },
        {
            id: 5,
            ProductName: 'Conveyor Unit 3',
            src: '/img/Product/img-5.webp',
            alt: 'conveyor unit 5',
        },
        {
            id: 6,
            ProductName: 'Conveyor Unit 3',
            src: '/img/Product/img-6.webp',
            alt: 'conveyor unit 6',
        },
        {
            id: 7,
            ProductName: 'Conveyor Unit 3',
            src: '/img/Product/img-7.webp',
            alt: 'conveyor unit 7',
        },
        {
            id: 8,
            ProductName: 'Conveyor Unit 3',
            src: '/img/Product/img-8.jpg',
            alt: 'conveyor unit 8',
        },
        {
            id: 9,
            ProductName: 'Conveyor Unit 3',
            src: '/img/Product/img-9.jpg',
            alt: 'conveyor unit 9',
        },
        {
            id: 10,
            ProductName: 'Conveyor Unit 3',
            src: '/img/Product/img-10.webp',
            alt: 'conveyor unit 10',
        },
        {
            id: 11,
            ProductName: 'Conveyor Unit 3',
            src: '/img/Product/img-11.jpg',
            alt: 'conveyor unit 11',
        },
        {
            id: 12,
            ProductName: 'Conveyor Unit 3',
            src: '/img/Product/img-12.webp',
            alt: 'conveyor unit 12',
        },

    ]

    return (
        <div className="flex flex-col justify-center bg-gray-50 w3-container p-4 pt-10">
            <h1 className="text-4xl font-bold mb-8 w3-center w3-animate-top">Product List</h1>
            <Carousel
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                responsive={responsive}
            >
                {conveyorUnits.map((unit) => (
                    <div key={unit.id}>
                        <div className="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
                            {/* <img className="w-full h-full object-cover" src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" /> */}
                            <img className="w-full h-full object-cover transform rounded-xl bg-white shadow-xl transition duration-300 hover:scale-120" src={unit.src} alt={unit.alt} />
                        </div>
                        <div className="p-6 text-center">
                            <h4 className="mb-1 text-xl font-semibold text-slate-800">
                                {unit.ProductName}
                            </h4>
                        </div>
                        {/* <p
                                    className="text-sm font-semibold text-slate-500 uppercase">
                                    Product Manager
                                </p> */}
                        {/* <p className="text-base text-slate-600 mt-4 font-light ">
                                The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to Naviglio where you can enjoy the main night life in Barcelona.
                            </p>
                        </div> */}
                        <div className="flex justify-center p-6 pt-2 gap-7">
                            <button className="min-w-32  rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                                
                                <Link href={`/${encodeURIComponent(unit.ProductName)}`}>More Details</Link>
                            </button>
                        </div> 
                    </div>

                ))}
            </Carousel>;
        </div>
    );
}

