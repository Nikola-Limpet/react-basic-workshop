import React from 'react'
import PetCard from './PetCard'

const PetList = ({ pets, favorites, onFavorites }) => {
  return (
    <div className="pets-grid">
      {pets?.map(pet => (
        <PetCard
          key={pet.id}
          pet={pet}
          isFavorite={favorites.includes(pet.id)}
          onFavorite={() => onFavorites(pet)}
        />
      ))}
    </div>
  )
}

export default PetList