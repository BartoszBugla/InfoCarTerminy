import React, { useState } from "react";
import List from "../components/List";
import ListItem from "../components/ListItem";
import Select from "../components/Select";
import Router from "next/router";

let words = [{ name: "jastrzębie zdrój", id: 48 }];
const index = ({ resData, wordID }) => {
    const [data, setData] = useState(resData);

    let arrayOfItems = Object.values(data);
    let dates = Object.keys(data);

    let lists = arrayOfItems.map((i, index) => {
        const items = i.map((e, eindex) => {
            if (e.practice) {
                return (
                    <ListItem key={eindex}>
                        {" "}
                        <b>Praktyka</b> : {e.practice[0].date}
                    </ListItem>
                );
            }
            if (e.theory) return <ListItem key={eindex}> Teoria: {e.theory.date}</ListItem>;
        });

        return (
            <List key={index} day={dates[index]}>
                {items}
            </List>
        );
    });
    const handleChange = (event) => {
        Router.push({
            pathname: "/",
            query: { id: event.target.value },
        });
    };
    for (let i = 6; i < 12; i++) {}
    return (
        <div>
            Jastrzebie zdrój
            <Select
                onChange={handleChange}
                value={wordID}
                type="number"
                title="wybór worda"
                lastNumber="50"
            />
            {lists}
        </div>
    );
};

index.getInitialProps = async (ctx) => {
    ctx.query.id ? ctx.query.id : (ctx.query.id = 48);
    let resData = {};
    for (let i = 6; i < 12; i++) {
        const res = await fetch(
            `https://info-car.pl/services/word/ajax/getSchedule?wordId=${ctx.query.id}&examCategory=B&month=2020-0${i}&_=1591863562242`
        );
        const json = await res.json();
        resData = { ...resData, ...json.terms };
    }

    return { resData, wordID: ctx.query.id };
};

export default index;
