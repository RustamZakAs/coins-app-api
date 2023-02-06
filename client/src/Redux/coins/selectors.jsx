export const getCatalogSelector = store => store.catalogReducer.catalog;
export const getImagesSelector = store => store.catalogReducer.images;

export const getEmptyImageSelector = store => store.catalogReducer.emptyImage;

export const getCategoriesSelector = store => store.catalogReducer.categories;
export const getCompositionsSelector = store => store.catalogReducer.compositions;
export const getTypesOfQualitySelector = store => store.catalogReducer.typesofquality;
export const getCountriesSelector = store => store.catalogReducer.countries;

export const getAvtorizedSelector = store => store.catalogReducer.avtorized;

export const getCategoriesImagesSelector = store => store.catalogReducer.categoriesImages;

export const getCoinSelector = (store, id) => createSelector(postSelector, store => store.catalogReducer.catalog.filter(x => x.id === id))