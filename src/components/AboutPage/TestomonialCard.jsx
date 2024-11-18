import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

const TestomonialCard = ({testomonial}) => {
    return (
        <div className="bg-white p-3 md:p-7 rounded-md shadow-md">
                     
                      <div className="flex items-center gap-4 ">
                      <Image
                        src={testomonial?.image}
                        alt="Customer"
                        className='h-16 w-16 rounded-full object-cover '
                        height={700}
                        width={1000}
                      />
                      <div>
                      <p className="text-base md:text-lg font-medium">
                        {testomonial?.name}
                      </p>
                      <p className=" text-xs md:text-sm mt-0.5 text-black/80">
                        {testomonial?.position}
                      </p>
                      </div>
                      </div>
                       <p className="text-xs md:text-sm my-4 md:my-6 text-black/80 ">
                       {testomonial?.comment?.slice(0,80)}...
                      </p>
                      <div className="text-sm text-orange-300 flex items-center gap-2">
                      <FaStar/>
                      <FaStar/>
                      <FaStar/>
                      <FaStar/>
                      <FaStar/>
                      </div>
                    </div>
    );
};

export default TestomonialCard;