import React from "react";
import styled from "styled-components";
const Container = styled.section`
    background-color: ${(props) => (props.isPractice ? "#692692" : "#405cc1")};
    padding: 0;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.35);
    border-radius: 5px;
    height: 100%;
    color: white;
    padding: 10px;
`;
const Table = styled.table`
    width: 100%;

    th {
        padding-bottom: 5px;

        text-align: left;
        border-bottom: 1px solid #ddd;
    }
    td {
        height: 20px;
        vertical-align: bottom;
    }
`;
const P = styled.p`
    font-size: 1.2em;
    margin: 5px 0px;
    font-weight: 700;
`;

const List = ({ isPractice, day, children }) => {
    return (
        <Container isPractice={isPractice}>
            <P>{day}</P>
            <Table>
                <tr>
                    <th>Egzamin</th>
                    <th>Godzina</th>
                    <th>Miejsca</th>
                </tr>

                {children}
            </Table>
        </Container>
    );
};

export default List;
