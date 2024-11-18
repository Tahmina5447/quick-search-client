import React from 'react';

const DashboardSectionWrapper = ({children}) => {
    return (
        <div className='bg-white shadow-md rounded-xl lg:p-8 md:p-5 p-3 mt-8'>
            {children}
        </div>
    );
};

export default DashboardSectionWrapper;