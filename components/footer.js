import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    background-color: black;
    position: absolute;
    bottom: 0;
    color: white;
`;
const Footer = () => {
    return (
        <Container>
            <p>Chuj ci w dupe ola</p>
        </Container>
    );
};

export default Footer;
