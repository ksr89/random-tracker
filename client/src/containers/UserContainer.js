import { connect } from 'react-redux';
import UserComponent from '../components/User';
import { addUserName } from '../actions';

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUserName: (value) => {
      dispatch(addUserName(value));
    }
  }
};

const UserContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserComponent);

export default UserContainer;
