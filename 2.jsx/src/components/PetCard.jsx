import React from 'react'

const PetCard = () => {
  return (
    <div className='pet-card'>
      <div className='pet-image-container'>
        <img
          src='/no-av.jpg'
          alt='pet'
          className='pet-image'
        />
        <div className="pet-badge-container">
          <span className="pet-age-badge">2 years</span>
          <button className="favorite-btn" aria-label="Add to favorites">
            ❤️
          </button>
        </div>
      </div>

      <div className="pet-card-content">
        <div className="pet-meta">
          <h2 className="pet-name">Buddy</h2>
          <p className="pet-breed">Golden Retriever</p>
        </div>

        <p className="pet-description">
          Friendly and energetic dog looking for a loving home.
        </p>

        <button className="button-primary">
          Learn More
        </button>
      </div>
    </div>
  )
}

export default PetCard