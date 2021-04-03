import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import {
  selectIsCollectionFetching,
  selectIsCollectionLoaded,
} from '../../redux/shop/shop.selectors';
import CollectionPage from '../collection/collection.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({
  match,
  isCollectionFetching,
  fetchCollectionsStartAsync,
  isCollectionsLoaded,
}) => {
  // useEffect fires after first render of this component,
  // that's why isCollectionLoading is getting false (default from shop reducer) value at first render.
  // Solution: 'selectIsCollectionLoaded' from shop.selectors.js
  useEffect(() => {
    fetchCollectionsStartAsync();
  }, [fetchCollectionsStartAsync]);

  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${match.path}`}
        // below 'props' are the default props which 'Route' passes, i.e., match, history and location.
        render={props => (
          <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={props => (
          <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />
        )}
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  isCollectionFetching: selectIsCollectionFetching,
  isCollectionsLoaded: selectIsCollectionLoaded,
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
