import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const NavbarContainer = styled.nav`
	width: 100%;
	height: 15vh;
	display: flex;
	align-items: center;
	justify-content: space-between;

	outline: 2px solid gold;
	
`;

export const PlayBtn = styled(Link)`
	border: 1px solid blue;
	padding: 8px 32px;
	border-radius: 8px;
	font-size: 2.5rem;

	/* background: #fffcfc; */
	/* box-shadow: 0 0 25px #f5ffff; */
`;
