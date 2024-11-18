"use client";
import SectionHeading from "@/shared/SectionHeading";
import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const FAQ = () => {
  const [select, setSelect] = useState(null);

  const trogle = (i) => {
    if (select === i) {
      setSelect(null);
    } else {
      setSelect(i);
    }
  };

  const faqData = [
    {
      id: 1,
      question: "আমি কীভাবে Quick Search তে একটি অ্যাকাউন্ট তৈরি করব?",
      answer:
        "Quick Search তে একটি অ্যাকাউন্ট তৈরি করা সহজ। হোমপেজের উপরের ডান কোনায় Sale Property বোতামে ক্লিক করুন, প্রয়োজনীয় তথ্য পূরণ করুন, এবং আপনার ইমেল ঠিকানা যাচাই করার নির্দেশাবলী অনুসরণ করুন।",
    },
    {
      id: 2,
      question: "আমি কীভাবে একটি সম্পত্তির বিজ্ঞাপন পোস্ট করব?",
      answer:
        "একবার আপনি একটি অ্যাকাউন্ট তৈরি করে লগ ইন করলে, Post a Property সেকশনে যান। আপনার সম্পত্তি সম্পর্কে প্রয়োজনীয় তথ্য পূরণ করুন, ফটো আপলোড করুন এবং আপনার বিজ্ঞাপনটি অনুমোদনের জন্য জমা দিন।",
    },
    {
      id: 3,
      question: "সম্পত্তির বিজ্ঞাপন পোস্ট করার জন্য কোন ফি আছে কি?",
      answer:
        "বর্তমানে, Quick Search তে সম্পত্তির বিজ্ঞাপন পোস্ট করা ফ্রি। তবে, ভবিষ্যতে আমরা উন্নত দৃশ্যমানতা এবং অতিরিক্ত বৈশিষ্ট্যগুলির জন্য প্রিমিয়াম বিজ্ঞাপন অপশন প্রবর্তন করতে পারি।",
    },
    {
      id: 4,
      question: "আমি কীভাবে সম্পত্তি অনুসন্ধান করব?",
      answer:
        "হোমপেজের সার্চ বারে আপনার পছন্দের অবস্থান, সম্পত্তির ধরণ, বা মূল্য পরিসীমা প্রবেশ করান। এছাড়াও, নির্দিষ্ট মানদণ্ড যেমন বেডরুম সংখ্যা, আকার, এবং সুবিধা অনুযায়ী আপনার অনুসন্ধানটি পরিমার্জন করতে উন্নত অনুসন্ধান ফিল্টার ব্যবহার করতে পারেন।",
    },
    {
      id: 5,
      question: "আমি কীভাবে সম্পত্তির মালিকের সাথে যোগাযোগ করব?",
      answer:
        "আপনার পছন্দসই সম্পত্তি পাওয়ার পর, আরও বিস্তারিত দেখার জন্য বিজ্ঞাপনে ক্লিক করুন। আপনি মালিকের যোগাযোগের তথ্য বা তাদের সাথে সরাসরি যোগাযোগের জন্য মেসেজিং অপশন পাবেন।",
    },
    {
      id: 6,
      question: "Quick Search কী ধরনের আইনি সহায়তা প্রদান করে?",
      answer:
        "Quick Search সম্পত্তি লেনদেনের সাথে সম্পর্কিত প্রয়োজনীয় আইনি কাগজপত্রে দিকনির্দেশনা এবং সহায়তা প্রদান করে। আমাদের দল সকল নথিপত্র সঠিকভাবে নিশ্চিত করে একটি মসৃণ এবং নিরাপদ লেনদেনের জন্য।",
    },
    {
      id: 7,
      question: "Quick Search কীভাবে প্রতারণা প্রতিরোধে সহায়তা করে?",
      answer:
        "আমরা গ্রাহকের নিরাপত্তাকে গুরুত্ব সহকারে দেখি। আমাদের দল সম্পত্তির বিজ্ঞাপনগুলি যাচাই করে প্রামাণিকতা নিশ্চিত করে। এছাড়াও, আমরা সম্ভাব্য প্রতারণা চিহ্নিত করতে এবং এড়াতে সাহায্য করার জন্য টিপস এবং সহায়তা প্রদান করি।",
    },
    {
      id: 8,
      question: "আমি কি আমার সম্পত্তির বিজ্ঞাপন সম্পাদনা বা মুছে ফেলতে পারি?",
      answer:
        "Iহ্যাঁ, আপনি যে কোনো সময় আপনার সম্পত্তির বিজ্ঞাপন সম্পাদনা বা মুছে ফেলতে পারেন। আপনার অ্যাকাউন্টে লগ ইন করুন, My Listings এ যান এবং সংশ্লিষ্ট বিজ্ঞাপন সম্পাদনা বা মুছে ফেলার বিকল্পটি চয়ন করুন।",
    },
    {
      id: 9,
      question:
        "যদি আমি ওয়েবসাইটে কোনো সমস্যা সম্মুখীন হই তবে আমাকে কী করতে হবে?",
      answer:
        "যদি আপনি কোনো সমস্যার সম্মুখীন হন বা সহায়তার প্রয়োজন হয়, তাহলে Contact Us পৃষ্ঠার মাধ্যমে আমাদের গ্রাহক সহায়তা দলের সাথে যোগাযোগ করুন। আমরা আপনার কোনো প্রশ্ন বা উদ্বেগ নিয়ে আপনাকে সাহায্য করতে এখানে আছি।",
    },
    {
      id: 10,
      question: "আমি কীভাবে নতুন সম্পত্তির বিজ্ঞাপনের সাথে আপডেট থাকতে পারি?",
      answer:
        "আপনি আমাদের নিউজলেটারে সাবস্ক্রাইব করতে পারেন বা নতুন সম্পত্তির বিজ্ঞাপন এবং অন্যান্য প্রাসঙ্গিক তথ্য পেতে আমাদের সোশ্যাল মিডিয়ায় অনুসরণ করতে পারেন। এছাড়াও, আপনি আপনার পছন্দের ভিত্তিতে সম্পত্তি এলার্ট সেট আপ করতে পারেন যাতে আপনার মানদণ্ডের সাথে মেলে এমন নতুন বিজ্ঞাপন পোস্ট করা হলে আপনি নোটিফিকেশন পান।",
    },
  ];

  return (
    <div className="py-16 md:py-20 bg-gray-100">
      <div className="max-container">
        <SectionHeading
          title={"Frequently Asked Questions"}
          subtitle={
            "You can use this guide to familiarize yourself with rules, laws and other important information relating to your property."
          }
        />
        <div className="mt-5 md:mt-10">
          <div className="grid md:grid-cols-2 md:gap-12">
            <div>
              {faqData?.slice(0, 5).map((item, index) => {
                return (
                  <div
                    key={index}
                    className="mb-[20px] bg-white  shadow-md overflow-hidden duration-200"
                  >
                    <div
                      className="flex p-5 items-start justify-between"
                      onClick={() => trogle(item.id)}
                    >
                      <h2 className="text-[14px] font-[600] text-[#222] cursor-pointer  mt-0 font-custom-font">
                        {item.question}
                      </h2>
                      <button
                        className={`text-[18px] text-black duration-500 text-brand-red pt-0 ${
                          select === item.id ? " rotate-90" : ""
                        }`}
                      >
                        <MdOutlineKeyboardArrowRight />
                      </button>
                    </div>
                    <div
                      className={`duration-500 ${
                        select === item.id ? "md:h-[80px] h-auto" : "h-0"
                      }`}
                    >
                      <p
                        className={`text-[13px] px-5 font-normal text-[#123a3280] mb-[20px]`}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div
              data-aos="fade-up"
              data-aos-easing="linear"
              data-aos-duration="600"
            >
              {faqData?.slice(5, 10).map((item, index) => {
                return (
                  <div
                    key={index}
                    className="mb-[20px] bg-white  shadow-md overflow-hidden duration-200"
                  >
                    <div
                      className="flex p-5 items-start justify-between"
                      onClick={() => trogle(item.id)}
                    >
                      <h2 className="text-[14px] font-[600] text-[#222] cursor-pointer  mt-0 font-custom-font">
                        {item.question}
                      </h2>
                      <button
                        className={`text-[18px] text-black duration-500 text-brand-red pt-0 ${
                          select === item.id ? " rotate-90" : ""
                        }`}
                      >
                        <MdOutlineKeyboardArrowRight />
                      </button>
                    </div>
                    <div
                      className={`duration-500 ${
                        select === item.id ? "md:h-[80px] h-auto" : "h-0"
                      }`}
                    >
                      <p
                        className={`text-[13px] px-5 font-normal text-[#123a3280] mb-[20px]`}
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
