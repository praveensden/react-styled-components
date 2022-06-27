import { useContext, useState } from "react";
import { Link as ReactRouterDomLink, NavLink } from "react-router-dom";
import styled, { ThemeContext } from "styled-components";
import { Toggle } from "./Toggle";

const HeaderWrapper = styled.header`
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  padding: 0 16px;
  position: fixed;
  top: 0;
  background: linear-gradient(
    to right,
    ${(p) => p.theme.primaryColor},
    ${(p) => p.theme.secondaryColor}
  );
  border-bottom: 3px solid ${(p) => p.theme.secondaryColor}; ;
`;
const MobileMenu = styled.div`
  margin: auto 0 auto auto;
  width: 25px;
  min-width: 25px;
  padding: 5px;
  > div {
    height: 3px;
    background: ${(p) => p.theme.bodyFontColor};
    margin: 5px 0;
    width: 100%;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;
const Menu = styled.nav`
  display: ${(p) => (p.open ? "block" : "none")};
  position: absolute;
  width: 100%;
  top: 60px;
  left: 0;
  border-bottom: 3px solid ${(p) => p.theme.secondaryColor};
  background: ${(p) => p.theme.bodyBackgroundColor};
  box-sizing: border-box;
  @media (min-width: 768px) {
    display: flex;
    position: relative;
    width: initial;
    border-bottom: none;
    margin: auto 0 auto auto;
    background: none;
    left: initial;
    top: initial;
  }
`;
// const Link = ({ isActive, children, ...props }) => {
//   return <ReactRouterDomLink {...props}>{children}</ReactRouterDomLink>;
// };
const StyledLink = styled(NavLink)`
  padding: 4px 8px;
  display: block;
  text-align: center;
  box-sizing: border-box;
  margin: auto 0;
  color: ${(p) => p.theme.bodyFontColor};
  //   font-weight: ${(p) => (p.isActive ? "bold" : "normal")};
`;
export function Header({}) {
  const { id, setTheme } = useContext(ThemeContext);

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <HeaderWrapper>
      <MobileMenu onClick={() => setMenuOpen((s) => !s)}>
        <div />
        <div />
        <div />
      </MobileMenu>
      <Menu open={menuOpen}>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/login">Login</StyledLink>
        <Toggle isActive={id === "dark"} onToggle={setTheme} />
      </Menu>
    </HeaderWrapper>
  );
}
