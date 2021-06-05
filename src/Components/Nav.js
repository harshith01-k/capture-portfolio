import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1 . About us</Link>
        </li>
        <li>
          <Link to="/work">2 . Our works</Link>
        </li>
        <li>
          <Link to="/contact">3 . contact</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 10rem;
  align-items: center;
  background-color: #282828;
  // position : sticky;
  // top : 0;
  // left : 0;
  // z-index : 10;
  #logo {
    text-decoration: none;
    color: #fff;
    font-family: "Lobster";
    letter-spacing: 0.1px;
  }
  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-right: 5rem;
  }
  li a {
    color: #fff;
    text-decoration: none;
    text-transform: capitalize;
    position: relative;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;
export default Nav;
