import React, { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const PetCard = ({ pet }) => {
  const { id } = pet;
  const { category, name, breed, age, image, description, isAdopted } = pet;

  // 
  const [isFavorite, setIsFavorite] = useState(() => {
    const savedFavorites = localStorage.getItem('petFavorites');


    const favoritesArray = savedFavorites ? JSON.parse(savedFavorites) : [];
    return favoritesArray.includes(id);
  });


  // Handle favorite toggle
  const handleClickFavorite = (e) => {
    setIsFavorite(prev => !prev);
  };

  // Update localStorage when favorite status changes
  useEffect(() => {
    const savedFavorites = localStorage.getItem('petFavorites');
    const favoritesArray = savedFavorites ? JSON.parse(savedFavorites) : [];

    if (isFavorite && !favoritesArray.includes(id)) {
      // Add to favorites
      localStorage.setItem('petFavorites', JSON.stringify([...favoritesArray, id]));
    } else if (!isFavorite && favoritesArray.includes(id)) {
      // Remove from favorites
      localStorage.setItem(
        'petFavorites',
        JSON.stringify(favoritesArray.filter(favId => favId !== id))
      );
    }
  }, [isFavorite, id]);

  return (
    <div className='pet-card'>
      <div className='pet-image-container'>
        <img
          src={image.includes('/api/placeholder') ? '/no-av.jpg' : `${image}`}
          alt={`${name} the ${breed}`}
          className='pet-image'
        />
        <div className="pet-badge-container">
          <span className="pet-age-badge">{age} {age === 1 ? 'year' : 'years'}</span>
          <span className='pet-status-badge-container'>
            {isAdopted ? (
              <span className="pet-adopted-badge">Adopted</span>
            ) : (
              <span className="pet-available-badge">Available</span>
            )}
          </span>
          <button
            className={`favorite-btn ${isFavorite ? 'active' : ''}`}
            onClick={handleClickFavorite}
            aria-label={`${isFavorite ? 'Remove from' : 'Add to'} favorites`}
          >
            {isFavorite ? '❤️' : '🤍'}
          </button>

        </div>
      </div>

      <div className="pet-card-content">
        <div className="pet-meta">
          <h2 className="pet-name">Name: {name}</h2>
          <p className="pet-breed">Breed: {breed}</p>
          <p className="pet-category" data-category={category}>
            {category}
          </p>
        </div>

        <p className="pet-description">
          {description}
        </p>

        <Link
          to={`/pets/${id}`}
          className="button-primary"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
}

export default PetCard;