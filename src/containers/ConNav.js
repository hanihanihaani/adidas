import Nav from '../components/Nav';
import * as navActions from '../actions/nav';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  username:state.username
}) 

const mapDispatchToProps = (dispatch) => ({
  actions:bindActionCreators(navActions,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Nav);