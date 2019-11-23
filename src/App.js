import React from 'react';
import './App.css';
import Container from './Components/Container'; 

import { Provider } from 'react-redux'
import configureStore from './store';

function App() {
  return (
    <div className="App">
      <Provider store={configureStore()}>
        <Container/>
      </Provider>
    </div>
  );
}

export default App;
