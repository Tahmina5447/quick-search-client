import React from "react";
import Image from "next/image";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <div id="contactUsButtonClick" className=" md:my-[100px] my-5">
      <div id="contact" className="max-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-20 gap-10">
          <div className="relative">
            <Image
              src={"/assets/Apartment/house4.avif"}
              alt="Contact Us"
              className=" object-cover mx-auto h-full w-full rounded-2xl shadow-xl"
              height={800}
              width={1000}
            />
            <div className="absolute inset-0 bg-black opacity-20 rounded-2xl shadow-xl overflow-hidden "></div>
          </div>
          <div className="my-auto md:py-8 mb-10 md:mb-0">
            <h2 className="md:text-3xl  text-xl font-semibold">Contact Us</h2>
            <p className="text-sm md:text-base  text-black/80 my-4 md:my-6">
              Our friendly team would love to here from you.
            </p>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
