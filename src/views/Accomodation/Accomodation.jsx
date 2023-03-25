import React from "react";
import "../Accomodation/Accomodation.scss";
import "../../components/DropDown/DropDown.scss";
import "../../components/Tag/Tag.scss";
// import logements from "../../data/logements.json";
import Tag from "../../components/Tag/Tag";
import DropDown from "../../components/DropDown/DropDown";
import arrow from "../../Assets/contentHidden.png";
import { useParams } from "react-router-dom";
import Rating from "../../components/Rating/Rating";

export default function Accomodation({ logements }) {
  const { idCard } = useParams();

  const logement = logements.find((logement) => logement.id === idCard);

  console.log(logement);

  return (
    <div className="accomodationContainer">
      <div className="accomodationRating">
        <Rating StarRating={logement.rating} />
      </div>
      <h1 className="logementTitle">{logement.title}</h1>
      <p className="logementLocation">{logement.location}</p>
      <div className="tagContainer">
        <Tag>
          <ul>
            {logement.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </Tag>
      </div>
      <div className="accomodationDropDown">
        <DropDown
          content={logement.description}
          arrow={arrow}
          title="Description"
        />
        <DropDown title="Équipement" arrow={arrow}>
          <ul>
            {logement.equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        </DropDown>
      </div>
    </div>
  );
}
//
