"use client";
import {
  useAddBannerMutation,
  useDeleteBannerMutation,
  useGetBannerQuery,
  useUpdateBannerMutation,
} from "@/redux/features/bannerApi";
import DeleteButton from "@/shared/ActionButton/DeleteButton";
import EditButton from "@/shared/ActionButton/EditButton";
import StatusButton from "@/shared/ActionButton/StatusButton";
import BreakCame from "@/shared/BreakCame";
import DashboardSectionWrapper from "@/shared/DashboardSectionWrapper";
import CustomModal from "@/shared/Modal/CustomModal";
import CustomTable from "@/shared/Table/CustomTable";
import { singleImageUploadupload } from "@/utils/hooks/singleImageUploader";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaImage } from "react-icons/fa";
import { toast } from "react-toastify";

const BannerSetting = () => {
  const [addBanner, { isLoading, error }] = useAddBannerMutation();
  const [
    deleteBanner,
    { isLoading: deleteBannerLoading, error: deleteBannerError },
  ] = useDeleteBannerMutation();
  const {
    data: banners,
    isLoading: bannerLoading,
    error: bannerError,
  } = useGetBannerQuery();

  const [
    updateBanner,
    { isLoading: updateBannerLoading, error: updateBannerError },
  ] = useUpdateBannerMutation();
  const [imageUrl, setImageUrl] = useState(null);
  const [imageUploading, setImageUploading] = useState(false);
  const [status, setStatus] = useState("");
  const [editModalOpen, setEditModalOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();
  // add banner function---------------------------
  const onSubmit = async (values) => {
    try {
      const body = {
        position: values?.position,
        status: status,
        image: imageUrl,
      };
      const response = await addBanner(body);
      if (response?.data?.status === "success") {
        toast.success("Banner added successfully!");
        setImageUrl(null);
        reset();
      } else if (response?.error) {
        toast.error(response?.error?.data?.message);
      }
    } catch (error) {
      toast.error(err?.data?.message || "Banner added failed. Try again!");
    }
  };

  // edit banner function--------------------
  const handleEditBanner = async (values) => {
    try {
      const body = {
        position: values?.position,
        status: status,
        image: imageUrl,
      };
      const response = await addBanner(body);
      if (response?.data?.status === "success") {
        toast.success("Banner added successfully!");
        setImageUrl(null);
        reset();
      } else if (response?.error) {
        toast.error(response?.error?.data?.message);
      }
    } catch (error) {
      toast.error(err?.data?.message || "Banner added failed. Try again!");
    }
  };

  const handleImage = async (e) => {
    await singleImageUploadupload({
      imageFile: e.target.files[0],
      setImageUrl: setImageUrl,
      setImageUploading: setImageUploading,
    });
  };

  const columns = [
    {
      title: "S/N",
      key: "_id",
      render: (row, record, index) => (
        <span className="text-[14px] font-normal text-info">{index + 1}</span>
      ),
      width: "20px",
    },
    {
      title: "Image",
      render: (row) => (
        <>
          <img
            src={row?.image ? row?.image : "/assets/user1.jpeg"}
            width={50}
            height={50}
            alt="logo"
            className=" w-[40px] h-[40px] rounded-md"
          />
        </>
      ),
      width: "70px",
    },
    {
      title: "Position",
      key: "_id",
      render: (row) => (
        <span className=" text-[14px] font-normal text-info">
          {row?.position}
        </span>
      ),
    },

    {
      title: "Status",
      key: "_id",
      render: (row) => <StatusButton status={row?.status} />,
    },

    {
      title: "Actions",
      key: "_id",
      render: (row) => (
        <>
          <div className="flex items-center gap-2 flex-wrap">
            <EditButton setEditModalOpen={setEditModalOpen} id={row?._id} />
            <DeleteButton
              id={row?._id}
              deleteMethod={deleteBanner}
              loading={deleteBannerLoading}
              error={deleteBannerError}
            />
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <BreakCame
        type={"/dashboard/admin"}
        data={[{ title: "Add Banner", url: "setting/banner" }]}
      />
      <DashboardSectionWrapper>
        {/*-------------------------add banner */}
        <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-[0px]">
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
                Banner Image
              </label>
              <div className=" outline-none  border-[1px]  focus:border-primary bg-gray-100 focus:bg-transparent flex items-center gap-1 px-2 rounded-md">
                <FaImage className=" text-green-500 text-[20px]" />
                <label
                  htmlFor="banner"
                  className="cursor-pointer text-sm text-gray-400 py-2.5"
                >
                  {imageUploading ? "Uploading..." : "Add Banner image"}
                </label>
                <input
                  type="file"
                  id="banner"
                  onChange={handleImage}
                  className="hidden bg-transparent text-sm py-2 pr-3 outline-none w-full"
                />
              </div>
            </div>
          </div>
          {imageUrl && (
            <div className="  w-[100%] h-[150px] p-1 bg-white shadow-md rounded-md mt-3 ">
              <img
                src={imageUrl}
                width={500}
                height={500}
                alt="NID back image"
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
              value={status}
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
              {isLoading ? "Loading..." : "Add Banner"}
            </button>
          </div>
        </form>

        {/*--------------------- banner table*/}
        <h2 className="text-base font-semibold mt-8">All Banners:</h2>
        {bannerLoading ? (
          <>
            <div className="h-[30vh] flex items-center justify-center">
              <h2 className="text-lg font-bold text-gray-600">Loading...</h2>
            </div>
          </>
        ) : (
          <>
            <div className="overflow-x-auto">
              <CustomTable
                tableData={banners?.data?.result}
                columns={columns}
                scroll={{}}
              />
            </div>
          </>
        )}
      </DashboardSectionWrapper>

      {/* edit banner---------------------------------- */}
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
                  Banner Image
                </label>
                <div className=" outline-none  border-[1px]  focus:border-primary bg-gray-100 focus:bg-transparent flex items-center gap-1 px-2 rounded-md">
                  <FaImage className=" text-green-500 text-[20px]" />
                  <label
                    htmlFor="banner"
                    className="cursor-pointer text-sm text-gray-400 py-2.5"
                  >
                    {imageUploading ? "Uploading..." : "Add Banner image"}
                  </label>
                  <input
                    type="file"
                    id="banner"
                    onChange={handleImage}
                    className="hidden bg-transparent text-sm py-2 pr-3 outline-none w-full"
                  />
                </div>
              </div>
            </div>
            {imageUrl && (
              <div className="  w-[100%] h-[150px] p-1 bg-white shadow-md rounded-md mt-3 ">
                <img
                  src={imageUrl}
                  width={500}
                  height={500}
                  alt="NID back image"
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
                value={status}
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
                {isLoading ? "Loading..." : "Add Banner"}
              </button>
            </div>
          </form>
        </div>
      </CustomModal>
    </>
  );
};

export default BannerSetting;
