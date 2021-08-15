import Spinner from '../spinner/spinner.component';

// HOC
const WithSpinner =
  WrappedComponent =>
  ({ isLoading, ...otherProps }) =>
    isLoading ? <Spinner /> : <WrappedComponent {...otherProps} />;

export default WithSpinner;
