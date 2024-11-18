import React from 'react';
import FeaturedCard from "./FeaturedCard";
import Link from "next/link";
import { IoDocumentTextOutline } from "react-icons/io5";

import Image from 'next/image';
import ContactForm from '../Contact/ContactForm';

const Contact = () => {
    const featuredData = [
        {
            title: "Business Park Theale C1",
            id: 1,
            price: "$58,000",
            image: "/assets/Apartment/house3.avif"
        },
        {
            title: "Business Park Theale C1",
            id: 2,
            price: "$58,000",
            image: "/assets/Apartment/house3.avif"
        },
        {
            title: "Business Park Theale C1",
            id: 3,
            price: "$58,000",
            image: "/assets/Apartment/house3.avif"
        },
        {
            title: "Business Park Theale C1",
            id: 4,
            price: "$58,000",
            image: "/assets/Apartment/house3.avif"
        },
        {
            title: "Business Park Theale C1",
            id: 5,
            price: "$58,000",
            image: "/assets/Apartment/house3.avif"
        },
    ]
    return (
        <div className="pb-8 md:pb-12">
            <div className="flex flex-col md:flex-row gap-7 max-container">
                {/* Contact us section------------- */}
                <div className="bg-white rounded p-4 md:p-6 w-full">
                <div className="">
                        <h2 className="text-lg font-medium mt-2 mb-3">
                            Contact Us
                        </h2>
                        <ContactForm/>
                    </div>
                    
                </div>
                {/* featured section--------------------- */}
                {/* <div className=" w-full md:w-3/12 flex gap-7 flex-col">
                    <div className="bg-white  rounded p-4 md:p-6 sticky top-0">
                        <h1 className="text-lg font-medium mt-2 mb-3">Recent Post</h1>
                        <div>
                            {featuredData?.map((data, index) =>
                                <div key={index} className="flex items-center gap-2 text-base mt-2 text-black/60">
                                    <IoDocumentTextOutline/>
                                    <Link href='#' className="text-sm text-black/80 hover:text-primary duration-300 ">{data?.title}</Link>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="bg-white  rounded p-4 md:p-6 sticky top-0">
                        <h1 className="text-lg font-medium mt-2 mb-3">Search Keyword</h1>
                        <div>
                           <input
                           type="text"
                           className="border border-gray-200 w-full rounded px-2.5 py-2 mb-3 text-sm"
                           placeholder="Type Keyword"
                           />
                           <input
                                    className="text-white btn bg-primary cursor-pointer border-0  px-6 text-xs font-bold w-full rounded-md py-3.5"
                                    type="submit"
                                    value="Search"
                                />
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Contact;