import React from 'react';
import {Navigator} from './navigator/index';
import {AppProvider} from './context';

const App = () => {
  return (
    <AppProvider>
      <Navigator state={{userToken: null}} />
    </AppProvider>
  );
};

export default App;
