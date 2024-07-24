import React, { useState } from "react";
import { Collapse } from "../Collapse/Collapse";
import RatingStar from "../RatingStar/RatingStar";
import DisplayTags from "../DisplayTag/DisplayTag";
import "../../style/LogementDescription.scss";

function LogementDescription({ logement }) {
  console.log({ logement });

  return (
    <div className="logementDescription">
      <div className="titleAndHost">
        <div className="titleAndLocation">
          <h2 className="title">{logement.title}</h2>
          <p className="location">{logement.location}</p>
        </div>
        <div className="host">
          <p>{logement.host.name}</p>
          <img
            className="hostPic"
            src={logement.host.picture}
            alt={logement.host.name}
          ></img>
        </div>
      </div>
      <div className="tagsAndStars">
        <DisplayTags tags={logement.tags} />
        <RatingStar rating={logement.rating} />
      </div>
      <div className="collapse">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Equipements"
          content={logement.equipments.join(", ")}
        />
      </div>
    </div>
  );
}

export default LogementDescription;
