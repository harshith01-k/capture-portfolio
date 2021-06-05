import React from "react";
import clock from "../img/clock.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import diaphragm from "../img/diaphragm.svg";
import home2 from "../img/home2.png";
import Card from "./Card";
import styled from "styled-components";
import { Description, About } from "../styles";

const ServiceSection = () => {
  return (
    <Services>
      <Description>
        <h2>
          high <span>quality</span>services
        </h2>
        <Cards>
          <Card img={clock} text="Efficient" />
          <Card img={teamwork} text="Teamwork" />
          <Card img={diaphragm} text="Diaphragm" />
          <Card img={money} text="Affordable" />
        </Cards>
      </Description>
      <div style={{ flex: 1 }} className="image">
        <img
          style={{ width: "100%", height: "80vh", objectFit: "cover" }}
          src={home2}
          alt="its an camera"
        />
      </div>
    </Services>
  );
};
const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
export default ServiceSection;
