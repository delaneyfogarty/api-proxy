import React from 'react';

export default function BusinessesList({ yelpData }) {
  return (
    <div>
      {yelpData.map(({ name, phone, price, image_url }, i) => {
        <div key={name + i}>
          <h2>{name}</h2>
          <p>{phone}</p>
          <p>{price}</p>
          <img src={image_url} />
        </div>;
      })}
    </div>
  );
}
