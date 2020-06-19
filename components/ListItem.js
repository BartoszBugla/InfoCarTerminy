import React from "react";
import styled from "styled-components";
import getHour from "../customFunctions/getHour";
const Test = styled.tr`
    list-style: none;
    padding: 2px;
`;
const listItem = ({ type, places, date }) => {
    if (type === "Praktyka") {
        return (
            <Test>
                <td>
                    <b>{type}</b>
                </td>
                <td>{getHour(date)}</td>
                <td>{places}</td>
            </Test>
        );
    } else {
        return (
            <Test>
                <td>{type}</td>
                <td>{getHour(date)}</td>
                <td>{places}</td>
            </Test>
        );
    }
};

export default listItem;
