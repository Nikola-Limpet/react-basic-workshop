import React from 'react'
import PetCard from './PetCard'

const PetList = ({ pets }) => {
  return (
    <div className="pets-grid">
      {pets?.map((pet) => (
        <div
          key={pet.id}

          className="pet-card-container"
        >
          <PetCard pet={pet} />
        </div>
      ))}
    </div>
  )
}

export default PetList