import React from "react";
import { FaCar } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { MdOutlineBathtub } from "react-icons/md";

function Overview({data}) {

  const dateObj = new Date(data?.updatedAt);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = dateObj.toLocaleDateString(undefined, options); 


  return (
    <div className=" bg-white shadow rounded-md p-7 my-8 ">
      <h2 className=" text-lg font-semibold mb-1">Overview</h2>
      <div className=" flex items-center justify-between gap-5 flex-wrap">
        <div className=" fle flex-col gap-2">
          <h3 className=" font-medium text-sm">Updated On:</h3>
          <h3 className=" font-medium text-sm">{formattedDate}</h3>
        </div>
        <div className="flex flex-col items-center gap-3 justify-center">
          <IoBedOutline className=" text-[20px]" />
          <h3 className=" font-medium text-sm">{data?.features?.bedroom} Bedrooms</h3>
        </div>
        <div className="flex flex-col items-center gap-3 justify-center">
          <MdOutlineBathtub className=" text-[20px]" />
          <h3 className=" font-medium text-sm">{data?.features?.bathroom} Bathrooms</h3>
        </div>
        <div className="flex flex-col items-center gap-3 justify-center">
          <FaCar className=" text-[20px]" />
          <h3 className=" font-medium text-sm">{data?.features?.parking}  Parking</h3>
        </div>
        <div className="flex flex-col items-center gap-3 mt-2 justify-center">
          <div className="">
            <svg
              width="18"
              height="18"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M357.143 0H42.8571C31.4907 0 20.5898 4.50961 12.5526 12.5368C4.51529 20.5639 0 31.4511 0 42.8032V356.694C0 368.046 4.51529 378.933 12.5526 386.96C20.5898 394.987 31.4907 399.497 42.8571 399.497H357.143C368.509 399.497 379.41 394.987 387.447 386.96C395.485 378.933 400 368.046 400 356.694V42.8032C400 31.4511 395.485 20.5639 387.447 12.5368C379.41 4.50961 368.509 0 357.143 0ZM371.429 356.694C371.429 360.478 369.923 364.107 367.244 366.782C364.565 369.458 360.932 370.961 357.143 370.961H171.429V299.623H314.286C318.075 299.623 321.708 298.119 324.387 295.444C327.066 292.768 328.571 289.139 328.571 285.355C328.571 281.571 327.066 277.942 324.387 275.266C321.708 272.59 318.075 271.087 314.286 271.087H157.143C153.354 271.087 149.72 272.59 147.041 275.266C144.362 277.942 142.857 281.571 142.857 285.355V370.961H42.8571C39.0683 370.961 35.4347 369.458 32.7556 366.782C30.0765 364.107 28.5714 360.478 28.5714 356.694V171.213H142.857V199.748C142.857 203.532 144.362 207.162 147.041 209.837C149.72 212.513 153.354 214.016 157.143 214.016C160.932 214.016 164.565 212.513 167.244 209.837C169.923 207.162 171.429 203.532 171.429 199.748V114.142C171.429 110.358 169.923 106.729 167.244 104.053C164.565 101.377 160.932 99.8742 157.143 99.8742C153.354 99.8742 149.72 101.377 147.041 104.053C144.362 106.729 142.857 110.358 142.857 114.142V142.677H28.5714V42.8032C28.5714 39.0192 30.0765 35.3901 32.7556 32.7144C35.4347 30.0387 39.0683 28.5355 42.8571 28.5355H242.857V185.481C242.857 189.265 244.362 192.894 247.041 195.57C249.72 198.245 253.354 199.748 257.143 199.748H314.286C318.075 199.748 321.708 198.245 324.387 195.57C327.066 192.894 328.571 189.265 328.571 185.481C328.571 181.697 327.066 178.068 324.387 175.392C321.708 172.716 318.075 171.213 314.286 171.213H271.429V28.5355H357.143C360.932 28.5355 364.565 30.0387 367.244 32.7144C369.923 35.3901 371.429 39.0192 371.429 42.8032V356.694Z"
                fill="#222222"
              ></path>
            </svg>
          </div>
          <h3 className=" font-medium text-sm">{data?.area}  ft2</h3>
        </div>
      </div>
    </div>
  );
}

export default Overview;
