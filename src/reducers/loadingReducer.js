// Import action.type
import { IS_LOADING, IS_NOT_LOADING } from 'src/actions/loading';

// Initial State
const initialState = {
  // Sign In related
  loading: false,
};

const loadingReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case IS_LOADING:
      return {
        loading: true,
      };
    case IS_NOT_LOADING:
      return {
        loading: false,
      };
    default:
      return state;
  }
};

export default loadingReducer;
