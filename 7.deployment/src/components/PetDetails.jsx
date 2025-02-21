
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import PetCarousel from "./PetCarousel";

const PetDetails = () => {
  const navigate = useNavigate();
  const pet = useLoaderData();

  const { id, name, breed, age, description, images, category, color } = pet;




  if (!pet) return null;
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