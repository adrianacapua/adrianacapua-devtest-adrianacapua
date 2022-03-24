import { useLocation } from 'react-router-dom';
import Navigation from "../molecule/Navigation";

const Header = ({ changeDesc }) => {
  const location = useLocation();

  let taskTitle;

  switch(location.pathname) {
    case '/': 
    case '/task1': taskTitle = 'Task #1'; break;
    case '/task2': taskTitle = 'Task #2'; break;
    case '/task3': taskTitle = 'Task #3'; break;
    default: taskTitle = 'Task #4'; 
  }

  return (
    <header className='header'>
      <h1 className='inline'>{taskTitle}</h1>
      <Navigation />
    </header>
  )
}

export default Header;