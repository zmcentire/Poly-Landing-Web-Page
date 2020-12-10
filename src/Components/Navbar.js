import React from 'react';
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const NavbarWrapper = styled.div`
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 75px;
    background-color: rgb(176, 176, 176);
    display: flex;
    align-content: center;
    background-color: #73B4C1;
    justify-content: space-evenly;
`;

const Logo = styled.img`
    width: 15px;
    height: 16px;
`;

const NavItem = styled.h4`
    text-align: center;
    color: white;
    font-size: 24px;

    :hover{
        cursor: pointer;
    }
`;

const Button = styled.div`
    font-size: 1em;
    margin: 1em;
    color: white;
    padding: 0.25em 0.5em 0.25em 0.5em;
    border-radius: 5px;
    background-color: indigo;
    height: 25px;
    align-self: center;

    :hover {
    cursor: pointer;
    }
`;

function Navbar(Props) {
    return (
        <NavbarWrapper>
            <Logo/>
            <NavItem>Home</NavItem>
            <NavItem>Services</NavItem>
            <NavItem>Request A Demo</NavItem>
            <NavItem>Pricing</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Blog</NavItem>
            <Button>Try For Free</Button>
        </NavbarWrapper>
    )
}

export default withRouter(Navbar);