import React from "react";
import {useNavigate} from "react-router-dom";
const ContentCard = ({name, location_description, image, tags}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/clinic");
  };

  return (
    <div className="card-container" onClick={handleClick}>
      <img src={image} alt="" className="front" />
      <div className="back">
        <h1>{name}</h1>
        <p>
          <i class="fa-solid fa-location-dot"></i> {location_description}
        </p>
        <div>
          {tags.map((tag) => {
            return <div>{tag}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default ContentCard;
