import { CustomButtonContainer } from './custom-button.styles';
// import './custom-button.styles.scss';

const CustomButton = ({ children, ...otherProps }) => (
  // <button
  //   className={`${inverted ? 'inverted' : ''}
  //   ${isGoogleSignIn ? 'google-sign-in' : ''}
  //   custom-button`}
  //   {...otherProps}>
  //   {children}
  // </button>
  // below className is for collection-item.styles.scss
  <CustomButtonContainer {...otherProps} className='custom-button'>
    {children}
  </CustomButtonContainer>
);

export default CustomButton;
