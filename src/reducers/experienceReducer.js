// Import action.type

import {
  SAVE_FORM, CLEAR_FORM, GET_EXPERIENCES, GET_CURRENT_EXPERIENCE, GET_FILTERED_EXPERIENCES, GET_PASSATION_TYPES, GET_GENERAL_CRITERIAS,
} from '../actions/experience';

// Initial State
const initialState = {
  form: {},
  experiences: [],
  currentExperience: {},
  passationsTypes: [],
  generalCriterias: [],
};

const experienceReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_FORM:
      return {
        ...state,
        form: action.form,
      };

    case CLEAR_FORM:
      return {
        ...state,
        form: {},
      };

    case GET_EXPERIENCES:
      return {
        ...state,
        experiences: action.data,
      };
    case GET_FILTERED_EXPERIENCES:
      return {
        ...state,
        experiences: action.data,
      };
    case GET_CURRENT_EXPERIENCE:
      return {
        ...state,
        currentExperience: action.data,
      };
    case GET_PASSATION_TYPES:
      return {
        ...state,
        passationsTypes: action.data,
      };
    case GET_GENERAL_CRITERIAS:
      return {
        ...state,
        generalCriterias: action.data,
      };
    default:
      return state;
  }
};

export default experienceReducer;
