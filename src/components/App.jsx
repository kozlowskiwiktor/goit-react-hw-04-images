import React, { useEffect, useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';
import fetchImages from 'services/api';

import { Notify } from 'notiflix';

export const App = ({ query }) => {
  const [inputValue, setInputValue] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSelectedImage, setIsSelectedImage] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [alt, setAlt] = useState(null);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const resetState = () => {
    setInputValue('');
    setPage(1);
    setImages([]);
  };

  const handlePageChange = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleModalImageUrl = (largeImageURL, tags) => {
    if (modalImage === largeImageURL) {
      return;
    }
    setIsSelectedImage(true);
    setModalImage(largeImageURL);
    setAlt(tags);
  };

  const handleModalClose = () => {
    setIsSelectedImage(false);
  };

  const handleSubmit = query => {
    setIsFormSubmitted(true);
    if (inputValue === query) {
      return;
    }
    resetState();

    setInputValue(query);
  };

  useEffect(() => {
    const getImages = async () => {
      if (isFormSubmitted && inputValue && page) {
        setLoading(true);
        try {
          const imagesData = await fetchImages(inputValue, page);
          const images = imagesData.hits;
          setImages(prevImage => [...prevImage, ...images]);
        } catch (error) {
          Notify.failure(`Sorry something went wrong: ${error.message}`);
          setError(error);
        } finally {
          setLoading(false);
        }
      }
    };

    getImages();
  }, [inputValue, page, isFormSubmitted]);

  return (
    <div>
      <Searchbar onSubmit={handleSubmit} error={error} />
      {loading && <Loader />}
      {images.length > 0 && (
        <ImageGallery images={images} modalImageUrl={handleModalImageUrl} />
      )}
      {images.length > 0 && <Button onClick={handlePageChange} />}
      {isSelectedImage && (
        <Modal modalImage={modalImage} alt={alt} onClose={handleModalClose} />
      )}
    </div>
  );
};
