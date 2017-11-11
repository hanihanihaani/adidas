import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SignUp from '../pages/SignUp';
import {signupSubmit} from '../actions/signup';

const mapStateToProps = (state) => ({
  isFetching:state.signup.isFetching,
  error:state.signup.error
})

const mapDispatchToProps = (dispatch) => ({
  signup:bindActionCreators(signupSubmit,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);