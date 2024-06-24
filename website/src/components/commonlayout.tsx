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
          <Logo1 to='/'>LOGO</Logo1>
          <nav>
            <NavLinks className='nav-links'>
              {NavLinksData.map((navLink) => (
                <NavLinkItem key={navLink.link}>
                  <NavLink to={navLink.link}>{navLink.name}</NavLink>
                </NavLinkItem>
              ))}
            </NavLinks>
          </nav>
        </Header>
        <Outlet />

        <Footer>
          <Logo2 to='/'>LOGO</Logo2>
          <Nav>
            {NavLinksData.map((navLink) => (
              <NavItem key={navLink.link}>
                <FooterNavLink to={navLink.link}>{navLink.name}</FooterNavLink>
              </NavItem>
            ))}
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
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const Logo1 = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #fff;
`;

const NavLinks = styled.ul`
  display: flex;
`;

const NavLinkItem = styled.li`
  margin-left: 1.5rem;
  list-style: none;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  transition: color 0.3s ease;

  &:hover {
    color: #ffca28;
  }
`;

const Footer = styled.footer`
  background-color: #f1f1f1;
  text-align: center;
  padding: 10px;
`;

const Logo2 = styled(Link)`
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  color: #000;
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
  color: #000;
  transition: color 0.3s ease;

  &:hover {
    color: #ffca28;
  }
`;

// const Copyright = styled.p`
//   margin-top: 1rem;
//   font-size: 0.875rem;
//   color: #777;
// `;
