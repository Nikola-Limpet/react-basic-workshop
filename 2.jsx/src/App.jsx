import React from 'react'
import Headers from './components/Header'
import Footer from './components/Footer'
import PetCard from './components/PetCard'

const App = () => {
  const title = 'Adopt a Loving Companion Today!'
  return (
    <>
      <Headers title={title} />
      <main className="container">
        <div className="pets-grid">
          <PetCard />
          <PetCard />
          <PetCard />

        </div>
      </main>
      <Footer />
    </>
  )
}

export default App