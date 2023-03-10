import React from "react";

const HomeProductCard = ({name, location_description, image, tags}) => {
  const chip = {price: "$$", rating: "4.5", distance: "1.2 km"};

  return (
    <div className="card-container">
      <div className="front">
        <img src={image} alt="" />
        <div className="chips">
          <div className="chip">{chip.price}</div>
          <div className="chip">
            <i class="fa-solid fa-star"></i>
            {chip.rating}
          </div>
          <div className="chip">{chip.distance}</div>
        </div>
      </div>
      <div className="back">
        <h3>{name}</h3>
        <div>
          <div>
            <i class="fa-solid fa-syringe"></i>
            <span>Vaccination</span>
          </div>
          <div>
            <i class="fa-solid fa-stethoscope"></i>
            <span>Health Examination</span>
          </div>
          <div>
            <i class="fa-solid fa-neuter"></i>
            <span>Spay & Neuter</span>
          </div>
        </div>
        <span>{location_description}</span>
      </div>
    </div>
  );
};

export default HomeProductCard;
