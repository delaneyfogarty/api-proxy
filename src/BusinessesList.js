import React from 'react';

export default function BusinessesList({ yelpData }) {
  // console.log(yelpData);
  return (
    <div>
      {yelpData.map((business, i) => (
        <div key={business.name + i}>
          <h2>{business.name}</h2>
          <p>{business.phone}</p>
          <p>{business.price}</p>
          <img src={business.image_url} />
        </div>
      ))}
    </div>
  );
}
