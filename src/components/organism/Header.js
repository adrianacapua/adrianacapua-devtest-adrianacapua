import { BrowserRouter } from 'react-router-dom';
import Navigation from "../molecule/Navigation";

const Header = ({ title, changeDesc }) => {
  return (
    <header>
      <h1 className='in-line'>{title}</h1>
      <Navigation changeDesc={changeDesc} />
    </header>
  )
}

export default Header;