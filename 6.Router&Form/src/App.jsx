import React, { useEffect, useState } from 'react'
import Headers from './components/Header'
import Footer from './components/Footer'
import PetList from './components/PetList'


const App = () => {
  const [pets, setPets] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const title = 'Adopt a Loving Companion Today!'
  // imprement search and loading, error states
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);


  // part 5
  // const [selectedPet, setSelectedPet] = useState(null);

  /// useEffect hook is a hook where it fetches data from out side of the component
  // particularly from an API or a database

  useEffect(() => {
    fetchPets();
  }, []);

  const fetchPets = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:3001/pets/');
      const data = await response.json();
      setPets(data);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  // Handle favorites
  const handleFavorite = (pet) => {
    setFavorites(prev => {
      if (prev.includes(pet.id)) {
        return prev.filter(id => id !== pet.id);
      }
      return [...prev, pet.id];
    });
  };

  // Filter pets based on search
  const filteredPets = pets.filter(pet =>
    pet.name?.toLowerCase().includes(searchTerm.toLowerCase())
    || pet.breed?.toLowerCase().includes(searchTerm.toLowerCase())
    || pet.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="container">
        <div className="loading-spinner">
          <div className="spinner"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-message">
        {error}
        <button
          className="button button-primary"
          onClick={fetchPets}
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <>
      <Headers title={title} />
      <main className="container">
        <div className="search-bar">
          <input
            type="text"
            className="search-input"
            placeholder="Search pet by name or breed..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="button button-primary"
            onClick={fetchPets}
          >
            Refresh
          </button>
        </div>
        <PetList
          pets={filteredPets}
          favorites={favorites}
          onFavorite={handleFavorite}
        />
      </main>
      <Footer />
    </>
  )
}

export default App