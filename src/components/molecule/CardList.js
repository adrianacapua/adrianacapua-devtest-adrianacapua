import Card from "../atoms/Card";

const CardList = ({ photos }) => {
  return (
    <div className='card-list'>
      {photos.map((photos, i) => {
        return (
          <Card 
            id='1'
            title='title'
          />
        )
      })}
    </div>
  )
}

export default CardList;