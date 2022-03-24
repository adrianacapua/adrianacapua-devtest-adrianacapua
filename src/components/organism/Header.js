import Navigation from "../molecule/Navigation";

const Header = ({ title }) => {
  return (
    <header>
      <h1 className='in-line'>{title}</h1>
      <Navigation />
    </header>
  )
}

export default Header;