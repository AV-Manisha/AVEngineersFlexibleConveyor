"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "@material-tailwind/react";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
// import ProductDisplay from '@/component/atom/ProductDisplay';
// import UnitList from "@/component/atom/UnitList";
import ServiceProvide from "@/component/serviceProvide";
// import FooterDetails from "@/component/atom/Footer";
import ProductList from "../Product/Page";
 
export default function GalleryWithCarousel() {
  return (
    <div>
      {/* <div className="bg-black text-white text-sm py-2 px-4 sm:px-10 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="text-center sm:text-left">
            AV Engineers - Conveyor Manufacturer and One-Stop Solution Service Provider for Truck Loading Conveyor and Flexible Roller Conveyor System.
            <div className="mt-1 sm:mt-0">
              E-Mail: <a href="mailto:sales01@yfconveyor.com" className="underline hover:text-gray-300">sales01@yfconveyor.com</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="hover:text-gray-300" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.657 9.128 8.438 9.877v-6.99H7.898v-2.887h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.56v1.875h2.773l-.443 2.887h-2.33v6.99C18.343 21.128 22 16.991 22 12z"/></svg>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:text-gray-300" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zm9.75 2a1 1 0 110 2 1 1 0 010-2zm-4.25 1.25a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm0 1.5a4 4 0 100 8 4 4 0 000-8z"/></svg>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-gray-300" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5A2.5 2.5 0 002.5 6v12a2.5 2.5 0 002.48 2.5h.02A2.5 2.5 0 007.5 18V6a2.5 2.5 0 00-2.52-2.5zM4 8.75h2v9H4v-9zm4.75 0h1.92v1.22h.03c.27-.51.94-1.05 1.94-1.05 2.07 0 2.45 1.36 2.45 3.13v5.7h-2v-5.05c0-1.21-.02-2.77-1.69-2.77-1.69 0-1.95 1.32-1.95 2.68v5.14h-2v-9z"/></svg>
            </a>
          </div>
        </div>
      </div> */}
    <div>
      <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} dynamicHeight={true} showThumbs={false} transitionTime={1000} interval={1000} animationHandler="fade" swipeable={false}>
      <div className="relative h-screen">
        <Image
        src="/img/image-1.jpg"
        alt="image 1"
        fill
        className="object-cover object-center"
        />
      </div>
      <div className="relative h-screen">
        <Image
        src="/img/image-4.jpg"
        alt="image 2"
        fill
        className="object-cover object-center"
        />

      </div>
      {/* <div className="relative h-screen">
        <Image
        src="/img/image-3.jpg"
        alt="image 3"
        fill
        className="object-cover object-center"
        />
      </div> */}
      </Carousel>
    </div>
    <ServiceProvide />
    <ProductList/>

    </div>
  );
}
