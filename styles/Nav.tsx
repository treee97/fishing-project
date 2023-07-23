import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const NavbarContainer = styled.nav`
  width: 100%;
  min-height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;

  outline: 2px solid gold;
`;

export const PlayBtn = styled.a`
  border: 2px solid white;
  padding: 8px 32px;
  border-radius: 8px;
  font-size: 1.5rem;
  background: linear-gradient(0deg, #23cafd 69%, #1ab0f0 100%);
  text-align: center;
  cursor: pointer;
`;
