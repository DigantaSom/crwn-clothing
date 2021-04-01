import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match, updateCollections }) => {
  useEffect(() => {
    const unsubscribe = () => {
      const collectionRef = firestore.collection('collections');
      collectionRef.onSnapshot(snapshot => {
        // console.log(snapshot);
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        // console.log(collectionsMap);
        updateCollections(collectionsMap);
      });
    };
    return unsubscribe;
  }, [updateCollections]);

  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
