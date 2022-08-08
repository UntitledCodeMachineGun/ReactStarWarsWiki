import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import cn from 'classnames';

import styles from './UILoading.module.css';

import loaderWhite from './img/loader-white.svg';
import loaderBlack from './img/loader-black.svg';
import loaderBlue from './img/loader-blue.svg';

const UILoading = ({ theme = 'white', isShadow = true, classes }) => {
  const [loaderIcon, setLoaderIcon] = useState(null);
  
  useEffect(() => {
    switch (theme) {
      case 'black':
        setLoaderIcon(loaderBlack);
        break;
      case 'blue':
        setLoaderIcon(loaderBlue);
        break;
      case 'white':
        setLoaderIcon(loaderWhite);
        break;
    
      default:
        break;
    }
  }, []);

  return (
    <img
      src={ loaderIcon }
      alt="loader"
      className={ cn(styles.loader, isShadow && styles.shadow, classes) }
    />
  )
}

UILoading.propTypes = {
  theme: PropTypes.string,
  isShadow: PropTypes.bool,
  classes: PropTypes.string
}

export default UILoading;