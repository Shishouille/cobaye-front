// SIGNIN CONTAINER - SIGNIN FORM

// Import Redux
import { connect } from 'react-redux';

// Import Actions

// Import Component
import App from 'src/components/App';

const mapStateToProps = (state) => ({
  // Values
  loading: state.l.loading,
});

const mapDispatchToProps = (dispatch) => ({});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;