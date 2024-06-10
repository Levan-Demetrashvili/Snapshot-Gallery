import React, { useState } from 'react';
import Photo from './Photo';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';

export default function Gallery({ photosData, query, isLoading, readyToRender }) {
  const noImagesFound = !photosData?.results?.length;
  const listItems = photosData?.results?.map(data => <Photo key={data.id} url={data.urls.small} description={data.slug} />);
  return (
    <div className="gallery">
      <h2>{query} Images</h2>
      <div className="photos">
        {isLoading && <Loader />}
        {readyToRender && <ul>{listItems}</ul>}
        {noImagesFound && readyToRender && <ErrorMessage />}
      </div>
    </div>
  );
}
