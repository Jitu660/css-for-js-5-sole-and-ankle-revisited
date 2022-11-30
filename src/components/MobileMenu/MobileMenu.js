/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <Overlay onClick={onDismiss}></Overlay>
      <MobileMenuWrapper>
        <CloseBtnWrapper>
          <UnstyledButton onClick={onDismiss}>
            <VisuallyHidden>Dismiss Button</VisuallyHidden>
            <Icon id="close" strokeWidth={2} />
          </UnstyledButton>
        </CloseBtnWrapper>
        <MenuLinksWrapper>
          <ActiveLink href="/sale">Sale</ActiveLink>
          <Link href="/new">New&nbsp;Releases</Link>
          <Link href="/men">Men</Link>
          <Link href="/women">Women</Link>
          <Link href="/kids">Kids</Link>
          <Link href="/collections">Collections</Link>
        </MenuLinksWrapper>
        <footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </footer>
      </MobileMenuWrapper>
    </>
  );
};

const MobileMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100%;
  width: min(100%, 300px);
  background-color: white;
  padding: 32px;
  z-index: 2;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CloseBtnWrapper = styled.div`
  margin-right: -10px;
  margin-left: auto;
`;

const MenuLinksWrapper = styled.nav``;
const Link = styled.a`
  display: block;
  text-decoration: none;
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[900]};
  line-height: 2.5;
  text-transform: uppercase;
`;

const ActiveLink = styled(Link)`
  color: ${COLORS.secondary};
`;

const FooterLink = styled(Link)`
  font-size: ${14 / 16}rem;
  font-weight: ${WEIGHTS.normal};
  line-height: 2;
  color: ${COLORS.gray[700]};
  text-transform: revert;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: hsla(220, 5%, 40%, 0.8);
  z-index: 1;
`;
export default MobileMenu;
