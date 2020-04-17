// == Import : npm
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

// == Import : local
import { store, persistor } from 'src/store';

// Composants
import App from 'src/components/App';

// == Render
const rootReactElement = (
  <Provider store={store}>
    <Router>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Router>
  </Provider>
);
const target = document.getElementById('root');

render(rootReactElement, target);
