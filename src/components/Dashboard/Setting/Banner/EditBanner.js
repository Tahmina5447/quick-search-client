import { useUpdateBannerMutation } from "@/redux/features/bannerApi";
import CustomModal from "@/shared/Modal/CustomModal";
import { singleImageUploadupload } from "@/utils/hooks/singleImageUploader";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaImage } from "react-icons/fa";
import { toast } from "react-toastify";

const EditBanner = ({editModalOpen,setEditModalOpen,data}) => {
 
  const [image, setImage] = useState(null);
  const [imageUploading, setImageUploading] = useState(false);
  const [status, setStatus] = useState("");
  const [position, setPosition] = useState("");
  const [
    updateBanner,
    { isLoading, error },
  ] = useUpdateBannerMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  useEffect(()=>{
    setPosition(data?.position)
  },[data])

  // edit banner function--------------------
  const handleEditBanner = async (values) => {
    try {
      const body = {
        position: values?.position || position,
        status: status || data?.status,
        image: image|| data?.image,
      };
      console.log("first",body,"id",data?._id)
      const response = await updateBanner({body,id:data?._id});
      console.log("response",response)
      if (response?.data?.status === "success") {
        setEditModalOpen(false)
        toast.success("Banner Updated successfully!");
        setImage(null)
        setPosition('')
        setStatus('')
        reset();
      } else if (response?.error) {
        toast.error(response?.error?.data?.message);
      }
    } catch (error) {
      toast.error(err?.data?.message || "Banner Updated failed. Try again!");
    }
  };

  const handleImage = async (e) => {
    await singleImageUploadupload({
      imageFile: e.target.files[0],
      setImageUrl: setImage,
      setImageUploading: setImageUploading,
    });
  };
  return (
    <>
      <CustomModal
        modalOPen={editModalOpen}
        setModalOpen={setEditModalOpen}
        title={"Edit Banner"}
      >
        <div>
          <form
            onSubmit={handleSubmit(handleEditBanner)}
            className="w-full mt-[0px]"
          >
            <div className=" flex items-center gap-5 md:flex-row flex-col mt-2">
              <div className="flex flex-col items-start w-full mt-3">
                <label
                  htmlFor="[position]"
                  className="mb-1.5 font-semibold text-sm text-dark-gray"
                >
                  Position
                </label>
                <input
                  className="py-[12px] h-[45px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                  type={"number"}
                  defaultValue={position}
                  placeholder={"Enter Position"}
                  id="position"
                  {...register("position", {
                    required: {
                      value: true,
                      message: "Position is required.",
                    },
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Position must consist of digits only.",
                    },
                  })}
                  onKeyUp={(e) => {
                    trigger("position");
                  }}
                />
                <small className="text-[#FF4B2B] text-xs ml-2 font-medium my-2">
                  {errors?.position?.message}
                </small>
              </div>
              <div className="w-full ">
                <label htmlFor="" className=" text-sm mb-1 font-semibold">
                Image
                </label>
                <div className=" outline-none  border-[1px]  focus:border-primary bg-gray-100 focus:bg-transparent flex items-center gap-1 px-2 rounded-md">
                  <FaImage className=" text-green-500 text-[20px]" />
                  <label
                    htmlFor="image"
                    className="cursor-pointer text-sm text-gray-400 py-2.5"
                  >
                    {imageUploading ? "Uploading..." : "Add Banner image"}
                  </label>
                  <input
                    type="file"
                    id="image"
                    onChange={handleImage}
                    className="hidden bg-transparent text-sm py-2 pr-3 outline-none w-full"
                  />
                </div>
              </div>
            </div>
            {(image||data?.image) && (
              <div className="  w-[100%] h-[150px] p-1 bg-white shadow-md rounded-md mt-3 ">
                <img
                  src={image||data?.image}
                  width={500}
                  height={500}
                  alt="image"
                  className="w-full h-full object-contain "
                />
              </div>
            )}
            <div className={`flex relative flex-col w-full min-h-6`}>
              <label className="font-semibold text-sm" htmlFor="status">
                Status:
              </label>
              <select
                type="text"
                className="  border-[1px]  focus:border-primary bg-gray-100 focus:bg-transparent outline-none text-sm py-3 px-2 rounded-md flex-1 capitalize max-h-11"
                id="status"
                required={true}
                value={status ||data?.status}
                onChange={(e) => setStatus(e.target?.value)}
              >
                <option disabled value="">
                  Status
                </option>
                <option value={"active"}>Active</option>
                <option value={"pending"}>Pending</option>
              </select>
            </div>

            <div className=" mt-6">
              <button
                disabled={isLoading}
                type="submit"
                className=" bg-primary text-white w-full py-3 text-sm rounded-lg font-semibold"
              >
                {isLoading ? "Loading..." : "Update Banner"}
              </button>
            </div>
          </form>
        </div>
      </CustomModal>
    </>
  );
};

export default EditBanner;
