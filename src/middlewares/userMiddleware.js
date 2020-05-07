// Import axios if required
import axios from 'axios';

// Import Actions TYPES / DISPATCH
import { isLoading, isNotLoading } from 'src/actions/loading';

import {
  SIGN_UP,
  SIGN_IN,
  LOAD_SELECTION_DATA,
  LOAD_USER_DATA,
  clearForm,
  getSelectionData,
  getUserData,
  getToken,
  loadUserData,
} from '../actions/user';

import {
  loadPassationTypes,
  loadGeneralCriterias,
} from 'src/actions/experience';



const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_SELECTION_DATA:
      store.dispatch(isLoading());
      axios.get('http://localhost:3000/all/signup')
        .then((response) => {
          store.dispatch(getSelectionData(response.data));
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          store.dispatch(isNotLoading());
        });

      next(action);
      break;

    case SIGN_UP:
      store.dispatch(isLoading());
      axios.put('http://localhost:3000/users/signup', {
        firstName: store.getState().user.formData.firstName,
        lastName: store.getState().user.formData.lastName,
        email: store.getState().user.formData.email,
        password: store.getState().user.formData.password,
        birthday: new Date(store.getState().user.formData.birthday),
        gender: store.getState().user.formData.gender,
        nsc: store.getState().user.formData.nsc,
        profession: store.getState().user.formData.profession,
        domain: store.getState().user.formData.domain,
        university: store.getState().user.formData.university,
        role: store.getState().user.formData.role,
      })
        .then((response) => {
          store.dispatch(clearForm());
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          store.dispatch(isNotLoading());
        });

      next(action);
      break;

    case SIGN_IN:
      store.dispatch(isLoading());
      axios.post('http://localhost:3000/users/signin', {
        email: store.getState().user.formData.email,
        password: store.getState().user.formData.password,
      })
        .then((response) => {
          store.dispatch(getToken(response.data));
        })
        .then(() => {
          store.dispatch(loadUserData(store.getState().ses.session.token))
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          store.dispatch(isNotLoading());
        });

      next(action);
      break;

    case LOAD_USER_DATA:
      store.dispatch(isLoading());
      axios({
        method: 'get',
        url: 'http://localhost:3000/users/signin',
        headers: {
          Authorization: `Bearer ${action.token}`,
        },
      })
        .then((response) => {
          console.log(response.data);
          store.dispatch(getUserData(response.data));
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          store.dispatch(isNotLoading());
        });

      next(action);
      break;
    default:
      next(action);
  }
};

export default userMiddleware;
