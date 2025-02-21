import React from 'react'
import PetCard from './PetCard'

const PetList = ({ pets, favorites, onFavorite }) => {
  console.log(pets)
  // Combine all pets from different categories into a single array
  const allPets = [].concat(...Object.values(pets))

  return (
    <div className="pets-grid">
      {allPets.map(pet => (
        <PetCard
          key={pet.id}
          pet={pet}
          isFavorite={favorites.includes(pet.id)}
          onFavorite={() => onFavorite(pet)}
        />
      ))}
    </div>
  )
}

export default PetList