export default function  FooterDetails() {
    return (
 <footer className="w-full bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 black">
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-2 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
                <div className="col-span-full mb-10 lg:col-span-1 lg:mb-0">
                    <a  className="flex justify-center lg:justify-start">
                        <h3 className="text-white bold">AV Engineers and conveyor system</h3>
                    </a>
                    <p className="py-8 text-sm lg:max-w-xs text-center lg:text-left text-white">Trusted in more than 5 countries & more than 1 lakh customers. Have any query ?</p>
                </div>
                <div className="lg:mx-auto text-left text-white">
                    <h4 className="text-lg font-medium mb-7 bold">CONTACT</h4>
                    <ul className="text-sm  transition-all duration-500">
                        <li className="mb-2">tel:+91 93705 44744</li>
                        <li className="mb-2">tel:+91 75882 49412</li>
                        <li className="mb-2 underline underline-offset-1">info@avengineersindia.com</li>
                        <li className="mb-2 underline underline-offset-1"><a href="/privacy-policy">privacy policy</a></li>
                    </ul>
                </div>
                <div className="lg:mx-auto text-left ">
                    <h4 className="text-lg text-white bold font-medium mb-7">DEVELOPMENT CENTER</h4>
                    <ul className="text-sm  text-white">
                        <li className="mb-6"> No. 308, Dehu - Talawade Road, Vitthalwadi, Dehu Bypass, Talawade, Pune - 412109, Maharashtra, India</li>
                        {/* <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">Icons Assets</a></li>
                        <li className="mb-6"><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">Responsive Blocks</a></li>
                        <li><a href="javascript:;"  className=" text-gray-600 hover:text-gray-900">Components Library</a></li> */}
                    </ul>
                </div>
                
            </div>
            <div className="border-t border-gray-200">
                <p className="text-sm text-right text-white">
                    ©2024 AV Engineers Pvt Ltd. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
                                            
    );
}
