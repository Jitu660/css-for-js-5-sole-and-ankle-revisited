import React from "react";
import styled from "styled-components/macro";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <MobileIcons>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={2} />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={2} />
          </UnstyledButton>
        </MobileIcons>
        <GreedyFiller />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow: auto;
  @media (${QUERIES.tabletAndSmaller}) {
    border-top: 4px solid ${COLORS.gray[900]};
    align-items: center;
  }
  
  @media (${QUERIES.phoneAndSmaller}) {
    padding: 18px 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(
    1rem,
    8vw - 3.75rem,
    3rem
  );
  margin: 0px 48px;

  @media (${QUERIES.tabletAndSmaller}) {
    display: none;
  }
`;

const MobileIcons = styled.div`
  display: none;

  @media(${QUERIES.tabletAndSmaller}) {
    display: flex;
    align-items: center;
    gap: 32px;
    margin-left: auto;
  }
  @media(${QUERIES.phoneAndSmaller}) {
    gap: 16px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;
  @media(${QUERIES.tabletAndSmaller}) {
    flex: 0;
  }
`;

const GreedyFiller = styled(LogoWrapper)`
  @media(${QUERIES.tabletAndSmaller}) {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
