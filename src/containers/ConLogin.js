import Login from '../pages/Login';
import * as LoginActions from '../actions/login';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


const mapStateToProps = (state) => ({
  isFetching:state.login.isFetching,
  user:state.login.user,
  error:state.login.error,
  message:state.login.message
})

const mapDispatchToProps = (dispatch) => ({
  actions:bindActionCreators(LoginActions,dispatch)
})

const ConLogin = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Login)

export default ConLogin;
