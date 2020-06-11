import React from "react";

const List = ({ day, children }) => {
    return (
        <div>
            <p>{day}</p>
            {children}
        </div>
    );
};

export default List;
