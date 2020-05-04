// Import Redux
import { connect } from 'react-redux';

// Import Actions
import { signOut } from 'src/actions/user';

// Import Component
import Layout from 'src/components/Layout';

const mapStateToProps = (state) => ({
  // Values
  userName: state.ses.userData,
  isConnected: state.ses.isConnected,
});

const mapDispatchToProps = (dispatch) => ({
  // Axios Call
  signOut: () => {
    dispatch(signOut());
  },
});

const LayoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Layout);

export default LayoutContainer;