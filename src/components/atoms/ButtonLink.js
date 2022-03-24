import { Link } from 'react-router-dom';

const ButtonLink = ({ to, text }) => {
  return (<button className='btn'>
    <Link className='link' to={to} >{text}</Link>
    </button>)
}

export default ButtonLink;