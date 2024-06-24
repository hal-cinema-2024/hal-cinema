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
  { link: "/movie", name: "チケット購入" },
  { link: "/schedules", name: "上映スケジュール" },
  { link: "/profile", name: "マイページ" },
];
function CommonLayout() {
  return (
    <>
      <div style={{ backgroundImage: `url(${headerImage})` }}>
        <Header>

          <Logo1 to="/">
            <img
              src="src/assets/48.png"
              alt="ロゴ画像"
              height={"120px"}
              width={"120px"}
            />
          </Logo1>
          <Nv>
            <NavLinks className="nav-links">
              {NavLinksData.map((navLink) => (
                <NavLinkItem key={navLink.link}>
                  <NavLink to={navLink.link}>{navLink.name}</NavLink>
                </NavLinkItem>
              ))}
            </NavLinks>
          </Nv>
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
            <NavItem>
              <FooterNavLink to="/">TOP</FooterNavLink>
            </NavItem>
            <NavItem>
              <FooterNavLink to="/movies">映画一覧</FooterNavLink>
            </NavItem>
            <NavItem>
              <FooterNavLink to="/schedules">スクリーン一覧</FooterNavLink>
            </NavItem>
            <NavItem>
              <FooterNavLink to="/movie">チケット購入</FooterNavLink>
            </NavItem>

          </Nav>
        </Footer>
      </div>
    </>
  );
}

export default CommonLayout;

const Header = styled.header`
  background: linear-gradient(to bottom right, #a6038b, #093f59);
  color: #fff;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  // font-weight: bold;
`;

const Logo1 = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
`;

const Nv = styled.ul`
  flex-grow: 1;
  display: flex;
  justify-content: right; /* 中央揃え */
  font-size: 16px;
`;

const NavLinks = styled.ul`
  justify-content: right; /* 中央揃え */
  display: flex;
`;

const NavLinkItem = styled.li`
  margin-left: 2rem;
  list-style: none;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  transition: color 0.3s ease;
  margin: 0.3rem; /* 文章間のスペースを広げる */

  &:hover {
    color: #ffca28;
  }
`;

const Footer = styled.footer`
  background-color: #f1f1f1;
  text-align: center;
  padding: 10px;
  background: linear-gradient(to bottom right, #a6038b, #093f59);
`;

const Logo2 = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: white;

  text-align: center;
`;

const Nav = styled.ul`
  display: flex;
  justify-content: center;
  padding: 0;
`;

const NavItem = styled.li`
  margin: 0 1.5rem;
  list-style: none;
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
