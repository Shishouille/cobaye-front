// Import Redux
import { connect } from 'react-redux';

// Import Actions
import {
  createExperience,
  saveForm,
} from 'src/actions/experience';

// Import Component
import ExperienceCreation from 'src/components/Experience/Creation/ExperienceCreation';

const mapStateToProps = (state) => ({
  // Values
  passationsTypes: state.exp.passationsTypes,
  generalCriterias: state.exp.generalCriterias,
  form: state.exp.form,
});

const mapDispatchToProps = (dispatch) => ({
  // Axios Call
  createExperience: () => {
    dispatch(createExperience());
  },

  saveForm: (data) => {
    dispatch(saveForm(data));
  },
});

const ExperienceCreationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExperienceCreation);

export default ExperienceCreationContainer;
