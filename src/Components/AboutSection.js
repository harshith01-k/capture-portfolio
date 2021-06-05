import React from "react";
import home1 from "../img/home1.png";
import { Description, About } from "../styles";
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../Animate";
import StyleWave from "./Wave"
const AboutUs = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <div className="hide">
            <motion.h2 variants={titleAnim}>we work to make</motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span>
            </motion.h2>
          </div>
          <div className="hide">
            <motion.h2 variants={titleAnim}>come true</motion.h2>
          </div>
        </div>
        <motion.p variants={fade}>
          contact us for photography or vediography ideas that you have. We have
          professionals with amazing skills to help to achive it
        </motion.p>
        <motion.button variants={fade} className="contact">
          contact us
        </motion.button>
      </Description>
      <div style={{ flex: 1, overflow: "hidden",zIndex : 2 }}>
        <motion.img
          variants={photoAnim}
          style={{ width: "100%", height: "80vh", objectFit: "cover" }}
          src={home1}
          alt="a camera pic"
        />
      </div>
      <StyleWave />
    </About>
  );
};

export default AboutUs;
