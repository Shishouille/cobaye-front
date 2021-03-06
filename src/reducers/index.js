import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Import Reducers
// import universityReducer from 'src/reducers/universityReducer';
import experienceReducer from 'src/reducers/experienceReducer';
import userReducer from 'src/reducers/userReducer';
import sessionReducer from 'src/reducers/sessionReducer';
import loadingReducer from 'src/reducers/loadingReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['ses'],
};

const mainReducer = combineReducers({
  ses: sessionReducer,
  user: userReducer,
  exp: experienceReducer,
  l: loadingReducer,
});

export default persistReducer(persistConfig, mainReducer);