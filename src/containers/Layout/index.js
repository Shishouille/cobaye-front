// Import Redux
import { connect } from 'react-redux';

// Import Actions
import { signOut } from 'src/actions/user';

import { loadPassationTypes, loadGeneralCriterias } from 'src/actions/experience';

// Import Component
import Layout from 'src/components/Layout';

const mapStateToProps = (state) => ({
  // Values
  userName: state.ses.userData,
  isConnected: state.ses.isConnected,
  isScientist: state.ses.isScientist,
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