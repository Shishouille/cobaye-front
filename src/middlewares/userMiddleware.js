// Import axios if required
import axios from 'axios';

// Import Actions TYPES

// Import Actions DISPATCH

const userMiddleware = (store) => (next) => (action) => {

  switch (action.type) {
    // case LOAD_USER_PROFILE:
    //   axios({
    //     method: 'get',
    //     url: 'http://3.82.172.77/self',
    //     headers: {
    //       Authorization: `Bearer ${token}`,
    //     },
    //   })
    //     .then((response) => {
    //       ...
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });

    //   next(action);
    //   break;

    // case SIGN_UP:
    //   axios.post('http://3.82.172.77/users', {
    //      DATA
    //   })
    //     .then((response) => {
    //        ...
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });

    //   next(action);
    //   break;

    // case SIGN_IN:
    //   axios.post('http://3.82.172.77/users', {
    //      DATA
    //   })
    //     .then((response) => {
    //        ...
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });

    //   next(action);
    //   break;
    default:
      next(action);
  }
};

export default userMiddleware;
