

const Headers = (props) => {
  return (
    <div className='header'>
      <img src='/logo.png' alt='logo' style={{ padding: '29px' }} width={170} height={180} className='logo' />
      <p className="tagline">Welcome to {props.title}</p>
    </div>
  )
}


export default Headers;