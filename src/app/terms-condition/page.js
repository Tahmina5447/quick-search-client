"use client"
// import Image from 'next/image';
// import Link from 'next/link';
import React, { useState } from 'react';

const PrivacyPolicy = () => {
    const [activeTab, setActiveTab] = useState("regular")
    return (
        <section className='h-[100vh]'>
            <div
                style={{
                    backgroundImage: 'url(/assets/condition.svg)',
                    backgroundSize: 'cover',
                    minHeight: '100vh',
                     backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="w-full h-[100vh] bg-white/80 pt-[80px]">
                    <div className="max-container">
                        {/* ----------------button  section */}
                        <div className='flex items-center pt-4 pb-10 justify-center'>
                            <button onClick={() => setActiveTab("regular")} className={`${activeTab === "regular" ? "text-primary  border-primary" : " text-black  border-trnasparent"} py-2 px-4 font-semibold text-sm border-b`}>রেগুলার মেম্বারশিপ</button>
                            <button onClick={() => setActiveTab("gold")} className={`${activeTab === "gold" ? "text-primary  border-primary" : " text-black  border-trnasparent"}  py-2 px-4 font-semibold text-sm border-b`} >গোল্ড মেম্বারশিপ</button>
                        </div>

                        {/* -----------------content section */}
                        {/* regular membership content------------------ */}
                        <div className={`${activeTab === "regular" ? "block" : "hidden"} w-full lg:w-7/12 mx-auto`}>
                            <h1 className="text-xl  md:text-2xl font-bold text-center">রেগুলার মেম্বারশিপ শর্তাবলী:</h1>
                            <div className={`flex flex-col gap-3 my-7`}>
                                <span className="text-sm md:text-base">
                                    <span className="font-bold">1. সম্পত্তি যোগ করা, মুছে ফেলা এবং সম্পাদনা করা:</span>
                                    <span className=""> রেগুলার মেম্বারশিপ তাদের অ্যাকাউন্ট ব্যবহার করে সম্পত্তি যোগ, মুছে ফেলতে এবং সম্পাদনা করতে পারবেন।</span>
                                </span>
                                <span className="text-sm md:text-base">
                                    <span className="font-bold">2. অ্যাকাউন্টের নিরাপত্তা:</span>
                                    <span className=""> তাদের অ্যাকাউন্টের নিরাপত্তা বজায় রাখতে হবে এবং অ্যাকাউন্টের অপব্যবহার হলে তা তৎক্ষণাৎ আমাদের জানাতে হবে।</span>
                                </span>
                                <span className="text-sm md:text-base">
                                    <span className="font-bold">3. তথ্যের সঠিকতা:</span>
                                    <span className=""> সদস্যদের সরবরাহকৃত সমস্ত তথ্য সঠিক এবং সত্য হতে হবে। মিথ্যা তথ্য প্রদান করলে অ্যাকাউন্ট স্থগিত বা বাতিল হতে পারে।</span>
                                </span>
                                <span className="text-sm md:text-base">
                                    <span className="font-bold">4. সেবা ব্যবহারের শর্তাবলী: </span>
                                    <span className="">  আমাদের ওয়েবসাইট এবং সেবা ব্যবহার করতে পারবেন কেবলমাত্র বৈধ এবং আইনসম্মত উদ্দেশ্যে।</span>
                                </span>
                            </div>


                        </div>

                        {/* regular membership content------------------ */}
                        <div className={`${activeTab === "gold" ? "block" : "hidden"} w-full lg:w-7/12 mx-auto`}>
                            <h1 className="text-xl  md:text-2xl font-bold text-center">গোল্ড মেম্বারশিপ শর্তাবলী:</h1>
                            <div className={`flex flex-col gap-3 my-7`}>
                                <span className="text-sm md:text-base">
                                    <span className="font-bold">1. সম্পত্তির অগ্রাধিকার:</span>
                                    <span className=""> গোল্ড মেম্বারশিপ হলে সম্পত্তি সর্বদা প্রথমে প্রদর্শিত হবে, যা তাদের সম্পত্তি বিক্রি বা ভাড়া দেওয়ার সম্ভাবনা বাড়ায়।</span>
                                </span>
                                <span className="text-sm md:text-base">
                                    <span className="font-bold">2. সম্পত্তি যোগ করা, মুছে ফেলা এবং সম্পাদনা করা: </span>
                                    <span className=""> তাদের অ্যাকাউন্ট ব্যবহার করে সম্পত্তি যোগ, মুছে ফেলতে এবং সম্পাদনা করতে পারবেন।</span>
                                </span>
                                <span className="text-sm md:text-base">
                                    <span className="font-bold">3. অ্যাকাউন্টের নিরাপত্তা: </span>
                                    <span className=""> তাদের অ্যাকাউন্টের নিরাপত্তা বজায় রাখতে হবে এবং অ্যাকাউন্টের অপব্যবহার হলে তা তৎক্ষণাৎ আমাদের জানাতে হবে।</span>
                                </span>
                                <span className="text-sm md:text-base">
                                    <span className="font-bold">4. তথ্যের সঠিকতা:</span>
                                    <span className=""> সদস্যদের সরবরাহকৃত সমস্ত তথ্য সঠিক এবং সত্য হতে হবে। মিথ্যা তথ্য প্রদান করলে অ্যাকাউন্ট স্থগিত বা বাতিল হতে পারে।</span>
                                </span>
                                <span className="text-sm md:text-base">
                                    <span className="font-bold">5. সেবা ব্যবহারের শর্তাবলী: </span>
                                    <span className=""> সদস্যরা আমাদের ওয়েবসাইট এবং সেবা ব্যবহার করতে পারবেন কেবলমাত্র বৈধ এবং আইনসম্মত উদ্দেশ্যে।</span>
                                </span>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default PrivacyPolicy;