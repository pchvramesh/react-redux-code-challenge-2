import { connect } from 'react-redux';
import HomePage from 'components/HomePage';
import actions from 'store/features/clickCounter/actions'

const mapDispatchToProps = dispatch => ({
    createUser: () => dispatch(actions.createUser()),
    createCompany: () => dispatch(actions.createCompany())
});

export default connect(null, mapDispatchToProps)(HomePage);

