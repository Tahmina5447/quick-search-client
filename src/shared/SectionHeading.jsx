import React from 'react';

const SectionHeading = ({title,subtitle}) => {
    return (
        <div>
            <h1 className="text-[#222222] font-medium text-[20px] md:text-[32px] text-center">{title}</h1>
            <p className="text-[#7a7a7a]  text-xs md:text-base text-center mt-3 md:mt-4 max-w-[600px] mx-auto">{subtitle}</p>
        </div>
    );
};

export default SectionHeading;