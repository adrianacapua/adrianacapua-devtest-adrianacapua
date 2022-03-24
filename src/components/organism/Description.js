import { useLocation } from 'react-router-dom';

const Description = () => {
  const location = useLocation();

  let text;

  switch(location.pathname) {
    case '/': 
    case '/task1': text = 'Find out how https://jsonplaceholder.typicode.com/ REST API works and make a web page to display all photos in album id:1. You need to use React framework with any tools/packages you like to style the page.'; break;
    case '/task2': text = 'Create a page with a form to submit new user to https://jsonplaceholder.typicode.com/.'; break;
    case '/task3': text = 'Write an unit test for task 2 to confirm the response from server when submit.'; break;
    default: text = 'Find out how https://jsonplaceholder.typicode.com/ REST API works and make a web page to display all photos in album id:1. You need to use React framework with any tools/packages you like to style the page.'; 
  }

  return (
    <div className='desc box'>
      {text}
    </div>
  )
}

export default Description;