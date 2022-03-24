import CardList from "../molecule/CardList";

const Content = ({ photos }) => {
  return (
    <div className='content box'>
      <CardList photos={photos}/>
    </div>
  )
}

export default Content;