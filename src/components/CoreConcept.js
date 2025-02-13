import React from "react";

export default function CoreConcept({ image, title, description }) {
  return (
    <li className="youtuber-card">
      <div className="image-container">
        <img 
          src={image} 
          alt={title}
          onError={(e) => {
            console.error(`Error loading image: ${image}`);
            e.target.style.display = 'none';
          }} 
        />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}