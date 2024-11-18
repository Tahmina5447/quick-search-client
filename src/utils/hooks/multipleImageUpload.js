import { toast } from "react-toastify";

// Utility function to upload multiple images
export const multipleImageUpload = async ({
  imageFiles,
  setImageUrls,
  setImageUploading,
}) => {
  setImageUploading(true);
  const imgUrl = `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`;
  const files = Array.from(imageFiles);

  const uploadPromises = files.map((file) => {
    const formData = new FormData();
    formData.append("image", file);

    return fetch(imgUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.data?.url) {
          return result.data.url;
        } else {
          throw new Error("Image upload failed");
          setImageUploading(false);
        }
      })
      .catch((error) => {
        setImageUploading(false);
      });
  });
  try {
    const uploadedUrls = await Promise.all(uploadPromises);
    setImageUrls((prevUrls) => [...prevUrls, ...uploadedUrls]);
    // setImageUploadErrorMessage(null);
    setImageUploading(false);
  } catch (error) {
    setImageUploading(false);
    console.log(error)
    // setImageUploadErrorMessage(
    //   "Image Upload failed, please check your internet connection"
    // );
  }
};
