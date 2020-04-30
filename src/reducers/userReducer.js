// Import action.type

import { SAVE_FORM, CLEAR_FORM, GET_SELECTION_DATA } from '../actions/user';

// Initial State
const initialState = {
  // InputRelated
  formData: {},
  selectionData: {},
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_SELECTION_DATA:
      return {
        ...state,
        selectionData: action.data,
      };
    case SAVE_FORM:
      return {
        ...state,
        formData: action.data,
      };
    case CLEAR_FORM:
      return {
        ...state,
        formData: {},
      };
    default:
      return state;
  }
};

export default userReducer;
