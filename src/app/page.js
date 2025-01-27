"use client";
import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import BestProject from "@/components/BestProject/BestProject";
import BlogHome from "@/components/BlogPage/BlogHome";
import Contact from "@/components/Contact/Contact";
import Neighborhood from "@/components/Neighborhood/Neighborhood";
import Properties from "@/components/Properties/Properties";
import Testomonials from "@/components/Testomonials/Testomonials";
import HomeSearch from "@/shared/search/HomeSearch";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Banner />
        {/* <Properties />
        <Neighborhood />
        <BestProject />
        <BlogHome />
        <Contact /> */}
      </div>
    </>
  );
}
