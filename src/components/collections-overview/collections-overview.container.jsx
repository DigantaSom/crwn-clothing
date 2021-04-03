// This component exists because our shop.component.js just gets the 'selectIsCollectionFetching' selector and passes to collections-overview component, and does nothing else with this selector.
// So we removed that useless work and use this 'Container pattern'.

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';
import WithSpinner from '../with-spinner/with-spinner.component';
import CollectionsOverview from './collections-overview.component';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching, // 'isLoading' should match with WithSpinner's prop name
});

// const CollectionsOverviewContainer = connect(mapStateToProps)(
//   WithSpinner(CollectionsOverview)
// );

// same as above but more readable
const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;

// Note: Containers don't render anything. They just pass props down to components.
