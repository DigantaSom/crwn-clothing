import Directory from '../../components/directory/directory.component';
import { HomePageContainer } from './homepage.styles';
// import './homepage.styles.scss';

const HomePage = () => {
  // throw Error; // (manually threw error to test ErrorBoundary component)
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
