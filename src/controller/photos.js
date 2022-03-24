export const fetchPhotos = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/albums/1/photos`);
  const data = await res.json();

  return data;
}