import Link from "next/link";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import conveyorUnits from '../../public/ProductInfo/Product.json';

export default function ProductList() {

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


    return (
        <div className="flex flex-col justify-center bg-gray-50 w3-container p-4 pt-10">
            <h1 className="text-4xl font-bold mb-8 w3-center w3-animate-top">Product List</h1>
            <Carousel
                ssr={true} // means to render carousel on server-side.
                // infinite={true}
                // autoPlay={true}
                // autoPlaySpeed={1000}
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
                                
                                <Link href={`/Product/${unit.id}`}>More Details</Link>
                            </button>
                        </div> 
                    </div>

                ))}
            </Carousel>;
        </div>
    );
}

