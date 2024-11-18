// components/adminAuth.js

import { useRouter } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { ContextData } from '../../../context/dataProviderContext';
import { useSelector } from 'react-redux';
import { selectUser } from '@/redux/features/auth/authSlice';

const AdminAuth = (WrappedComponent) => {
  return (props) => {
    const router = useRouter();
    const user=useSelector(selectUser)
    useEffect(() => {
      if (user?.user_role !== "admin") {
        router.push('/');
        localStorage.removeItem("token");}
    }, [user?.user_role]);


    return <WrappedComponent {...props} />;
  };
};

export default AdminAuth;
