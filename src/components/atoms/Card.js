const Card = ({ title, url }) => {
  return (
    <div className='card'>
      <img
        className='img'
        title={title} 
        alt={title} 
        src={url}
      />
    </div>
  )
}

export default Card;