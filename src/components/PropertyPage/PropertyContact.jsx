import React from "react";
import ContactForm from "../Contact/ContactForm";

function PropertyContact() {
  return (
    <div className="md:my-[50px] my-5">
      <div className=" max-container">
        <div className=" bg-white  shadow-sm rounded-md p-8">
          <h2 className=" text-xl mb-5 font-semibold">Contact</h2>
          <div className=" flex flex-col md:flex-row items-start gap-5 justify-between">
            <div className=" w-full">
              <ContactForm/>
            </div>
            <div className=" w-full">
              <div className="w-full h-full">
                <iframe
                  src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.7242144640986!2d89.5573874!3d22.8126807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff91f7a70b23f5%3A0xdcfaa1e9aca2b8df!2sPixels%20Khulna!5e0!3m2!1sen!2sbd!4v1711624323760!5m2!1sen!2sbd"}
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-[450px]"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyContact;
