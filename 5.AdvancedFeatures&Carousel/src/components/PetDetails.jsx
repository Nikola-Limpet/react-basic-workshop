import PetCarousel from "./PetCarousel";

const PetDetails = ({ pet, onClose }) => {
  const { name, breed, age, description, images, category, color } = pet;

  return (
    <div className='pet-details-overlay'>
      <div className='pet-details'>
        <button className="close-btn" onClick={onClose}>×</button>

        <div className='pet-details-content'>
          <PetCarousel images={images} />

          <div className='pet-info'>
            <h2 className="pet-name">{name}</h2>
            <p className="breed">{breed}</p>
            <p className="age">{age} {age === 1 ? 'year' : 'years'} old</p>
            <p className="category" data-category={category}>{category}</p>
            <p className="color">Color: {color}</p>
            <p className="description">{description}</p>

            <button className="adopt-btn">Adopt {name}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PetDetails