const Card = ({ id, title, url='https://via.placeholder.com/600/602b9e' }) => {
  return (
    <div className='card'>
      <img
        className='img'
        alt={title} 
        src={url}
      />
    </div>
  )
}

export default Card;