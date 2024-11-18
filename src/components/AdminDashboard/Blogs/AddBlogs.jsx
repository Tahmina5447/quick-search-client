"use client";

import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import BreakCame from "@/shared/BreakCame";
import { toast } from "react-toastify";
import { ContextData } from "../../../../context/dataProviderContext";
import CustomInput from "@/shared/Input/CustomInput";
import DropImageCom from "@/shared/Input/DropImageCom";
import { IoMdClose } from "react-icons/io";
import dynamic from 'next/dynamic';
const ReactQuilTag = dynamic(() => import('./ReactQualTag'), { ssr: false });
import DropImageComSingal from "@/shared/Input/DropImageComSingal";
import { blogPost } from "../../../../apis/blog.api";
import { blogCategory } from "@/components/BlogPage/BlogHome";
// import ReactQuilTag from "./ReactQualTag";

function AddBlogs({ title, data, user }) {
  const [imageUploadErrorMessage, setImageUploadErrorMessage] = useState(null);
  const [imageUrl, setImageUrl] = useState();
  const [imageLoading, setImageLoading] = useState(false);
  const [rent, setRent] = useState("sell");
  const [loading, setLoading] = useState(false);
  const [slug, setSlug] = useState("");
  const [tags, setTags] = useState([]);
  const [value, setValue] = useState();
  const [richText, setValueOfRichText] = useState("");
  const [client, setClient] = useState(false);

  useEffect(() => {
    setClient(true);
  }, []);

  const { currentlyLoggedIn, token } = useContext(ContextData);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  function convertToUrlPath(e) {
    const inputString = e.target.value.slice(0, 100);
    const lowerCaseString = inputString.toLowerCase();
    const urlPath = lowerCaseString.replace(/[^a-zA-Z0-9]+/g, "-");
    setSlug(urlPath);
  }

  const onSubmit = async (values) => {
    console.log(values);
    setLoading(true);
    const body = {
      title: values?.title,
      description: richText,
      path: slug,
      category: values?.category,
      shortDescription: values?.shortDescription,
      tags: tags,
      userDetails: currentlyLoggedIn?._id,
      images: imageUrl,
      clickCount: 1,
    };

    console.log(body);

    const res = await blogPost(body, token);
    console.log(res);
    if (res.statusCode === 201) {
      setLoading(false);
      setImageUrl("");
      reset();
      setTags([]);
      setSlug("");
      toast.success("Blog Add Successfully!");
      setLoading(false);
    } else {
      setLoading(false);
      toast.error("Something went wrong, Please try again!");
    }
  };

  // --------------------------------------------handle multi image upload
  const imgUrl = `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`;

  const handleImageUpload2 = (e) => {
    setImageLoading(true);
    const image = e.target.files[0];
    const formData = new FormData();
    formData.append("image", image);

    fetch(imgUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        setImageUrl(result.data?.url);
        setImageLoading(false);
      });
  };

  const handelAddTag = () => {
    const newValue = value;
    setTags([...tags, newValue]);
    setValue("");
  };

  const HandelRemoveTag = (ind) => {
    const remove = tags.filter((item, index) => index !== ind);
    setTags(remove);
  };

  return (
    <div>
      <div>
        <h3 className=" text-[17px] font-medium">
          Welcome, {currentlyLoggedIn?.name}
        </h3>
        <h2 className=" text-[25px] font-semibold">Add Blog</h2>
        <BreakCame type={"admin"} data={[]} />
      </div>

      <div className=" mt-8">
        <div className=" bg-white shadow-md rounded-xl lg:p-8 md:p-5 p-3">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full mt-[0px]">
            <div className=" flex items-center gap-5 md:flex-row flex-col">
              <div className="flex flex-col items-start w-full mt-3">
                <label
                  htmlFor="otp"
                  className="mb-1.5 font-normal text-sm text-dark-gray"
                >
                  Blog Title
                </label>
                <input
                  className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                  type={"text"}
                  placeholder={"Blog Title"}
                  id="otp"
                  {...register("title", {
                    required: {
                      value: true,
                      message: "Please add title",
                    },
                  })}
                  onChange={convertToUrlPath}
                />
                <label className="label">
                  {errors.title?.type === "required" && (
                    <span className=" text-sm mt-1 text-red-500">
                      {errors.title.message}
                    </span>
                  )}
                </label>
              </div>
            </div>

            <div className=" flex items-center gap-5 md:flex-row flex-col">
              <div className="flex flex-col items-start w-full mt-3">
                <label
                  htmlFor="otp"
                  className="mb-1.5 font-normal text-sm text-dark-gray"
                >
                  Blog Path
                </label>
                <input
                  className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                  type={"text"}
                  placeholder={"Blog Path"}
                  onChange={(e) => setSlug(e.target.value)}
                  value={slug}
                  id="otp"
                />
              </div>
            </div>

            <div className=" flex items-start flex-col md:flex-row gap-5 mt-5">
              <div className="flex flex-col items-start w-full">
                <label
                  htmlFor="otp"
                  className="mb-1.5 font-normal text-sm text-dark-gray"
                >
                  Category
                </label>
                <select
                  type="text"
                  className="py-[15px] h-[50px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                  {...register("category", {
                    required: {
                      value: true,
                      message: "Please add Type Of Owner Ship",
                    },
                  })}
                >
                  <option value={""}>Select Category</option>

                  {blogCategory?.map((item, index) => (
                    <option key={index} value={item?.title}>
                      {item?.title}
                    </option>
                  ))}
                </select>

                <label className="label">
                  {errors.category?.type === "required" && (
                    <span className=" text-sm mt-1 text-red-500">
                      {errors.category.message}
                    </span>
                  )}
                </label>
              </div>

              <div className="flex flex-col items-start w-full ">
                <label
                  htmlFor="otp"
                  className="mb-1.5 font-normal text-sm text-dark-gray"
                >
                  Blog Tags
                </label>
                <div className=" flex w-full items-center gap-2">
                  <input
                    className="py-[15px] h-[50px] w-full px-[14px] font-normal  text-dark-gray rounded-[10px] text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                    type={"text"}
                    placeholder={"Enter Blog tag"}
                    id="otp"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => handelAddTag()}
                    className="py-[15px] rounded-lg h-[50px] px-5 text-sm font-semibold bg-primary text-white"
                  >
                    Add
                  </button>
                </div>
                <div className="mt-2 flex gap-2 items-center flex-wrap">
                  {tags?.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center bg-gray-200 p-1 gap-1 rounded-md"
                    >
                      <h2>{item}</h2>
                      <button
                        type="button"
                        onClick={() => HandelRemoveTag(index)}
                      >
                        <IoMdClose />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className=" mt-2">
              <div className="flex flex-col items-start w-full mt-3">
                <label
                  htmlFor="otp"
                  className="mb-1.5 font-normal text-sm text-dark-gray"
                >
                  short Description
                </label>
                <textarea
                  className="py-[15px] h-[80px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                  placeholder={" Short Description"}
                  id="otp"
                  {...register("shortDescription", {
                    required: {
                      value: true,
                      message: "Please add short Description",
                    },
                  })}
                ></textarea>

                <label className="label">
                  {errors.shortDescription?.type === "required" && (
                    <span className=" text-sm mt-1 text-red-500">
                      {errors.shortDescription.message}
                    </span>
                  )}
                </label>
              </div>
            </div>

            {client ? (
              <>
                <ReactQuilTag
                  richText={richText}
                  setValueOfRichText={setValueOfRichText}
                />
              </>
            ) : (
              <></>
            )}

            {/* <div className=" mt-2">
              <div className="flex flex-col items-start w-full mt-3">
                <label
                  htmlFor="otp"
                  className="mb-1.5 font-normal text-sm text-dark-gray"
                >
                 Description
                </label>
                <textarea
                  className="py-[15px] h-[150px] px-[14px] font-normal  text-dark-gray rounded-[10px] w-full text-sm outline-none  border-[1px] focus:border-primary bg-gray-100 focus:bg-transparent"
                  placeholder={" Description"}
                  id="otp"
                  {...register("description", {
                    required: {
                      value: true,
                      message: "Please add Description",
                    },
                  })}
                ></textarea>

                <label className="label">
                  {errors.description?.type === "required" && (
                    <span className=" text-sm mt-1 text-red-500">
                      {errors.description.message}
                    </span>
                  )}
                </label>
              </div>
            </div> */}

            {/* <ReactQuilTag richText={richText} setValueOfRichText={setValueOfRichText} /> */}

            <DropImageComSingal
              imageUrl={imageUrl}
              setImageUrl={setImageUrl}
              handleImageUpload={handleImageUpload2}
              imageLoading={imageLoading}
            />
            <div className=" mt-6">
              <button
                // disabled={loading}
                type="submit"
                className=" bg-primary text-white w-full py-3 text-sm rounded-lg font-semibold"
              >
                {loading ? "Loadding..." : "Add Blog"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddBlogs;
