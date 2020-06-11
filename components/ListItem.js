import React from "react";
import styled from "styled-components";

const Container = styled.li`
    list-style: none;
`;

const listItem = ({ children }) => {
    return <Container>{children}</Container>;
};

export default listItem;
