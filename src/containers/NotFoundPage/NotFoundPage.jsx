import { useLocation } from 'react-router-dom';

import img from './img/Error.jpg';

import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  let location = useLocation();

  return (
    <>
      <img src={img} className={styles.img} alt="Not found" />
      <p className={styles.text}>No match for <u>{location.pathname}</u></p>
    </>
  )
}

export default NotFoundPage;