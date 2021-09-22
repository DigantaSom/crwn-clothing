import { Profiler } from 'react';

import Directory from '../../components/directory/directory.component';

// import './homepage.styles.scss';
import { HomePageContainer } from './homepage.styles';

const HomePage = () => {
  // throw Error; // (manually threw error to test ErrorBoundary component)
  return (
    <HomePageContainer>
      <Profiler
        id='Directory'
        onRender={(id, phase, actualDuration) => {
          console.log({
            id,
            phase,
            actualDuration,
          });
        }}>
        <Directory />
      </Profiler>
    </HomePageContainer>
  );
};

export default HomePage;
