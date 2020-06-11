import React from "react";
import List from "../components/List";
import ListItem from "../components/ListItem";

const index = ({ respond }) => {
    let arrayOfItems = Object.values(respond);
    let dates = Object.keys(respond);
    let status = "Brak praktyki";
    let lists = arrayOfItems.map((i, index) => {
        const items = i.map((e, eindex) => {
            if (e.practice) {
                status = "Jest egzamin praktyczny!";
                return (
                    <ListItem key={eindex}>
                        {" "}
                        <b>Praktyka</b> : {e.practice[0].date}
                    </ListItem>
                );
            }
            if (e.theory) return <ListItem> Teoria: {e.theory.date}</ListItem>;
        });

        return <List day={dates[index]}>{items}</List>;
    });
    return (
        <div>
            Jastrzebie zdrój
            {lists}
            <p>{status}</p>
        </div>
    );
};

index.getInitialProps = async (ctx) => {
    let words = [{ name: "jastrzębie zdrój", id: 48 }];
    let respond = {};
    for (let i = 6; i < 12; i++) {
        const res = await fetch(
            `https://info-car.pl/services/word/ajax/getSchedule?wordId=48&examCategory=B&month=2020-0${i}&_=1591863562242`
        );
        const json = await res.json();
        respond = { ...respond, ...json.terms };
    }

    return { respond };
};
export default index;
