import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

import { withErrorApi } from '@hoc-helpers/withErrorApi';
import CharactersList from '@components/Characters/CharactersList/';
import CharactersNavigation from '@components/Characters/CharactersNavigation';
import { getApiResource, changeHTTP } from '@utils/network';
import { getCharactersId, getCharacterImage, getCharacterId} from '@services/getCharactersData';
import { API_PEOPLE } from '@constants/Api';
import { useQueryParams } from '@hooks/useQueryParams';

import styles from './Characters.module.css';

const Characters = ({ setErrorApi }) => {
  const [characters, setCharacters] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  const [counterPage, setCounterPage] = useState(1);

  const query = useQueryParams();
  const queryPage = query.get('page');

  const getResource = async (url) => {
    const res = await getApiResource(url);

    if (res) {
      const characterList = res.results.map(({ name, url })=> {
        const id = getCharactersId(url);
        const img = getCharacterImage(id);
  
        return { id, name, url, img }
      });

      setCharacters(characterList);
      setPrevPage(changeHTTP(res.previous));
      setNextPage(changeHTTP(res.next));
      setCounterPage(getCharacterId(url));
      //setCounterPage(Number(queryPage)); works too
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  }

  useEffect(() => {
    getResource(API_PEOPLE + queryPage);
  }, [queryPage]);

  return (
    <>
      <CharactersNavigation
        getResource = { getResource }
        prevPage = { prevPage }
        nextPage = { nextPage }
        counterPage = { counterPage }
      />
      { characters && <CharactersList characters = { characters } /> }
    </>
  )
}

Characters.propTypes = {
  setErrorApi: PropTypes.func
}

export default withErrorApi(Characters);