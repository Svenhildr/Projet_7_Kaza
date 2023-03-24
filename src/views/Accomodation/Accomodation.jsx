import React from "react";
import "../Accomodation/Accomodation.scss";
// import logements from "../../data/logements.json";
// import Tag from "../../components/Tag/Tag";
import DropDown from "../../components/DropDown/DropDown";
import arrow from "../../Assets/contentHidden.png";
import "../../components/DropDown/DropDown.scss";
import { useParams } from "react-router-dom";

export default function Accomodation({ logements }) {
  const { idCard } = useParams();

  const logement = logements.find((logement) => logement.id === idCard);

  console.log(logement);

  return (
    <div className="accomodationContainer">
      <div className="accomodationDropDown">
        <DropDown
          content={logement.description}
          arrow={arrow}
          title="Description"
        />
        {/* </div> */}
        {/* <div className="accomodationDropDown"> */}
        {/*         <DropDown
          title="Équipement"
          arrow={arrow}
          content={logement.equipments}
        /> */}

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
