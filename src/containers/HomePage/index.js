// Import Redux
import { connect } from 'react-redux';

// Import Actions
import { signOut } from 'src/actions/user';

// Import Component
import HomePage from 'src/components/HomePage';

const mapStateToProps = (state) => ({
  // Values
  isConnected: state.ses.isConnected,
});

const mapDispatchToProps = (dispatch) => ({
  // Axios Call
  signOut: () => {
    dispatch(signOut());
  },
});

const HomePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);

export default HomePageContainer;