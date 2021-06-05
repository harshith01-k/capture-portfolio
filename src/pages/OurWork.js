import React from "react";
import athlete from "../img/athlete-small.png";
import racer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";
import {pageAnimation,fade,photoAnim,lineAnim,slider,sliderContainer} from "../Animate";

const OurWork = () => {
  return (
    <Work variants={pageAnimation} initial="hidden" animate="show" exit="exit" style={{background : "white  "}}>
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade}>The Athelete</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-athlete">
          <motion.img style={{width: "100%",display : "block"}} variants={photoAnim} src={athlete} alt="The athelte" />
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={fade}>The Racer</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-racer">
          <motion.img style={{width: "100%",display : "block"}} variants={photoAnim} src={racer} alt="a racer" />
        </Link>
      </Movie>
      <Movie>
        <motion.h2 variants={fade}>Good time</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/good-times">
          <motion.img style={{width: "100%",display : "block"}} variants={photoAnim} src={goodtimes} alt="good times" />
        </Link>
      </Movie>
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  motion.h2 {
    padding: 1rem 0rem;
  }
  .line {
    height: 3px;
    background-color: #23d977;
    margin-bottom: 3rem;
  }
  motion.img {
    width: 100%;
    display : block;
    /* height: 70vh;
    object-fit: cover; */
    opacity : 0;
  }
`;
//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
export default OurWork;
