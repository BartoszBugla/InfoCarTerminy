import React from "react";
import styled from "styled-components";

const List = ({ day, children }) => {
    return (
        <div>
            <p>{day}</p>
            {children}
        </div>
    );
};

export default List;
