import Card from "../atoms/Card";

const CardList = ({ photos }) => {
  return (
    <div className='card-list'>
      {photos.map((photos, i) => {
        return (
          <Card 
            key={photos.id}
            title={photos.title}
            url={photos.url}
          />
        )
      })}
    </div>
  )
}

export default CardList;