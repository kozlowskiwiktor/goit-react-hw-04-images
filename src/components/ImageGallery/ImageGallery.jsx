import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

function ImageGallery({ images, modalImageUrl }) {
  return (
    <ul className={css.imageGallery}>
      {images.map(({ id, tags, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          tags={tags}
          smallImageUrl={webformatURL}
          modalImageUrl={() => modalImageUrl(largeImageURL, tags)}
        />
      ))}
    </ul>
  );
}

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array,
  modalImageUrl: PropTypes.func,
};
