import React from "react";
import AboutSection from "../Components/AboutSection";
import ServiceSection from "../Components/ServiceSection";
import FaqSection from "../Components/FaqSection";
import {motion} from "framer-motion";
import { pageAnimation} from "../Animate";
const AboutUs = () =>
{
    return(
        <motion.div variants={pageAnimation} initial ="hidden" animate="show" exit ="exit">
            <AboutSection />
            <ServiceSection />
            <FaqSection />
        </motion.div>
    )
}
export default AboutUs;