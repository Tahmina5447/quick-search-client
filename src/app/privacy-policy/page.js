import Image from "next/image";
import Link from "next/link";
import React from "react";

const PrivacyPolicy = () => {
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
    <section className="">
      <div className="bg-green-100/40">
        <div className="max-container relative">
          <div className="flex items-center gap-10 pt-[80px] ">
            <div className="w-full md:w-1/2 py-16 md:py-0">
              <h1 className="text-xl md:text-3xl font-bold text-primary text-center md:text-start">
                গোপনীয়তা নীতি
              </h1>
              <p className="my-8 text-black/60 text-center md:text-start">
                আমাদের গোপনীয়তা নীতি বর্ণনা করে কিভাবে আমরা আপনার ব্যক্তিগত
                তথ্য সংগ্রহ করি, ব্যবহার করি এবং রক্ষা করি যখন আপনি আমাদের
                রিয়েল এস্টেট পরিষেবাগুলি ব্যবহার করেন। আমরা আপনার গোপনীয়তা
                নিশ্চিত করতে এবং আপনার তথ্য সুরক্ষিত রাখতে প্রতিশ্রুতিবদ্ধ।
              </p>
              <div className="flex justify-center md:absolute left-5">
                <Link
                  href={"/about"}
                  className="text-white px-4 py-2 font-bold bg-primary rounded-full mx-auto"
                >
                  About us
                </Link>
              </div>
            </div>
            <div className="w-full hidden  md:w-1/2 md:flex items-center justify-center ">
              <Image
                src={"/assets/privacy.png"}
                alt="Privacy"
                width={1000}
                height={700}
                className=" object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* --------------in details */}
      <div className="max-container">
        <div className="flex flex-col gap-7 py-16">
          <div>
            <h3 className="font-bold text-xl md:text-2xl ">তথ্য সংগ্রহ</h3>
            <p className="my-5">
              আমরা বিভিন্ন উৎস থেকে আপনার তথ্য সংগ্রহ করি, যেমন:
            </p>
            <div className="flex flex-col gap-1.5">
              <p className="flex gap-2">
                <span className="w-2 h-2 rounded-full bg-primary mt-1.5"></span>
                <span>
                  আপনার নাম, ঠিকানা, এবং যোগাযোগের তথ্য যখন আপনি আমাদের
                  ওয়েবসাইটে নিবন্ধন করেন বা আমাদের পরিষেবাগুলি ব্যবহার করেন।
                </span>
              </p>
              <p className="flex gap-2">
                <span className="w-2 h-2 rounded-full bg-primary mt-1.5"></span>
                <span>
                  আমাদের ওয়েবসাইটের ব্যবহার সম্পর্কিত তথ্য, যেমন ব্রাউজার কুকিজ
                  এবং লগ ফাইল।
                </span>
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-xl md:text-2xl ">তথ্যের ব্যবহার</h3>
            <p className="my-5">
              আমরা আপনার তথ্য নিম্নলিখিত কারণে ব্যবহার করি:
            </p>
            <div className="flex flex-col gap-1.5">
              <p className="flex gap-2">
                <span className="w-2 h-2 rounded-full bg-primary mt-1.5"></span>
                <span>
                  আমাদের পরিষেবাগুলির মান উন্নত করতে এবং আপনার অভিজ্ঞতা আরও
                  ব্যক্তিগতকৃত করতে।
                </span>
              </p>
              <p className="flex gap-2">
                <span className="w-2 h-2 rounded-full bg-primary mt-1.5"></span>
                <span>
                  আপনার অনুরোধ এবং প্রশ্নের উত্তর দিতে এবং আপনাকে তথ্য প্রদান
                  করতে।
                </span>
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-xl md:text-2xl ">
              তৃতীয় পক্ষের সাথে তথ্য শেয়ারিং
            </h3>
            <p className="my-5">
              আমরা আপনার তথ্য তৃতীয় পক্ষের সাথে শেয়ার করি না, যদি না এটি আইনি
              বাধ্যবাধকতার জন্য প্রয়োজন হয়।
            </p>
          </div>
          <div>
            <h3 className="font-bold text-xl md:text-2xl ">
              গোপনীয়তা নীতি পরিবর্তন
            </h3>
            <p className="my-5">
              আমাদের গোপনীয়তা নীতি সময়ে সময়ে পরিবর্তিত হতে পারে। নীতি
              পরিবর্তন হলে আমরা আমাদের ওয়েবসাইটে আপডেট পোস্ট করবো।
            </p>
          </div>
        </div>
      </div>

      <div className=" max-container">
        <div className=" my-5 flex items-center justify-center">
          <h2 className=" text-[25px] font-semibold border-b-2 border-b-gray-500">
            সচরাচর জিজ্ঞাস্য
          </h2>
        </div>

        <div className=" grid md:grid-cols-2 gap-7 grid-cols-1 my-10">
          {faqData.map((item, index) => (
            <div key={index}>
              <h2 className=" md:text-[18px] font-semibold">
                {index + 1}. {item.question}{" "}
              </h2>
              <p className=" pt-4 pl-5 text-info md:text-base text-[14px] font-medium">{item?.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
