import { useState, useEffect } from 'react';
import Header from "./components/organism/Header";
import Description from './components/organism/Description';
import Content from './components/organism/Content';

import { fetchPhotos } from './controller/photos';

function App() {

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
      <Header title='Title Task'/>
      <Description />
      <Content photos={photos} />
    </div>
  );
}

export default App;
