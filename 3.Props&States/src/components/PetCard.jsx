import React from 'react'

const PetCard = ({ pet, isFavorite, onFavorite }) => {
  const { category, name, breed, age, image, description } = pet;

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
          <button
            className={`favorite-btn ${isFavorite ? 'active' : ''}`}
            onClick={onFavorite}
            aria-label={`${isFavorite ? 'Remove from' : 'Add to'} favorites`}
          >
            {isFavorite ? '❤️' : '🤍'}
          </button>
        </div>
      </div>

      <div className="pet-card-content">
        <div className="pet-meta">
          <h2 className="pet-name">name: {name}</h2>
          <p className="pet-breed">breed: {breed}</p>
          <p className="pet-category" data-category={category}>
            {category}
          </p>
        </div>

        <p className="pet-description">
          {description}
        </p>

        <button className="button-primary">
          Learn More
        </button>
      </div>
    </div>
  )
}

export default PetCard;