import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { GUIDE_PEOPLE } from '@constants/Api'
import UIButton from '@UI/UIButton';

import styles from './CharactersNavigation.module.css';

const CharactersNavigation = ({
  getResource, prevPage,
  nextPage, counterPage
}) => {

  const handleChangeNext = () => getResource(nextPage);
  const handleChangePrevious = () => getResource(prevPage);

  return (
    <>
      <div className={styles.container}>
        <Link
          to = { `/${ GUIDE_PEOPLE }/?page=${ counterPage - 1 }` }
          className = { styles.buttons }
        >
          <UIButton
            text = 'Previous'
            onClick = { handleChangePrevious }
            disabled = { !prevPage }
          />
        </Link>
        <Link
          to = { `/${ GUIDE_PEOPLE }/?page=${ counterPage + 1 }` }
          className = { styles.buttons }
        >
          <UIButton
            text = 'Next'
            onClick = { handleChangeNext }
            disabled = { !nextPage }
          />
        </Link> 
      </div>
    </>
  )
}

CharactersNavigation.propTypes = {
  getResource: PropTypes.func,
  prevPage: PropTypes.string,
  nextPage: PropTypes.string,
  counterPage: PropTypes.number
}

export default CharactersNavigation;