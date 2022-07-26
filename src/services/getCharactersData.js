import {
  SWAPI_PEOPLE, HTTPS, HTTP, SWAPI_ROOT,
  GUIDE_IMG_EXTENSION, URL_IMG_PERSON
} from "@constants/Api";

const getId = (url, category) => {
  if (url.includes(HTTPS)) {
    return url
      .replace(HTTPS + SWAPI_ROOT + category, '')
      .replace(/\//g, '');
  } else {
    return url
      .replace(HTTP + SWAPI_ROOT + category, '')
      .replace(/\//g, '');
  }
}

export const getCharactersId = url => getId(url, SWAPI_PEOPLE);

export const getCharacterImage = id => `${URL_IMG_PERSON}/${id + GUIDE_IMG_EXTENSION}`;