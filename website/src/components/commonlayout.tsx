import React from "react";
import { Outlet, Link } from "@tanstack/react-router";
import styled from "styled-components";
import headerImage from "/src/assets/bg.jpg";
import logoImage from "/src/assets/48.png";
import logoImage2 from "/src/assets/logo1.png";
import { LoginButton } from "../routes/google/callback/-components/LoginButton";

type NavLinksType = {
  link: string;
  name: string;
};
const NavLinksData: NavLinksType[] = [
  { link: "/", name: "TOP" },
  { link: "/movies", name: "映画一覧" },
  { link: "/profile", name: "マイページ" },
];

function CommonLayout() {
  return (
    <>
      <BackgroundDiv>
        <Header>
          <HeaderContent>
            <Logo1 to='/'>
              <img
                src={logoImage}
                alt='ロゴ画像'
                height={"120px"}
                width={"120px"}
              />
            </Logo1>
            <Nav>
              {NavLinksData.map((navLink) => (
                <NavLinkItem key={navLink.link}>
                  <NavLink to={navLink.link}>{navLink.name}</NavLink>
                </NavLinkItem>
              ))}
            </Nav>
            <LoginButtonWrapper>
              <LoginButton />
            </LoginButtonWrapper>
          </HeaderContent>
        </Header>
        <MainContent>
          <Outlet />
        </MainContent>
        <Footer>
          <Logo2 to='/'>
            <img src={logoImage2} alt='ロゴ画像' width={"160px"} />
          </Logo2>
          <FooterNav>
            {NavLinksData.map((navLink) => (
              <NavItem key={navLink.link}>
                <FooterNavLink to={navLink.link}>{navLink.name}</FooterNavLink>
              </NavItem>
            ))}
          </FooterNav>
          <Copyright>©HALCinema. All rights Reserved.</Copyright>
        </Footer>
      </BackgroundDiv>
    </>
  );
}

export default CommonLayout;

const BackgroundDiv = styled.div`
  background-image: url(${headerImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
`;

const Header = styled.header`
  background: linear-gradient(to bottom right, #a6038b, #093f59);
  color: #fff;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const MainContent = styled.main`
  padding-top: 100px; /* Adjust padding to ensure content is not hidden under the fixed header */
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  font-size: 20px;
  font-family: "M PLUS 1 Code", monospace;
  font-optical-sizing: auto;
  font-weight: 500;
`;

const Logo1 = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
`;

const Nav = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin-left: auto;
`;

const NavLinkItem = styled.li`
  margin-left: 2rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  transition: color 0.3s ease;
  margin: 0 0.5rem;

  &:hover {
    color: #ffca28;
  }
`;

const LoginButtonWrapper = styled.div`
  margin-left: auto;
`;

const Footer = styled.footer`
  background-color: #f1f1f1;
  text-align: center;
  padding: 20px 0;
  background: linear-gradient(to bottom right, #a6038b, #093f59);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo2 = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: white;
  text-align: center;
  margin-bottom: 10px;
`;

const FooterNav = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 10px 0;
`;

const NavItem = styled.li`
  margin: 0 1.5rem;
  font-family: "M PLUS 1 Code", monospace;
  font-weight: 500px;
`;

const FooterNavLink = styled(Link)`
  text-decoration: none;
  color: white;
  transition: color 0.3s ease;
  font-size: 20px;
  &:hover {
    color: #ffca28;
  }
`;

const Copyright = styled.p`
  margin-top: 1rem;
  font-size: 0.875rem;
  color: white;
`;
