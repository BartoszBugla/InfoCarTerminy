import React from "react";
import styled from "styled-components";
const Test = styled.ul`
    background-color: grey;
`;
const listItem = ({ children }) => {
    return <Test>{children}</Test>;
};

export default listItem;
