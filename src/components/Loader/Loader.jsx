import { RotatingTriangles } from 'react-loader-spinner';
import css from './Loader.module.css';

function Loader() {
  return (
    <div className={css.loader}>
      <RotatingTriangles
        visible={true}
        height="80"
        width="80"
        ariaLabel="rotating-triangles-loading"
        wrapperStyle={{}}
        wrapperClass="rotating-triangles-wrapper"
      />
    </div>
  );
}

export default Loader;
