// utils/sendMail.js
import axios from 'axios';
import { CONTACT_URL } from './url';

export const sendMailData = async (formData, productUrl) => { 
    console.log(formData, productUrl);
    try {
        const response = await axios.post(CONTACT_URL, {
            name: formData.name,
            phone: formData.phone,
            offer_price: formData.offer_price,
            message: formData.message,
            propertyUrl: productUrl,
        });

        return response
    } catch (error) {
        console.error("Error sending email:", error);
    }
};
