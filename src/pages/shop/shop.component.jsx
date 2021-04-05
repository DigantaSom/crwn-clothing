import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import CollectionPageContainer from '../collection/collection.container';

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match, fetchCollectionsStart }) => {
  // useEffect fires after first render of this component,
  // that's why isCollectionLoading is getting false (default from shop reducer) value at first render.
  // Solution: 'selectIsCollectionLoaded' from shop.selectors.js
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className='shop-page'>
      {/* <Route
        exact
        path={`${match.path}`}
        // below 'props' are the default props which 'Route' passes, i.e., match, history and location.
        render={props => (
          <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
        )}
      /> */}
      <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
      {/* <Route
        path={`${match.path}/:collectionId`}
        render={props => (
          <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />
        )}
      /> */}
      <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  // fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
