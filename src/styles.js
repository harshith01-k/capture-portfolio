import styled from "styled-components";

export const About = styled.div`
  display: flex;
  min-height: 60vh;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;
export const Description = styled.div`
  flex: 1;
  z-index :2;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
    color : #fff
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;
