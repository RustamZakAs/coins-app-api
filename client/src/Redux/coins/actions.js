import { ADD_COIN,
         SET_CATALOG,
         SET_AVTORIZED,
         SET_COUNTRIES,
         SET_CATEGORIES,
         SET_COMPOSITIONS,
         SET_TYPESOFQUALITY, 
         SET_CATEGORIES_IMAGES,
         SET_IMAGES,
         GET_IMAGE,
        } from '../constants';

export const addCoinAction = (coin) => ({
  type: ADD_COIN,
  payload: coin,
});
export const setCountriesAction = (countries) => ({
  type: SET_COUNTRIES,
  payload: countries,
});
export const setCategoriesAction = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});
export const setCompositionsAction = (compositions) => ({
  type: SET_COMPOSITIONS,
  payload: compositions,
});
export const setTypesOfQualityAction = (typesofquality) => ({
  type: SET_TYPESOFQUALITY,
  payload: typesofquality,
});
export const setAvtorizedAction = (avtorized) => ({
  type: SET_AVTORIZED,
  payload: avtorized,
});
export const setCategoriesImagesAction = (images) => ({
  type: SET_CATEGORIES_IMAGES,
  payload: images,
});
export const setCatalogAction = (catalog) => ({
  type: SET_CATALOG,
  payload: catalog,
});
export const setImagesAction = (images) => ({
  type: SET_IMAGES,
  payload: images,
});
export const getImageAction = (catalogId) => ({
  type: GET_IMAGE,
  payload: catalogId,
});
export const getCoinAction = (id) => ({
  type: GET_COIN,
  payload: id,
});