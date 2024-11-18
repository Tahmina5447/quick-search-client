import axios from "axios";
import { AUTH_URL, BASE_URL, USER_URL } from "./url";
import { toast } from "react-toastify";

export const loggedInUser = async (token) => {
  const config = {
    headers: {
      Authorization: `${token}`,
    },
  };
  try {
    const res = await axios.get(`${USER_URL}/my-profile`, config);
    return res?.data;
  } catch (error) {
    console.log(error);
  }
};

export const signupPost = async (body) => {
  const res = await axios.post(USER_URL, body);
  return res.data;
};

export const VerifyOtp = async (body) => {
  try {
    const res = await axios.post(`${BASE_URL}/auth/verify`, body);
    return res.data;
  } catch (error) {
    console.error("Error posting property:", error);
    // toast.error(error);
    return error;
  }
};

export const newPass = async(body,setLoading,router) => {
  axios
    .post(`${BASE_URL}/auth/reset_password`, body)
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
        toast.success("Password change Successfully!");
        setLoading(false);
        router.push("/auth/login");
        localStorage.removeItem("phone")
        localStorage.removeItem("otp")
        return res
      } else {
        toast.error("Please try again!");
        setLoading(false);
        setError("Please try again!");
        return res
      }
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
      toast.error(err?.response?.data?.message);
      return err
    });
};

export const verifyOtp = (body,setLoading,router) => {
  axios
    .post(`${BASE_URL}/auth/verify`, body)
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
        toast.success("Account Verified Successfully!");
        setLoading(false);
        router.push("/auth/login");
        localStorage.removeItem("phone")
        localStorage.removeItem("otp")
        return res
      } else {
        toast.error("Please try again!");
        setLoading(false);
        setError("Please try again!");
        return res
      }
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
      toast.error(err?.response?.data?.message);
      return err
    });
};


export const verifyOtp2 = (body,setLoading,setPassword) => {
  axios
    .post(`${BASE_URL}/auth/verify`, body)
    .then((res) => {
      console.log(res);
      if (res.status === 200) {
        toast.success("Otp Verified Successfully!");
        setLoading(false);
        setPassword(true)
        return res
      } else {
        toast.error("Please try again!");
        setLoading(false);
        setError("Please try again!");
        return res
      }
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
      toast.error(err?.response?.data?.message);
      return err
    });
};


export const resentOtp = async (body,setIsLoading,setOtpData,setIsActive,setOtpOpen=()=>{}) => {
  axios
    .post(`${BASE_URL}/auth/resend_otp`, body)
    .then((res) => {
      if (res.status === 200) {
        toast.success("Otp sent! Check your phone number for verification code");
        setIsLoading(false);
        setIsActive(true)
        const data = {
          phoneNumber:body?.phoneNumber,
          verificationCode:res.data?.data?.verificationCode
        }

        console.log(data)

        localStorage.setItem("phone",body?.phoneNumber)
        localStorage.setItem("otp",true)
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
