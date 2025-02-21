import React from 'react'
import PetCard from './PetCard'

const PetList = ({ pets, favorites, onFavorite, onSelect }) => {

  return (
    <div className="pets-grid">
      {pets.map(pet => (
        <PetCard
          key={pet.id}
          pet={pet}
          isFavorite={favorites.includes(pet.id)}
          onFavorite={() => onFavorite(pet)}
          onSelect={onSelect}
        />
      ))}
    </div>
  )
}

export default PetList