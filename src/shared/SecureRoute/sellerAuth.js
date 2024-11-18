// components/withAuth.js
import { selectUser } from "@/redux/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const sellerAuth = (WrappedComponent) => {
  return (props) => {
    const user = useSelector(selectUser);
    const router = useRouter();
    useEffect(() => {
      if (user?.user_role !== "seller") {
        router.push('/');
        localStorage.removeItem("token");
      }
    }, [user?.user_role]);

    return <WrappedComponent {...props} />;
  };
};

export default sellerAuth;
