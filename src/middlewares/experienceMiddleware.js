// Import axios if required
import axios from 'axios';


// Import Actions TYPES / DISPATCH
import {
  LOAD_EXPERIENCES, LOAD_PASSATION_TYPES, LOAD_CURRENT_EXPERIENCE, CREATE_EXPERIENCE, UPDATE_EXPERIENCE, DELETE_EXPERIENCE, getCurrentExperience, getExperiences, LOAD_FILTERED_EXPERIENCES, getFilteredExperiences, getPassationTypes, getGeneralCriterias, LOAD_GENERAL_CRITERIAS,
} from '../actions/experience';

const experienceMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_PASSATION_TYPES:
      axios({
        method: 'get',
        url: 'http://localhost:3000/self',
        headers: {
          Authorization: `Bearer ${action.token}`,
        },
      })
        .then((response) => {
          store.dispatch(getPassationTypes(response.data));
        })
        .catch((error) => {
          console.error(error);
        });

      next(action);
      break;
    case LOAD_GENERAL_CRITERIAS:
      axios({
        method: 'get',
        url: 'http://localhost:3000/self',
        headers: {
          Authorization: `Bearer ${action.token}`,
        },
      })
        .then((response) => {
          store.dispatch(getGeneralCriterias(response.data));
        })
        .catch((error) => {
          console.error(error);
        });

      next(action);
      break;
    case LOAD_EXPERIENCES:
      axios.get('http://localhost:3000/infos')
        .then((response) => {
          store.dispatch(getExperiences(response.data));
        })
        .catch((error) => {
          console.error(error);
        });

      next(action);
      break;

    case LOAD_CURRENT_EXPERIENCE:
      axios.get('http://localhost:3000/infos')
        .then((response) => {
          store.dispatch(getCurrentExperience(response.data));
        })
        .catch((error) => {
          console.error(error);
        });

      next(action);
      break;

    case LOAD_FILTERED_EXPERIENCES:
      axios({
        method: 'get',
        url: 'http://localhost:3000/infos',
        headers: {
          Authorization: `Bearer ${store.getState().ses.token}`,
        },
      })
        .then((response) => {
          store.dispatch(getFilteredExperiences(response.data));
        })
        .catch((error) => {
          console.error(error);
        });

      next(action);
      break;

    case CREATE_EXPERIENCE:
      axios({
        method: 'post',
        url: 'http://localhost:3000/infos',
        headers: {
          Authorization: `Bearer ${store.getState().ses.token}`,
        },
        data: {
          name: store.getState().exp.form.name,
          description: store.getState().exp.form.description,
          tags: store.getState().exp.form.tags,
          criterias: store.getState().exp.form.criterias,
          passation: store.getState().exp.form.passation,
          questionnaryLink: store.getState().exp.form.questionnaryLink,
          time: store.getState().exp.form.time,
          steps: store.getState().exp.form.steps,
          fromDate: store.getState().exp.form.fromDate,
          toDate: store.getState().exp.form.toDate,
        },
      })
        .then((response) => {
          store.dispatch(clearForm());
        })
        .catch((error) => {
          console.error(error);
        });

      next(action);
      break;

    case UPDATE_EXPERIENCE:
      axios({
        method: 'put',
        url: 'http://localhost:3000/infos',
        headers: {
          Authorization: `Bearer ${store.getState().ses.token}`,
        },
        data: {
          name: store.getState().exp.form.name,
          description: store.getState().exp.form.description,
          tags: store.getState().exp.form.tags,
          criterias: store.getState().exp.form.criterias,
          passation: store.getState().exp.form.passation,
          questionnaryLink: store.getState().exp.form.questionnaryLink,
          time: store.getState().exp.form.time,
          steps: store.getState().exp.form.steps,
          fromDate: store.getState().exp.form.fromDate,
          toDate: store.getState().exp.form.toDate,
        },
      })
        .then((response) => {
          store.dispatch(clearForm());
        })
        .catch((error) => {
          console.error(error);
        });

      next(action);
      break;

    case DELETE_EXPERIENCE:
      axios({
        method: 'delete',
        url: 'http://localhost:3000/infos',
        headers: {
          Authorization: `Bearer ${store.getState().ses.token}`,
        },
      })
        .then((response) => {
          console.log(response);
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

export default experienceMiddleware;
