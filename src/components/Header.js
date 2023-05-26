import styled from "styled-components";
import logoImg from "../assets/logo.svg";

import homeImg from "../assets/home-icon.svg";

import searchImg from "../assets/search-icon.svg";
import watchImg from "../assets/watchlist-icon.svg";
import originalImg from "../assets/original-icon.svg";
import moviesImg from "../assets/movie-icon.svg";
import seriesImg from "../assets/series-icon.svg";
import { auth, provider } from "../firebase";
const Header = (props) => {
  const handleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <Nav>
      <Logo>
        <img src={logoImg} alt="" />
      </Logo>
      <NavMenu>
        <a href="/home">
          <img src={homeImg} alt="home" />
          <span>HOME</span>
        </a>
        <a>
          <img src={searchImg} alt="search" />
          <span>SEARCH</span>
        </a>
        <a href="/home">
          <img src={watchImg} alt="home" />
          <span>WATCHLIST</span>
        </a>
        <a href="/home">
          <img src={originalImg} alt="" />
          <span>ORIGINAL</span>
        </a>
        <a href="/home">
          <img src={moviesImg} alt="" />
          <span>MOVIES</span>
        </a>
        <a href="/home">
          <img src={seriesImg} alt="" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <Login onClick={handleAuth}>Login</Login>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 35px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }
    span {
      color: rgba(249, 249, 249);

      font-size: 13px;
      letter-spacing: 1.4px;
      line-height: 1.1px;
      padding: 2px 0;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgba(249, 249, 249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.95) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 5px;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
  }
`;

export default Header;
