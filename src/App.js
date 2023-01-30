import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './components/Main';

import { BrowserRouter } from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <BrowserRouter basename='/'> {/* basename='/portfolio' */}
      <React.Fragment>
        <Main />
      </React.Fragment>
    </BrowserRouter>
  );
} 

export default App;
