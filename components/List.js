import React from "react";
import styled from "styled-components";

const Container = styled.ul`
    font-size: 18px;
`;
const P = styled.p`
    font-size: 27px;
`;

const List = ({ day, children }) => {
    return (
        <Container>
            <P>{day}</P>
            {children}
        </Container>
    );
};

export default List;
