import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';

// Import Middleware
import userMiddleware from 'src/middlewares/userMiddleware';
import experienceMiddleware from 'src/middlewares/experienceMiddleware';
// Import Main Middleware
import reducer from 'src/reducers';


// Enhancers
const enhancers = composeWithDevTools(
  applyMiddleware(
    userMiddleware,
    experienceMiddleware,
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