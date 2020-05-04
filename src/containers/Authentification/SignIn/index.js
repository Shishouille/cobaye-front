// SIGNIN CONTAINER - SIGNIN FORM

// Import Redux
import { connect } from 'react-redux';

// Import Actions
import { signIn, saveForm } from 'src/actions/user';

// Import Component
import SignIn from 'src/components/Authentification/SignIn';

const mapStateToProps = (state) => ({
  // Values
  formData: state.user.formData,
});

const mapDispatchToProps = (dispatch) => ({
  // Axios Call
  signIn: () => {
    dispatch(signIn());
  },

  saveForm: (data) => {
    dispatch(saveForm(data));
  },
});

const SignInContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn);

export default SignInContainer;