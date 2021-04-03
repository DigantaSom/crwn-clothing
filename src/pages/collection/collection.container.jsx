// This component exists because our shop.component.js just gets the 'selectIsCollectionLoaded' selector and passes to collection page component, and does nothing else with this selector.
// So we removed that useless work and use this 'Container pattern'.

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';
import CollectionPage from './collection.component';

const mapStateToProps = createStructuredSelector({
  // 'isLoading' should match with WithSpinner's prop name
  isLoading: state => !selectIsCollectionLoaded(state),
});

// const CollectionPageContainer = connect(mapStateToProps)(WithSpinner(CollectionPage))

// same as above but more readable
const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;

// Note: Containers don't render anything. They just pass props down to components.
