import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import PetCarousel from "./PetCarousel";

const PetDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [pet, setPet] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPet();
  }, [id]);

  const fetchPet = async () => {
    try {
      const response = await fetch(`http://localhost:3001/pets/${id}`);
      if (!response.ok) {
        throw new Error('Pet not found');
      }
      const data = await response.json();
      setPet(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };


  if (isLoading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-message">
        <p>{error}</p>
        <button onClick={() => navigate('/')} className="button-primary">
          Return Home
        </button>
      </div>
    );
  }

  if (!pet) return null;

  const { name, breed, age, description, images, category, color } = pet;

  return (
    <div className="pet-details-overlay">
      <div className="pet-details">
        <button
          className="close-btn"
          onClick={() => navigate(-1)}
          aria-label="Close details"
        >
          ×
        </button>
        <div className="pet-details-content">
          <PetCarousel images={images} />
          <div className="pet-info">
            <h2 className="pet-name">{name}</h2>
            <p className="breed">{breed}</p>
            <p className="age">{age} {age === 1 ? 'year' : 'years'} old</p>
            <p className="category" data-category={category}>{category}</p>
            <p className="color">Color: {color}</p>
            <p className="description">{description}</p>
            <Link
              to={`/adopt/${id}`}
              className="button-primary"
            >
              Adopt {name}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetDetails;