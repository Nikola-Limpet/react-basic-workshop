import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const AdoptionForm = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: ''
  })
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email) {
      setError('Please fill in all required fields')
      return
    }

    try {
      const response = await fetch('http://localhost:3001/pets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, petId: id, })
      })

      if (!response.ok) {
        throw new Error('Failed to submit adoption request')
      }
      // Then, update the pet's adoption status
      const petResponse = await fetch(`http://localhost:3001/pets/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ isAdopted: true })
      })

      if (!petResponse.ok) {
        throw new Error('Failed to update pet status')
      }
      // Navigate back to home on success
      navigate('/', {
        state: { message: 'Adoption application submitted successfully!' }
      })

    } catch (error) {
      setError('Failed to submit adoption request')
    }
  }

  return (
    <div className="adoption-form-container">
      <h2>Adoption Application</h2>
      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSubmit} className="adoption-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Last Name *</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit Application
        </button>
      </form>
    </div>
  )
}

export default AdoptionForm