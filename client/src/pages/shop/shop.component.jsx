import { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import Spinner from '../../components/spinner/spinner.component';
// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);
// import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
// import CollectionPageContainer from '../collection/collection.container';

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collections-overview/collections-overview.container'),
);
const CollectionPageContainer = lazy(() => import('../collection/collection.container'));

export const ShopPage = ({ match, fetchCollectionsStart }) => {
  // useEffect fires after first render of this component,
  // that's why isCollectionLoading is getting false (default from shop reducer) value at first render.
  // Solution: 'selectIsCollectionLoaded' from shop.selectors.js
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className='shop-page'>
      <Suspense fallback={<Spinner />}>
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
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  // fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
