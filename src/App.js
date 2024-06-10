import Header from './components/Header';
import { useEffect, useState } from 'react';
import SearchPictures from './components/SearchPictures';
import NavMenu from './components/NavMenu';
import Gallery from './components/Gallery';

import { getImages } from './helper';
import { API_KEY, API_URL, IMG_PER_PAGE } from './config';

const initialQuery = localStorage.query || 'Mountain';

export default function App() {
  const [query, setQuery] = useState(initialQuery);
  const [photosData, setPhotosData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [readyToRenderPhotos, setReadyToRenderPhotos] = useState(false);

  useEffect(() => {
    localStorage.setItem('query', query);
    handleGetImages(query);
  }, [query]);

  async function handleGetImages(q) {
    setReadyToRenderPhotos(false);
    setIsLoading(true);
    try {
      const data = await getImages(`${API_URL}?client_id=${API_KEY}&query=${q}&per_page=${IMG_PER_PAGE}`);
      setPhotosData(data);
    } catch (e) {
      setPhotosData(null);
    }
    setTimeout(() => setReadyToRenderPhotos(true), 500);
    setIsLoading(false);
  }

  return (
    <div className="container">
      <Header />
      <SearchPictures setQuery={setQuery} />
      <NavMenu setQuery={setQuery} />
      <Gallery photosData={photosData} query={query} isLoading={isLoading} readyToRender={readyToRenderPhotos} />
    </div>
  );
}
