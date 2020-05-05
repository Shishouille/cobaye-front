// Import axios if required
import axios from 'axios';


// Import Actions TYPES / DISPATCH
import { isLoading, isNotLoading } from 'src/actions/loading';

import {
  LOAD_EXPERIENCES,
  LOAD_PASSATION_TYPES,
  LOAD_CURRENT_EXPERIENCE,
  CREATE_EXPERIENCE,
  UPDATE_EXPERIENCE,
  DELETE_EXPERIENCE,
  LOAD_FILTERED_EXPERIENCES,
  LOAD_GENERAL_CRITERIAS,
  getCurrentExperience,
  getExperiences,
  getFilteredExperiences,
  getPassationTypes,
  getGeneralCriterias,
} from '../actions/experience';

const experienceMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case LOAD_PASSATION_TYPES:
      store.dispatch(isLoading());
      axios({
        method: 'get',
        url: 'http://localhost:3000/passations',
        headers: {
          Authorization: `Bearer ${action.token}`,
        },
      })
        .then((response) => {
          store.dispatch(getPassationTypes(response.data));
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          store.dispatch(isNotLoading());
        });

      next(action);
      break;
    case LOAD_GENERAL_CRITERIAS:
      store.dispatch(isLoading());
      axios({
        method: 'get',
        url: 'http://localhost:3000/general/criterias',
        headers: {
          Authorization: `Bearer ${action.token}`,
        },
      })
        .then((response) => {
          store.dispatch(getGeneralCriterias(response.data));
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          store.dispatch(isNotLoading());
        });

      next(action);
      break;
    case LOAD_EXPERIENCES:
      store.dispatch(isLoading());
      axios.get('http://localhost:3000/experiences/')
        .then((response) => {
          store.dispatch(getExperiences(response.data));
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          store.dispatch(isNotLoading());
        });

      next(action);
      break;

    case LOAD_CURRENT_EXPERIENCE:
      store.dispatch(isLoading());
      axios.get(`http://localhost:3000/experiences/${action.slug}`)
        .then((response) => {
          store.dispatch(getCurrentExperience(response.data));
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          store.dispatch(isNotLoading());
        });

      next(action);
      break;

    case LOAD_FILTERED_EXPERIENCES:
      store.dispatch(isLoading());
      axios({
        method: 'get',
        url: `http://localhost:3000/experiences/${store.getState().ses.token}`,
        headers: {
          Authorization: `Bearer ${store.getState().ses.token}`,
        },
      })
        .then((response) => {
          store.dispatch(getFilteredExperiences(response.data));
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          store.dispatch(isNotLoading());
        });

      next(action);
      break;

    case CREATE_EXPERIENCE:
      store.dispatch(isLoading());
      axios({
        method: 'post',
        url: 'http://localhost:3000/experiences/',
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
        })
        .finally(() => {
          store.dispatch(isNotLoading());
        });

      next(action);
      break;

    case UPDATE_EXPERIENCE:
      store.dispatch(isLoading());
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
        })
        .finally(() => {
          store.dispatch(isNotLoading());
        });

      next(action);
      break;

    case DELETE_EXPERIENCE:
      store.dispatch(isLoading());
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

export default experienceMiddleware;
