import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

export const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;

  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <div className='name'>{name}</div>
        <div className='price'>{price}</div>
      </div>
      <CustomButton id='add-button' onClick={() => addItem(item)} inverted>
        Add to Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
