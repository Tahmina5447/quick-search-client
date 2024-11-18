
import React from "react";
import { RiWhatsappFill } from "react-icons/ri";

const WhatsAppButton = ({ productUrl, productName, productPrice, number }) => {
  const productDetails = {
    name: productName,
    price: productPrice,
    url: productUrl,
  };

  const whatsappMessage = `Hello,

I am interested in this Properties:
${productDetails.name}

You can view it here: ${productDetails.url}

Price: ${productDetails.price}৳

Thank you!`;

  const whatsappLink = `https://wa.me/+88${number}/?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <button type="button" className=" w-full border text-primary  border-primary hover:text-white py-2 px-5 rounded-md text-sm hover:bg-primary flex items-center justify-center gap-1 duration-300">
          <RiWhatsappFill /> WhatsApp
        </button>
      </a>
    </>
  );
};

export default WhatsAppButton;
