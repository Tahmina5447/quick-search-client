import MapSection from "@/components/ContactPage/MapSection";
import Contact from "@/components/ContactPage/Contact";
import About from "@/components/ContactPage/About";
import BreakCum from "@/shared/BreakCum";
import React from "react";
import BlogProperties from "@/components/BlogPage/BlogProperties";
import RecentBlog from "@/components/BlogPage/RecentBlog";

function ContactPage() {
  return (
    <div className="bg-gray-100 pt-20">
      <div className="relative">
        <MapSection />
        <div className=" max-container">
          <div className=" flex md:flex-row flex-col items-start">
            <div className="md:w-9/12">
              <About />
              <Contact />
            </div>
            <div className=" w-full md:w-3/12">
              <div className=" md:mt-20 mt-5">
                <BlogProperties />
                <RecentBlog />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
