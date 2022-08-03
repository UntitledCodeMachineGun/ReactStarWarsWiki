//common
export const HTTPS = 'https://';
export const HTTP = 'http://';

//swapi
export const SWAPI_ROOT = 'swapi.dev/api/';
export const SWAPI_PARAM_PAGE = '/?page=';

//swapi categories
export const SWAPI_PEOPLE = 'people';

//full path
export const API_PEOPLE = HTTPS + SWAPI_ROOT + SWAPI_PEOPLE + SWAPI_PARAM_PAGE;
export const API_PERSON = HTTPS + SWAPI_ROOT + SWAPI_PEOPLE;

//images
const GUIDE_ROOT_IMG = 'https://starwars-visualguide.com/assets/img/';

//images categories
export const GUIDE_PEOPLE = 'characters';

//extensions
export const GUIDE_IMG_EXTENSION = '.jpg';

//images full path
export const URL_IMG_PERSON = GUIDE_ROOT_IMG + GUIDE_PEOPLE;