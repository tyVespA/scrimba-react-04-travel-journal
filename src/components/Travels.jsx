import React from "react";
import s from "../styles/Travels.module.css";
import Data from "./helpers/Data";
import Travel from "./Travel";

function Travels() {
  const travelCard = Data.map((travelObj) => (
    <Travel key={travelObj.title} item={travelObj} />
  ));
  return (
    <section className={s.travels}>
      <div className={s.travelsContainer}>{travelCard}</div>
    </section>
  );
}

export default Travels;
