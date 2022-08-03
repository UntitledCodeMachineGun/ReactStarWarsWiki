import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './CharactersList.module.css';

const CharactersList = ({ characters }) => {
  return (
      <ul className={styles.list__container}>
      {characters.map(({ id, name, img }) =>
        <li className={styles.list__item} key={id}>
          <Link to = { `/characters/${id}` }>
          <img className={styles.character__photo} src={img} alt={name} />
          <p>{name}</p>
          </Link>
        </li>
      )}
    </ul>
  )
}

CharactersList.propTypes = {
  characters: PropTypes.array
}

export default CharactersList;