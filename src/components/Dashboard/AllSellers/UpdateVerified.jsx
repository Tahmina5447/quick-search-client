import { Modal } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { USER_URL } from "../../../../apis/url";

function UpdateVerified({ setModalOpen, modalOPen, token, row,setUpdate, modalStyle = "" }) {
  const [userType, setUserType] = useState();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setUserType(row?.isVerified)
  },[row])

  const handelUpdate = () => {
    setLoading(true);
    const body = {
      isVerified: userType,
    };

    const config = {
      headers: {
        Authorization: `${token}`,
      },
    };

    axios
      .patch(`${USER_URL}/${row?._id}`, body, config)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log(res);
          setModalOpen(false)
          setUpdate(Math.random())
          setTimeout(() => {
            setSuccess("");
          }, 1500);
          setLoading(false);
          setSuccess("User Update Successful...");
          setError("");
        } else {
          setLoading(false);
          setError("Please try again!");
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError("Please try again!");
      });
  };

  return (
    <div>
      <Modal
        centered
        cancelText
        cancelButtonProps
        footer={null}
        open={modalOPen}
        closeIcon={null}
        onOk={() => setModalOpen(false)}
        onCancel={() => setModalOpen(false)}
        width={450}
        className={``}
        style={modalStyle}
      >
        <div>
          <div className="z-[50000000] rounded-[20px] bg-white">
            <div className=" flex items-center justify-between">
              <h2 className=" text-lg font-medium text-dark-gray">
                Update User Type
              </h2>
              <button
                onClick={() => setModalOpen(false)}
                className="  text-[30px] h-[14px] rounded-lg flex items-center justify-center hover:text-[#FF5959] text-[#68769F]"
              >
                <IoCloseSharp />
              </button>
            </div>
            <div className="w-full">
              <div className=" my-5">
                <div className="flex flex-col items-start w-full">
                  <label
                    htmlFor="otp"
                    className="mb-1.5 font-normal text-sm text-dark-gray"
                  >
                    User Verified
                  </label>
                  <select
                    type="text"
                    className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                    value={userType}
                    defaultValue={row?.userType}
                    onChange={(e) => setUserType(e.target.value)}
                  >
                    <option value={"true"}>Verified</option>
                    <option value={"false"}>Un Verified</option>
                  </select>
                </div>
              </div>
              <div className="">
                {error && (
                  <span className=" text-red-500 text-center text-sm mb-2 font-semibold">
                    {error ? error : ""}
                  </span>
                )}
                {success && (
                  <p className=" bg-green-500 w-full text-white rounded-md py-1 px-3 text-start text-sm mb-4 font-semibold">
                    {success ? success : ""}
                  </p>
                )}
              </div>
              <div className="mt-[20px] flex items-center gap-5">
                <button
                  onClick={() => setModalOpen(false)}
                  className="font-bold w-full  h-[40px] px-6 hover:text-red-500 hover:border-red-500 duration-300 rounded-[10px] bg-transparent text-secondary border border-secondary"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handelUpdate()}
                  className="font-bold w-full  h-[40px] px-6 bg-primary duration-300 rounded-[10px] text-white text-sm border border-secondary"
                >
                  {loading ? "Loading..." : "Update"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default UpdateVerified;
