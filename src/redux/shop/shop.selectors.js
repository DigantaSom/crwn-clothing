import memoize from 'lodash.memoize';
import { createSelector } from 'reselect';

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShop = state => state.shop;

export const selectCollections = createSelector([selectShop], shop => shop.collections);

// This selector needs a part of the state depending on the URL parameter. It's used in collection component.
// It's a curried function, i.e., a function that returns another function.
// export const selectCollection = collectionUrlParam =>
//   createSelector([selectCollections], collections =>
//     collections.find(
//       collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
//     )
//   );

// Memoize does the same idea of memoization as reselect does for our selectors, except this time we're memoizing the return of our function which returns our selector:
export const selectCollection = memoize(collectionUrlParam =>
  createSelector([selectCollections], collections =>
    collections.find(
      collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  )
);
// By wrapping this function in memoize, we're saying that whenever this function gets called and receives collectionUrlParam, I want to memoize the return of this function (in this case we return a selector). If this function gets called again with the same collectionUrlParam, don't rerun this function because we'll return the same value as last time, which we've memoized so just return the selector that's been stored.
