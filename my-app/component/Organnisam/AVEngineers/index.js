"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "@material-tailwind/react";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import ProductDisplay from '@/component/ProductDisplay';
 
export default function GalleryWithCarousel() {
  return (
    <>
      <div className="bg-black text-white text-sm py-2 px-4 sm:px-10">
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
      </div>
    <header className="flex shadow-md py-4 px-4 sm:px-10 bg-white min-h-[70px] tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between gap-5 w-full">
        <a href="javascript:void(0)" className="max-sm:hidden"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" className="w-36" /></a>
        <a href="javascript:void(0)" className="hidden max-sm:block"><img src="https://readymadeui.com/readymadeui-short.svg" alt="logo" className="w-9" /></a>

        <div id="collapseMenu"
          className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50">
          <button id="toggleClose" className="lg:hidden fixed top-2 right-4 z-[100] rounded-full bg-white w-9 h-9 flex items-center justify-center border border-gray-200 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5 fill-black" viewBox="0 0 320.591 320.591">
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"></path>
            </svg>
          </button>

          <ul
            className="lg:flex gap-x-4 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
            <li className="mb-6 hidden max-lg:block">
              <a href="javascript:void(0)"><img src="https://readymadeui.com/readymadeui.svg" alt="logo" className="w-36" />
              </a>
            </li>
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3">
              <a href='javascript:void(0)'
                className="hover:text-blue-700 text-blue-700 block font-medium text-[15px]">Home</a>
            </li>
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3"><a href='javascript:void(0)'
              className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]">Team</a>
            </li>
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3"><a href='javascript:void(0)'
              className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]">Feature</a>
            </li>
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3"><a href='javascript:void(0)'
              className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]">Blog</a>
            </li>
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3"><a href='javascript:void(0)'
              className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]">About</a>
            </li>
            <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 px-3"><a href='javascript:void(0)'
              className="hover:text-blue-700 text-slate-900 block font-medium text-[15px]">Contact</a>
            </li>
          </ul>
        </div>

        <div className="flex max-lg:ml-auto space-x-4">
          <button
            className="px-4 py-2 text-sm rounded-full font-medium cursor-pointer tracking-wide text-slate-900 border border-gray-400 bg-transparent hover:bg-gray-50 transition-all">Login</button>
          <button
            className="px-4 py-2 text-sm rounded-full font-medium cursor-pointer tracking-wide text-white border border-blue-600 bg-blue-600 hover:bg-blue-700 transition-all">Sign
            up</button>

          <button id="toggleOpen" className="lg:hidden cursor-pointer">
            <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
    <div>
      <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} dynamicHeight={true} showThumbs={false} transitionTime={1000} interval={1000} animationHandler="fade" swipeable={false}>
      <div className="relative h-screen">
        <Image
        src="/img/image-1.webp"
        alt="image 1"
        fill
        className="object-cover object-center"
        />
      </div>
      <div className="relative h-screen">
        <Image
        src="/img/image-2.jpg"
        alt="image 2"
        fill
        className="object-cover object-center"
        />

      </div>
      <div className="relative h-screen">
        <Image
        src="/img/image-3.jpg"
        alt="image 3"
        fill
        className="object-cover object-center"
        />
      </div>
      </Carousel>
    </div>
    <ServiceProvide />
    <ProductDisplay />
    </>
  );
}
