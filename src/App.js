import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store'

import Parent from './components/ParentComponent'
import Snackbeer from './components/Snackbeer'

const App = () => {  

  return (
    <Provider store={store}>               
        <Parent />      
      <Snackbeer />      
    </Provider>     
  );
}

export default App;



