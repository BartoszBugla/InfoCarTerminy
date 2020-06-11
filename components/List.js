import React from "react";
import styled from "styled-components";

const Container = styled.ul`
    font-size: 18px;
`;
const P = styled.p`
    font-size: 27px;
`;
export default function List({ children, day }) {
    return (
        <Container>
            <P>{day}</P>
            {children}
        </Container>
    );
}
