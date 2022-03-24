import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/organism/Header";
import Description from './components/organism/Description';
import CardList from './components/molecule/CardList';
import Form from './components/molecule/Form';

import { fetchPhotos } from './controller/photos';
import { createUser } from './controller/user';

function App() {

  const [desc, ] = useState('Find out how https://jsonplaceholder.typicode.com/ REST API works and make a web page to display all photos in album id:1. You need to use React framework with any tools/packages you like to style the page.');
  
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const getPhotos = async () => {
      const photos = await fetchPhotos();
      setPhotos(photos);
    }

    getPhotos();
  }, []);

  return (
    <div className='container box'>
      <BrowserRouter>
        <Header title='Title Task'/>
        <Description text={desc}/>
        <Routes>
          <Route path='/' exact element={<CardList photos={photos} />} />
          <Route path='/task1' element={<CardList photos={photos} />} />
          <Route path='/task2' element={<Form createUser={createUser}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
