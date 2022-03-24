import { useState } from 'react';

const Form = ({ createUser }) => {
  const [name, setName] = useState('');
  const [username, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (!name || !username || !email) {
      alert('Please fill out the required field.');
      return;
    }

    createUser({ name, username, email, phone });

    setName('');
    setUserName('');
    setEmail('');
    setPhone('');
    setWebsite('');
  }

  return (
    <div className='form box'>
      <form className='add-form' onSubmit={onSubmit}>
        <div className='required'>
          * Required fields
        </div>
        <div className='form-control'>
          <label>*Name</label>
          <input type='text' placeholder='Name' 
          value={name} 
          onChange={(e) => {
            setName(e.target.value)
          }} />
        </div>

        <div className='form-control'>
          <label>*Username</label>
          <input type='text' placeholder='Username' 
          value={username} 
          onChange={(e) => {
            setUserName(e.target.value)
          }} />
        </div>

        <div className='form-control'>
          <label>*Email</label>
          <input type='text' placeholder='Email' 
          value={email} 
          onChange={(e) => {
            setEmail(e.target.value)
          }} />
        </div>

        <div className='form-control'>
          <label>Phone</label>
          <input type='text' placeholder='Phone' 
          value={phone} 
          onChange={(e) => {
            setPhone(e.target.value)
          }} />
        </div>

        <div className='form-control'>
          <label>Website</label>
          <input type='text' placeholder='Website' 
          value={website} 
          onChange={(e) => {
            setWebsite(e.target.value)
          }} />
        </div>

        <input type='submit' value='Create New User' className='btn btn-block'/>
      </form>
    </div>
  )
}

export default Form;