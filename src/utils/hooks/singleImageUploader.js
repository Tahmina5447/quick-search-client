import { toast } from "react-toastify";

// Utility function to upload image
export const singleImageUploadupload = async ({imageFile,setImageUrl,setImageUploading}) => {
    setImageUploading(true)
    const imgUrl = `https://api.imgbb.com/1/upload?key=${process.env.IMGBB_API_KEY}`;
    
    const formData = new FormData();
    formData.append("image", imageFile);
    
    try {
      const response = await fetch(imgUrl, {
        method: "POST",
        body: formData,
      });
      
      const result = await response.json();
      
      if (result?.success) {
        setImageUrl(result?.data?.url)
        setImageUploading(false)
        return result?.data?.url;  // Return the image URL
      } else {
        setImageUploading(false)
      toast?.error(result?.error?.message);
        throw new Error(result?.error?.message);
      }
    } catch (error) {
      console.error("Image upload failed:", error);
      throw error;
    }
  };
  
  
  