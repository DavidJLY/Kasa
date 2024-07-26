import React from "react";
import Collapse from "../Collapse/Collapse";
import RatingStar from "../RatingStar/RatingStar";
import DisplayTags from "../DisplayTag/DisplayTag";
import "../../style/LogementDescription.scss";

// Displaying the accommodation information and using the DisplayTag, RatingStar, and Collapse components
function LogementDescription({ logement }) {
  console.log({ logement });

  return (
    <div className="flatInformation">
      <div className="firstSection">
        <div className="titleAndLocation">
          <h2 className="title">{logement.title}</h2>
          <p className="location">{logement.location}</p>
          <DisplayTags tags={logement.tags} />
        </div>
        <div className="hostAndRating">
          <div className="host">
            <p>{logement.host.name}</p>
            <img
              className="hostPic"
              src={logement.host.picture}
              alt={logement.host.name}
            ></img>
          </div>
          <RatingStar rating={logement.rating} />
        </div>
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
