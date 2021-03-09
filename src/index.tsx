import React from 'react';
import {Navigator} from './navigator/index';
import {AppProvider} from './context';

const App = () => {
  return (
    <AppProvider>
      <Navigator />
    </AppProvider>
  );
};

export default App;
