import React from 'react';

const StatusButton = ({status}) => {
    return (
        <div className={`${status==="pending"?"bg-warning":"bg-success"} rounded text-xs py-0.5 text-white font-semibold flex items-center justify-center uppercase w-16`}>
            {status}
        </div>
    );
};

export default StatusButton;