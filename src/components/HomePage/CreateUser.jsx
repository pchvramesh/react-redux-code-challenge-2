import React, {Component} from 'react';
import PropTypes from 'prop-types';

import actions from '../../store/features/clickCounter/actions'
import {connect} from "react-redux";

const propTypes = {
    createUser: PropTypes.func.isRequired,
    companies: PropTypes.array,
};

class CreateUser extends Component {

    constructor(){
        super();
        this.state = {
            name:'',
            address:'',
            employer:''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.target.classList.add("active");

        this.setState({
            [e.target.name]: e.target.value
        });
    }

    renderSelect(companies) {
        return companies.map((item, index) => <option key={index} value={index}>{item.name}</option>)
    }

    render() {
        const {createUser, companies} = this.props;
        return (
            <div className="create-user">
                <div className="header">
                    <h2>Create User</h2>
                </div>
                <div>
                    <div className="input-container">
                        <label className="label">Name *</label>
                        <input type="text"
                               ref="name"
                               name="name"
                               value={this.state.name}
                               onChange={this.handleChange}
                               className="input-control"/>
                    </div>
                    <div className="input-container">
                        <label className="label">Address *</label>
                        <input type="text"
                               ref="address"
                               name="address"
                               value={this.state.address}
                               onChange={this.handleChange}
                               className="input-control"/>
                    </div>
                    <div className="input-container">
                        <select className="input-control"
                                ref="employer"
                                name="employer"
                                value={this.state.employer}
                                onChange={this.handleChange}>
                            <option value="">Select Employer</option>
                            {this.renderSelect(companies)}
                        </select>
                    </div>
                    <div className="input-container">
                        <button onClick={()=>createUser(this)}>Save</button>
                    </div>
                </div>
            </div>
        )
    };
}

const mapDispatchToProps = dispatch => ({
    createUser: (data) => {
        let isValid = true;
        Object.keys(data.state).forEach((item)=>{
            if(data.state[item].trim().length === 0){
                isValid = false;
            }
        });

        if(isValid){
            dispatch(actions.createUser(data.state));
            data.setState({
                name:'',
                address:'',
                employer:''
            });
        }else{
            alert('All fields are required');
        }
    }
});

const mapStateToProps = state => ({
    companies: state.clickCounter.companies,
});

CreateUser.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
