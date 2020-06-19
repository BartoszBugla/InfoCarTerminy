import React from "react";
import styled from "styled-components";

const Container = styled.nav`
    display: flex;
    align-items: left;
    flex-direction: column;
    padding: 25px;
    margin-bottom: 20px;
    color: white;
    background-color: #405cc1;
`;

export default function Navbar({ children }) {
    return <Container>{children}</Container>;
}
