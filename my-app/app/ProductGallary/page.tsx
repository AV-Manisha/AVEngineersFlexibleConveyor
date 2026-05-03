import Header from "@/component/atom/Header";
import conveyorUnits from '../../public/ProductInfo/Product.json';
import FooterDetails from "@/component/atom/Footer";

export default function ProductGallary() {   
return (
        <>
         <Header /> 
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {conveyorUnits.map((unit) => (
                <div key={unit.id}>
                <img className="h-auto max-w-full rounded-base" src={unit.src} alt={unit.alt}  />
                </div>
            ))}
            </div>
            <FooterDetails />
        </>
    )
}
