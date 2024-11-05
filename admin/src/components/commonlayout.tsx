import { Outlet, Link } from "@tanstack/react-router";
import styled from "styled-components";
import headerImage from "/src/assets/bg.jpg";

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
            <Logo1 to="/">
              <img
                src="src/assets/48.png"
                alt="ロゴ画像"
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
          </HeaderContent>
        </Header>
        <Outlet />

        <Footer>
          <Logo2 to="/">
            <img
              src="src/assets/logo1.png"
              alt="ロゴ画像"
              height={"140px"}
              width={"140px"}
            />
          </Logo2>
          <Nav>
            {NavLinksData.map((navLink) => (
              <NavItem key={navLink.link}>
                <FooterNavLink to={navLink.link}>{navLink.name}</FooterNavLink>
              </NavItem>
            ))}
          </Nav>
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
  min-height: 100vh; /* Ensure it covers the full viewport height */
`;

const Header = styled.header`
  background: linear-gradient(to bottom right, #a6038b, #093f59);
  color: #fff;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
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
  padding: 10px;
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

const NavItem = styled.li`
  margin: 0 1.5rem;
`;

const FooterNavLink = styled(Link)`
  text-decoration: none;
  color: white;
  transition: color 0.3s ease;

  &:hover {
    color: #ffca28;
  }
`;

const Copyright = styled.p`
  margin-top: 1rem;
  font-size: 0.875rem;
  color: white;
`;
