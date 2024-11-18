import Faq from "@/components/AboutPage/Faq";
import MeetTeam from "@/components/AboutPage/MeetTeam";
import Testomonials from "@/components/AboutPage/Testomonials";
import Contact from "@/components/Contact/Contact";
import PropertyTop from "@/components/PropertyPage/PropertyTop";
import BreakCum from "@/shared/BreakCum"; 
import React from "react";

function About() {
  return (
    <div className="relative"> 
      <div className="pt-20">
        <BreakCum title={"About Us"}></BreakCum>
        <PropertyTop/>
        <MeetTeam/>
        <Testomonials/>
        <Faq />
        <Contact />
        {/* <Discover /> */}
        {/* <Testomonials/> */}
      </div> 
    </div>
  );
}

export default About;
