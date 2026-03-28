import React from "react";
import HeroSection from "./components/HeroSection";
import FeaturedCourses from "./components/FeaturedCourses";
import WhyChooseUs from "./components/ui/WhyChooseUs";
import MusicSchoolTestimonials from "./components/ui/TestimonialCards";
import UpcomingWebinars from "./components/ui/UpcomingWebinars";
import Instructors from "./components/ui/instructors";
import Footer from "./components/ui/Footer";
const page = () => {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <MusicSchoolTestimonials />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </main>
  );
};

export default page;
