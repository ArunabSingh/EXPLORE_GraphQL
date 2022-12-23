import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <FooterContainer>
      <FtLinksWrapper>
        <FtDesc>
          <h1>EXPLOREE TRAVEL</h1>
          <p>Westrive to create the best experiences for our customers!</p>
        </FtDesc>
        <FtLinkItems>
          <FtLinkTitle>Contact Us</FtLinkTitle>
          <FtLink to="/contact">Contact</FtLink>
          <FtLink to="/contact">Support</FtLink>
          <FtLink to="/contact">Sponsorships</FtLink>
          <FtLink to="/contact">Trips</FtLink>
        </FtLinkItems>
      </FtLinksWrapper>
      <FtLinksWrapper>
        <FtLinkItems>
          <FtLinkTitle>Social Media</FtLinkTitle>
          <FtLink to="/contact">Instagram</FtLink>
          <FtLink to="/contact">Facebook</FtLink>
          <FtLink to="/contact">Twitter</FtLink>
          <FtLink to="/contact">Youtube</FtLink>
        </FtLinkItems>

        <FtLinkItems>
          <FtLinkTitle>Social Media</FtLinkTitle>
          <FtLink to="/contact">Instagram</FtLink>
          <FtLink to="/contact">Facebook</FtLink>
          <FtLink to="/contact">Twitter</FtLink>
          <FtLink to="/contact">Youtube</FtLink>
        </FtLinkItems>
      </FtLinksWrapper>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
    padding: 5rem calc((100vw - 1300px) /2);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    color: #000;
    background: #fafafb;
`
const FtDesc = styled.div`
  padding: 0 2rem;

  h1 {
    margin-bottom: 3rem;
    color: #f26a2e;
  }

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`
const FtLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`
const FtLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

const FtLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 16px;
  color: #3d3d4e;

  &:hover {
    color: #f26a2e;
    transition: 0.3s ease-out;
  }
`
const FtLinkTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 12px;
`
