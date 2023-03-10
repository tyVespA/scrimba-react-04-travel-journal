import React from "react";
import s from "../styles/Travel.module.css";
import LocationIcon from "../assets/LocationIcon.svg";

function Travel({ item }) {
  return (
    <div className={s.travelContainer}>
      <img src={item.imageUrl} alt="" className={s.imageUrl} />
      <div className={s.travelInfo}>
        <div className={s.countrySection}>
          <img src={LocationIcon} alt="" />
          <p className={s.location}>{item.location}</p>
          <a href={item.googleMapsUrl} className={s.googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h2 className={s.title}>{item.title}</h2>
        <p className={s.date}>
          <span className={s.startDate}>{item.startDate}</span>
          <span> - </span>
          <span className={s.endDate}>{item.endDate}</span>
        </p>
        <p className={s.description}>{item.description}</p>
      </div>
    </div>
  );
}

export default Travel;
