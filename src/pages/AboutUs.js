import React from "react";
import Layout from "../components/Layout";
import Parallax from "../components/Parallax";
import WhyUs from "../components/Why_Us";
import "./../stylesheets/aboutUs.css";

function AboutUs() {
  return (
    <Layout>
      <div>
        <div className="about-us">
          <h2>About Us</h2>
          <p>
            Swissa Mountain Way Pvt. Ltd, an adventure company managed and
            operated by Nepali professionals, was formed in 1992 and has become
            popular among the adventure seeker around the globe ever since. We
            have been able to maintain the standard of quality service along
            with guaranteed satisfaction since our establishment to till date in
            arranging and operating safe and fun river trips throughout Nepal.
            Whether you are a nervous beginner or an experienced thrill-seeker,
            we will ensure the adventure for lifetime. Our internationally
            experienced guides, skilled boat captains, chefs and other river
            crews are fully trained in first-aid and river rescue as well as
            committed to deliver an extra value exploring the remote countryside
            and natural beauty of Nepal, which would be almost impossible
            without river excursion. No matter whether you are in group or an
            individual, we can organize a trip on wide range of rivers by raft
            and kayak.
          </p>
        </div>
      </div>
      <WhyUs />
      <Parallax />
    </Layout>
  );
}

export default AboutUs;
