// SIGNIN CONTAINER - SIGNIN FORM

// Import Redux
import { connect } from 'react-redux';

// Import Actions
import { signUp, saveForm } from 'src/actions/user';

// Import Component
import SignUpCobaye from 'src/components/Authentification/SignUp';

const mapStateToProps = (state) => ({
  // Values
  formData: state.user.formData,
  selectionData: state.user.selectionData,
  loading: state.l.loading,
});

const mapDispatchToProps = (dispatch) => ({
  // Axios Call
  signUp: () => {
    dispatch(signUp());
  },

  saveForm: (data) => {
    dispatch(saveForm(data));
  },
});

const SignUpCobayeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUpCobaye);

export default SignUpCobayeContainer;