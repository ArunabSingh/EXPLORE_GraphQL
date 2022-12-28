import * as React from "react"
import { useState, useEffect } from "react"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenuData"
import { Button } from "./Button"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const Header = ({ toggle }) => {

  const [offset, setOffset] = useState(0);
  const [isUpper, setIsUpper] = useState(false);
  const handleScroll = () => setOffset(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (offset > 20) {
      setIsUpper(true);
    } else {
      setIsUpper(false);
    }
  }, [offset]);

  return (
    <Nav className={isUpper ? "active" : ""}>
      <NavLink to="/">EXPLOREX</NavLink>
      <Bars onClick={toggle} />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>

        ))}
      </NavMenu>

      <NavBtn>
        <Button primary="true" round="true" to="#trips">
          Book Flight
        </Button>
      </NavBtn>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  transition: 1s ease;
  position: relative;

  &.active {
    width: 100%;
    position: fixed;
    top:0;
    background-color: black;
  }
`

const NavLink = styled(AnchorLink)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
`

const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -40px;

  @media screen and (max-width: 760px) {
    display: none;
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 760px) {
    display: none;
  }
`
