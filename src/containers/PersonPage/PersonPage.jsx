import PropTypes from 'prop-types';
import React, { useEffect, useState, Suspense } from 'react';
import { useParams } from 'react-router';

import PersonInfo from '@components/Person/PersonInfo';
import PersonPhoto from '@components/Person/PersonPhoto';
import PersonLinkBack from '@components/Person/PersonLinkBack';
import UILoading from '@components/UI/UILoading';

import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { API_PERSON } from '@constants/Api';
import { getApiResource } from '@utils/network';
import { getCharacterImage } from '@services/getCharactersData';

import styles from './PersonPage.module.css';

const PersonFilms = React.lazy(() => import('@components/Person/PersonFilms'));

const PersonPage = ({ setErrorApi }) => {
  const { id } = useParams();
  const [personInfo, setPersonInfo] = useState(null);
  const [personName, setPersonName] = useState(null);
  const [personPhoto, setPersonPhono] = useState(null);
  const [personFilms, setPersonFilms] = useState(null);

  useEffect(() => {
    
    (async () => {
      const res = await getApiResource(`${API_PERSON}/${id}/`);

      if (res) {
        setPersonInfo([
          { title: 'Height', data: res.height },
          { title: 'Mass', data: res.mass },
          { title: 'Skin color', data: res.skin_color },
          { title: 'Hair color', data: res.hair_color },
          { title: 'Eye color', data: res.eye_color },
          { title: 'Birth year', data: res.birth_year },
          { title: 'Gender', data: res.gender }
        ])

        setPersonName(res.name);
        setPersonPhono(getCharacterImage(id));

        res.films.length && setPersonFilms(res.films);
        
        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);

  return (
    <>
      <PersonLinkBack />

      <div className = { styles.wrapper }>
        <span className = { styles.person__name }>{ personName }</span>
        <div className = { styles.container }>
          <PersonPhoto 
              personPhoto = { personPhoto }
              personName = { personName }
            />
          { personInfo && <PersonInfo personInfo = { personInfo } /> }

          { personFilms && (
            <Suspense fallback = {<UILoading /> }>
              <PersonFilms personFilms = { personFilms } />
            </Suspense>
          ) }
        </div>
      </div>
    </>
  )
}

PersonPage.propTypes = {
  setErrorApi: PropTypes.func
}

export default withErrorApi(PersonPage);