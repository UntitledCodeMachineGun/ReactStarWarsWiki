import PropTypes from 'prop-types';

import styles from './PersonPhoto.module.css';

const PersonPhoto = ({ personPhoto, personName }) => {
  return (
    <>
      <div className = { styles.container }>
        <img src = { personPhoto } alt = { personName } className = { styles.photo }/>
      </div>
    </>
  )
}

PersonPhoto.propTypes = {
  personPhoto: PropTypes.string,
  personPhoto: PropTypes.string
}

export default PersonPhoto;