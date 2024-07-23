import React, { useState } from "react";
import { Collapse } from "../Collapse/Collapse";
import "../../style/LogementDescription.scss";

function LogementDescription({ logement }) {
  console.log({ logement });

  return (
    <div className="logementDescription">
      <div className="titleAndHost">
        <h2 className="title">{logement[0].title}</h2>
      </div>
      <p className="location">{logement[0].location}</p>
      <div className="collapse">
        <Collapse title="Description" content={logement[0].description} />
        <Collapse title="Equipements" content={logement[0].equipments} />
      </div>
    </div>
  );
}
/*<img
            className="hostPic"
            src={logement[0].host.picture}
            alt={logement[0].host.name}
          ></img>
          <p>{logement[0].host.name}</p>
          */

export default LogementDescription;
