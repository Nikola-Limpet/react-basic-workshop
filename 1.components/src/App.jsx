import React from 'react'

function Headers(props) {
  console.log(props.name)
  return (
    <div className='header'>
      <img src='/logo.png' alt='logo' style={{ padding: '29px' }} width={150} height={150} className='logo' />
      <h1 className='logo'>🐱Hello Catty!</h1>
    </div>
  )
}


const App = () => {
  const cat = '🐱catty';
  const dog = '🐶doggy';
  const mouse = '🐭mousey';
  return (
    <>
      <Headers name={cat} />
      <Headers name={dog} />
      <Headers name={mouse} />
    </>
  )
}

export default App