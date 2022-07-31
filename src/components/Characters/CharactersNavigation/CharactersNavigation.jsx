import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { GUIDE_PEOPLE } from '@constants/Api'

import styles from './CharactersNavigation.module.css';

const CharactersNavigation = ({
  getResource, prevPage,
  nextPage, counterPage
}) => {

  const handleChangeNext = () => getResource(nextPage);
  const handleChangePrevious = () => getResource(prevPage);

  return (
    <>
      <div>
        <Link
          to = { `/${ GUIDE_PEOPLE }/?page=${ counterPage - 1 }` }
          className = { styles.link }
        >
          <button
          onClick = { handleChangePrevious }
          disabled = { !prevPage }
          className = { styles.buttons }
          >
            Previous
          </button>
        </Link>
        <Link
          to = { `/${ GUIDE_PEOPLE }/?page=${ counterPage + 1 }` }
          className = { styles.link }
        > 
          <button onClick={ handleChangeNext }
          disabled = { !nextPage }
          className = { styles.buttons }
          >
            Next
          </button>
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