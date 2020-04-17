import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';

// Import Middleware

// Import Main Middleware
import reducer from 'src/reducers';


// Enhancers
const enhancers = composeWithDevTools(
  applyMiddleware(
  ),
);

// Store
export const store = createStore(
  // reducer
  reducer,
  // enhancer
  enhancers,
);

export const persistor = persistStore(store);

export default { store, persistor };