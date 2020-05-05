// Import Redux
import { connect } from 'react-redux';

// Import Actions
import { loadPassationTypes, loadGeneralCriterias, saveForm } from 'src/actions/experience';

// Import Component
import ExperienceEdit from 'src/components/Experience/Edit/ExperienceEdit';

const mapStateToProps = (state) => ({
  // Values
  passationsTypes: state.exp.passationsTypes,
  generalCriterias: state.exp.generalCriterias,
});

const mapDispatchToProps = (dispatch) => ({
  // Axios Call
  loadPassationTypes: () => {
    dispatch(loadPassationTypes());
  },
  loadGeneralCriterias: () => {
    dispatch(loadGeneralCriterias());
  },

  saveForm: (data) => {
    dispatch(saveForm(data));
  },
});

const ExperienceEditContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExperienceEdit);

export default ExperienceEditContainer;