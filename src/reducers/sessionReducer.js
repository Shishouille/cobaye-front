// Import action.type
import { GET_TOKEN, GET_USER_DATA, SIGN_OUT } from 'src/actions/user';

// Initial State
const initialState = {
  // Sign In related
  token: null,
  userId: null,

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
        token: action.token,
        userId: action.userId,
      };
    case GET_USER_DATA:
      return {
        ...state,
        isScientist: action.data.role.name === 'scientist',
        userData: action.data,
      };
    case SIGN_OUT:
      return {
        ...state,
        token: null,
        userId: null,
        isConnected: false,
      };
    default:
      return state;
  }
};

export default sessionReducer;
