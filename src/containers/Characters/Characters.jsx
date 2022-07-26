import { useEffect, useState } from 'react';

import { withErrorApi } from '../../hoc-helpers/withErrorApi';
import { getApiResource } from '../../utils/network';
import { API_PEOPLE } from '../../constants/Api';
import { getCharactersId, getCharacterImage } from '../../services/getCharactersData';
import CharactersList from '../../components/Characters/CharactersList/CharactersList';

import styles from './Characters.module.css';

const Characters = ({ setErrorApi }) => {
  const [characters, setCharacters] = useState(null);


  const getResource = async (url) => {
    const res = await getApiResource(url);

    if (res) {
      const characterList = res.results.map(({ name, url })=> {
        const id = getCharactersId(url);
        const img = getCharacterImage(id);
  
        return { id, name, url, img }
      });

      setCharacters(characterList);
      setErrorApi(false);
    } else {
      setErrorApi(true);
    }
  }

  useEffect(() => {
    getResource(API_PEOPLE);
  }, []);

  return (
    <>
      <h1>Navigation</h1>
      { characters && <CharactersList characters = {characters} /> }
    </>
  )
}

export default withErrorApi(Characters);