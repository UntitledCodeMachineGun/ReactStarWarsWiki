import { HTTP, HTTPS } from "@constants/Api";

/**
  * Changing url from http to https
  * @param {String} url - url for changing
  * @returns {String} - url with https
*/
export const changeHTTP = url => {
  return url ? url.replace(HTTP, HTTPS) : url;
}

/**
 * Sending fetch query
 * @param {String} url - query url 
 * @returns {Promise} - promise with query result
 */
export const getApiResource = async (url) => {
  try{
    const res = await fetch(url);

    if(!res.ok) {
      console.error('Could not fetch.', res.status);
      return false;
    }

    return await res.json();
  } catch(error) {
    console.error('Could not fetch.', error.message);
    return false;
  }
}