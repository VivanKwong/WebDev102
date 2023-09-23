import React from 'react';

function RestaurantCard(props) {
  return (
    <div className="restaurant-card">
      <img src={props.imageSrc} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </div>
  );
}

export default RestaurantCard;