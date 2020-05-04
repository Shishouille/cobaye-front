// Import action.type
import { GET_TOKEN, GET_USER_DATA, SIGN_OUT } from 'src/actions/user';

// Initial State
const initialState = {
  // Sign In related
  session: {},

  // Condtionnal State
  isConnected: false,
  isScientist: false,

  // Data
  userData: {},
};

const sessionReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_TOKEN:
      return {
        ...state,
        session: action.token,
      };
    case GET_USER_DATA:
      return {
        ...state,
        isScientist: action.data.user.role.name === 'Scientifique',
        userData: action.data,
        isConnected: true,
      };
    case SIGN_OUT:
      return {
        ...state,
        session: {},
        userData: {},
        isConnected: false,
      };
    default:
      return state;
  }
};

export default sessionReducer;
