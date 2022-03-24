import { Link } from 'react-router-dom';

const Nav = ({ setText }) => {
  return (
    <div className='navigation'>
      <Link to='/task1' >Link 1</Link>
      <Link to='/task2' >Link 2</Link>
      <Link to='/task3' >Link 3</Link>
    </div>
  )
}

export default Nav;