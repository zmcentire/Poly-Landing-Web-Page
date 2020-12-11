import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

const FooterWrapper = styled.div`
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 400px;
    background-color: #38444E;
    display: flex;
    justify-content: space-between;
`;

const NavItem = styled.p`
    font-family: mulish;
    color: white;
    font-size: 18px;
    line-height: 24px;
`;

function Footer(Props) {
    return (
        <FooterWrapper>
            <NavItem>About Us</NavItem>
            <NavItem>Blog</NavItem>
            <NavItem>Team</NavItem>
            <NavItem>Join The Team</NavItem>
            <NavItem>Social Links</NavItem>
            <NavItem>Instagram</NavItem>
            <NavItem>Facebook</NavItem>
            <NavItem>LinkedIn</NavItem>
            <NavItem>Contact</NavItem>
            <NavItem>Help</NavItem>
            <NavItem>Phone #</NavItem>
        </FooterWrapper>
    )
}

export default withRouter(Footer);