import React, { useState, useEffect } from "react";
import List from "../components/List";
import ListItem from "../components/ListItem";
import Select from "../components/Select";
import Router from "next/router";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import compareDateFunc from "../customFunctions/compareDateFunc";
import Footer from "../components/footer";
const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: auto;
    grid-gap: 30px 10px;
    font-size: 16px;
    margin: 10px;

    @media only screen and (max-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);
        font-size: 16px;
    }
    @media only screen and (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
        font-size: 16px;
    }
    @media only screen and (max-width: 600px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;
let words = [
    { name: "Katowice", id: 45 },
    { name: "Dąbrowa Górnicza", id: 46 },
    { name: "Tychy", id: 47 },
    { name: "Jastrzębie zdrój", id: 48 },
    { name: "Rybnik", id: 49 },
    { name: "Bytom", id: 50 },
    { name: "Bielsko-Biała", id: 51 },
];

const index = ({ resData, wordID }) => {
    const word = words.find((word) => {
        return word.id == wordID;
    });

    const [data, setData] = useState(resData);

    useEffect(() => {
        setData(resData);
    }, [resData]);

    let arrayOfItems = Object.entries(data).sort(compareDateFunc);

    let lists = arrayOfItems.map((i, index) => {
        let isPractice = false;
        const items = i[1].map((e, eindex) => {
            if (e.practice) {
                isPractice = true;
                return (
                    <ListItem
                        places={e.practice[0].places}
                        type="Praktyka"
                        date={e.practice[0].date}
                        key={eindex}
                    />
                );
            }
            if (e.theory)
                return (
                    <ListItem
                        places={e.theory.places}
                        type="Teoria"
                        date={e.theory.date}
                        key={eindex}
                    />
                );
        });

        return (
            <List isPractice={isPractice} key={index} day={i[0]}>
                {items}
            </List>
        );
    });
    const handleChange = (event) => {
        event.persist();
        Router.push({
            pathname: "/",
            query: { id: event.target.value },
        });
    };
    for (let i = 6; i < 12; i++) {}
    return (
        <div style={{ minHeight: "100vh" }}>
            <Navbar>
                {word.name}
                <Select
                    onChange={handleChange}
                    value={wordID}
                    type="word"
                    title="Wybór worda"
                    options={words}
                />
            </Navbar>

            <Container> {lists}</Container>

            <Footer />
        </div>
    );
};

export async function getServerSideProps(ctx) {
    ctx.query.id ? ctx.query.id : (ctx.query.id = 48);

    let resData = {};
    for (let i = 6; i < 12; i++) {
        const url = `https://info-car.pl/services/word/ajax/getSchedule?wordId=${ctx.query.id}&examCategory=B&month=2020-0${i}&_=1591863562242`;
        const res = await fetch(url);
        const json = await res.json();
        resData = { ...resData, ...json.terms };
    }

    return { props: { resData, wordID: ctx.query.id } };
}
export default index;
