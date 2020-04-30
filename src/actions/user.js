export const GET_TOKEN = 'GET_TOKEN';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
export const SIGN_OUT = 'SIGN_OUT';

export const LOAD_USER_DATA = 'LOAD_USER_DATA';
export const GET_USER_DATA = 'GET_USER_DATA';

export const SAVE_FORM = 'SAVE_FORM';
export const CLEAR_FORM = 'CLEAR_FORM';

export const LOAD_SELECTION_DATA = 'LOAD_SELECTION_DATA';
export const GET_SELECTION_DATA = 'GET_SELECTION_DATA';

export const getToken = (token, userId) => ({
  type: GET_TOKEN,
  token,
  userId,
});

export const loadUserData = (token) => ({
  type: LOAD_USER_DATA,
  token,
});

export const getUserData = (data) => ({
  type: GET_USER_DATA,
  data,
});

export const signIn = () => ({
  type: SIGN_IN,
});

export const signUp = () => ({
  type: SIGN_UP,
});

export const signOut = () => ({
  type: SIGN_OUT,
});

export const loadSelectionData = () => ({
  type: LOAD_SELECTION_DATA,
});

export const getSelectionData = (data) => ({
  type: GET_SELECTION_DATA,
  data,
});


export const saveForm = (data) => ({
  type: SAVE_FORM,
  data,
});


export const clearForm = () => ({
  type: CLEAR_FORM,
});