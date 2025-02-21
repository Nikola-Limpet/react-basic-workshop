import React, { useState } from 'react'
import Headers from './components/Header'
import Footer from './components/Footer'
import PetList from './components/PetList'
import petsData from '../db.json'

const App = () => {


  /// do mock pets data first then refactor by using useState

  // const mockPets = [
  //   {
  //     id: 1,
  //     name: 'Luna',
  //     species: 'Cat',
  //     age: 2,
  //     breed: 'Tabby',
  //     image: 'https://placekitten.com/200/200',
  //     description: 'A playful tabby cat who loves chasing laser pointers.',
  //   },
  //   {
  //     id: 2,
  //     name: 'Max',
  //     species: 'Dog',
  //     age: 3,
  //     breed: 'Golden Retriever',
  //     image: 'https://placedog.net/200/200',
  //     description: 'A loyal companion who enjoys long walks.',
  //   },
  // ];

  // <PetList pets={mockPets} />
  const [pets] = useState(petsData);
  const [favorites, setFavorites] = useState([]);
  const title = 'Adopt a Loving Companion Today!'

  // Handle favorites
  const handleFavorite = (pet) => {
    setFavorites(prev => {
      if (prev.includes(pet.id)) {
        return prev.filter(id => id !== pet.id);
      }
      return [...prev, pet.id];
    });
  };

  return (
    <>
      <Headers title={title} />
      <main className="container">
        <PetList
          pets={pets}
          favorites={favorites}
          onFavorite={handleFavorite}
        />
      </main>
      <Footer />
    </>
  )
}

export default App