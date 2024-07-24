import React, { useState } from "react";
import "../../style/Slideshow.scss";

function Slideshow({ logement }) {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  // Next picture function
  const nextPicture = () => {
    const totalPictures = logement.pictures.length;
    setCurrentPictureIndex((currentPictureIndex + 1) % totalPictures);
  };

  // Previous picture function
  const previousPicture = () => {
    const totalPictures = logement.pictures.length;
    setCurrentPictureIndex(
      (currentPictureIndex - 1 + totalPictures) % totalPictures
    );
  };

  // Vérification pour s'assurer qu'il y a des images à afficher
  if (!logement.pictures || !logement.pictures.length) {
    return <div>No images available.</div>;
  }
  //Récupération du nombre d'images à afficher
  const totalPictures = logement.pictures.length;

  // Récupération de l'image courante à afficher
  const currentPicture = logement.pictures[currentPictureIndex];

  return (
    <div className="slideShow-container">
      <img
        className="pictures"
        src={currentPicture}
        alt={`View ${currentPictureIndex + 1} of ${logement.title}`}
      />
      {totalPictures > 1 && (
        <div className="navigation">
          <button
            className="fa-solid fa-chevron-left prev"
            onClick={previousPicture}
          ></button>
          <button
            className="fa-solid fa-chevron-right next"
            onClick={nextPicture}
          ></button>
        </div>
      )}
      <div className="picture-count">
        {currentPictureIndex + 1} / {totalPictures}
      </div>
    </div>
  );
}

export default Slideshow;
