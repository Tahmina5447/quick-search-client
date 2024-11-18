import axios from "axios";
import { BASE_URL, USER_URL } from "./url";
import { toast } from "react-toastify";


export const multiFilterUser = async (data) => {
    const { searchTerm, division,  page,limit,upazila, district, userType, isVerified,status,userRole } =
      data;
  
    const queryParams = {
      searchTerm,
      division,
      upazila,
      district,
      userType,
      isVerified,
      status,
      userRole,
      page,limit
    };
    const filteredParams = Object.fromEntries(
      Object.entries(queryParams).filter(
        ([_, value]) => value !== undefined && value !== ""
      )
    );
  
    try {
      const queryString = new URLSearchParams(filteredParams).toString();
      const url = `${BASE_URL}/users?${queryString}`;
      const res = await axios.get(url);
  
      return res?.data;
    } catch (error) {
      console.log(error);
    }
  };
  

  export const userPatch = async (body, id, token) => {
    try {
      const config = {
        headers: {
          Authorization: `${token}`,
        },
      };
      const res = await axios.patch(`${USER_URL}/${id}`, body, config);
      return res.data;
    } catch (error) {
      console.error("Error posting property:", error);
      toast.error("something went wrong");
      throw error;
    }
  };
  
  export const userDelete = async ( id, token) => {
    try {
      const config = {
        headers: {
          Authorization: `${token}`,
        },
      };
      const res = await axios.delete(`${USER_URL}/${id}`, config);
      return res.data;
    } catch (error) {
      console.error("Error posting property:", error);
      toast.error("something went wrong");
      throw error;
    }
  };


  export const phoneChangeOtp = async (body,setIsLoading,setOtpData,setIsActive,setOtpOpen=()=>{},id) => {
    axios
      .post(`${BASE_URL}/auth/send-otp/${id}`, body)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Otp sent! Check your phone number for verification code");
          setIsLoading(false);
          setIsActive(true)
          const data = {
            phoneNumber:body?.phoneNumber,
            verificationCode:res.data?.data?.verificationCode
          }
          // localStorage.setItem("phone",body?.phoneNumber)
          // localStorage.setItem("otp",true)
          setOtpData(data)
          setOtpOpen(true)
          return res
        } else {
          toast.error("Please try again!");
          setIsLoading(false);
          setError("Please try again!");
          return res
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        toast.error(err?.response?.data?.message);
        return err
      });
  };
  