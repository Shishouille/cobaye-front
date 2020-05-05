// Import Redux
import { connect } from 'react-redux';

// Import Actions

// Import Component
import ProfilePage from 'src/components/Profile/Home';

const mapStateToProps = (state) => ({
  // Values
  isScientist: state.ses.isScientist,
});

const mapDispatchToProps = (dispatch) => ({
});

const ProfilePageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfilePage);

export default ProfilePageContainer;