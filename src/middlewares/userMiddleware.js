// Import axios if required
import axios from 'axios';

// Import Actions TYPES / DISPATCH
import {
  SIGN_UP, SIGN_IN, LOAD_SELECTION_DATA, LOAD_USER_DATA, clearForm, getSelectionData, getUserData, getToken, loadUserData,
} from '../actions/user';

const userMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_SELECTION_DATA:
      axios.get('http://localhost:3000/infos')
        .then((response) => {
          store.dispatch(getSelectionData(response.data));
        })
        .catch((error) => {
          console.error(error);
        });

      next(action);
      break;

    case SIGN_UP:
      axios.post('http://localhost:3000/users', {
        firstname: store.getState().user.form.firstname,
        lastname: store.getState().form.lastname,
        email: store.getState().form.email,
        password: store.getState().form.password,
        birthday: store.getState().form.birthday,
        gender: store.getState().form.gender,
        nsc: store.getState().form.nsc,
        profession: store.getState().form.profession,
        domain: store.getState().form.domain,
        university: store.getState().form.university,
        role: store.getState().form.role,
      })
        .then((response) => {
          store.dispatch(clearForm());
        })
        .catch((error) => {
          console.error(error);
        });

      next(action);
      break;

    case SIGN_IN:
      axios.post('http://localhost:3000/users', {
        email: store.getState().form.email,
        password: store.getState().form.password,
      })
        .then((response) => {
          store.dispatch(getToken(response.data))
            .then(
              store.dispatch(loadUserData(response.data.token)),
            );
        })
        .catch((error) => {
          console.error(error);
        });

      next(action);
      break;

    case LOAD_USER_DATA:
      axios({
        method: 'get',
        url: 'http://localhost:3000/self',
        headers: {
          Authorization: `Bearer ${action.token}`,
        },
      })
        .then((response) => {
          store.dispatch(getUserData(response.data));
        })
        .catch((error) => {
          console.error(error);
        });

      next(action);
      break;
    default:
      next(action);
  }
};

export default userMiddleware;
