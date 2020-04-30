export const LOAD_EXPERIENCES = 'LOAD_EXPERIENCES';
export const GET_EXPERIENCES = 'GET_EXPERIENCES';

export const LOAD_FILTERED_EXPERIENCES = 'LOAD_FILTERED_EXPERIENCES';
export const GET_FILTERED_EXPERIENCES = 'GET_FILTERED_EXPERIENCES';

export const LOAD_CURRENT_EXPERIENCE = 'LOAD_CURRENT_EXPERIENCE';
export const GET_CURRENT_EXPERIENCE = 'GET_CURRENT_EXPERIENCE';

export const LOAD_PASSATION_TYPES = 'LOAD_CURRENT_EXPERIENCE';
export const GET_PASSATION_TYPES = 'GET_CURRENT_EXPERIENCE';

export const LOAD_GENERAL_CRITERIAS = 'LOAD_GENERAL_CRITERIAS';
export const GET_GENERAL_CRITERIAS = 'GET_GENERAL_CRITERIAS';

export const CREATE_EXPERIENCE = 'CREATE_EXPERIENCE';
export const UPDATE_EXPERIENCE = 'UPDATE_EXPERIENCE';
export const DELETE_EXPERIENCE = 'DELETE_EXPERIENCE';

export const SAVE_FORM = 'SAVE_FORM';
export const CLEAR_FORM = 'CLEAR_FORM';

// FORM RELATED

export const saveForm = (form) => ({
  type: SAVE_FORM,
  form,
});

export const clearForm = () => ({
  type: CLEAR_FORM,
});

// AXIOS FETCH
export const loadPassationTypes = () => ({
  type: LOAD_PASSATION_TYPES,
});

export const loadExperiences = () => ({
  type: LOAD_EXPERIENCES,
});

export const loadCurrentExperience = () => ({
  type: LOAD_CURRENT_EXPERIENCE,
});

export const loadGeneralCriterias = () => ({
  type: LOAD_GENERAL_CRITERIAS,
});


// PAYLOAD
export const getExperiences = (data) => ({
  type: GET_EXPERIENCES,
  data,
});

export const getCurrentExperience = (data) => ({
  type: GET_CURRENT_EXPERIENCE,
  data,
});

export const getFilteredExperiences = (data) => ({
  type: GET_FILTERED_EXPERIENCES,
  data,
});

export const getPassationTypes = (data) => ({
  type: GET_PASSATION_TYPES,
  data,
});

export const getGeneralCriterias = (data) => ({
  type: GET_GENERAL_CRITERIAS,
  data,
});