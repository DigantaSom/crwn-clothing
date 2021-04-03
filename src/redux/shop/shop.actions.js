import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils';
import ShopActionTypes from './shop.types';

const {
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_FAILURE,
} = ShopActionTypes;

export const fetchCollectionsStart = () => ({
  type: FETCH_COLLECTIONS_START,
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = errorMessage => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');

    dispatch(fetchCollectionsStart());

    // Promise pattern (one-off API calls)
    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
};

/* Note: other alternatives to the above Promise pattern are ->

- Observables + Observer pattern (live update stream style because of 'onSnapshot'):
    const unsubscribeFromSnapshot = collectionRef.onSnapshot(snapshot => {
      // console.log(snapshot);
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      // console.log(collectionsMap);
      updateCollections(collectionsMap);
      setLoading(false);
    });
    return unsubscribeFromSnapshot;

- Using native fetch API:
    fetch(
      'https://firestore.googleapis.com/v1/projects/crwn-db-44785/databases/(default)/documents/collections'
    )
      .then(response => response.json())
      .then(collections => console.log(collections));
*/
