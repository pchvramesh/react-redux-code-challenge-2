import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import actions from "../../store/features/clickCounter/actions";

const propTypes = {
    createCompany: PropTypes.func.isRequired
};

class CreateCompany extends Component {
    constructor(){
        super();
        this.state = {
            name:'',
            address:'',
            revenue:'',
            phone:''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.target.classList.add("active");

        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const {createCompany} = this.props;
        return (
            <div className="create-company">
                <div className="header">
                    <h2>Create Company</h2>
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
                        <label className="label">Revenue *</label>
                        <input type="number"
                               ref="revenue"
                               name="revenue"
                               value={this.state.revenue}
                               onChange={this.handleChange}
                               className="input-control"/>
                    </div>
                    <div className="input-container">
                        <label className="label">Phone *</label>
                        <input type="number"
                               ref="phone"
                               name="phone"
                               value={this.state.phone}
                               onChange={this.handleChange}
                               className="input-control"/>
                    </div>
                    <div className="input-container">
                        <button onClick={()=>createCompany(this)}>Save</button>
                    </div>
                </div>
            </div>
        )
    };
}


const mapDispatchToProps = dispatch => ({
    createCompany: (data) => {
        console.log(data);
        let isValid = true;
        Object.keys(data.state).forEach((item)=>{
            if(data.state[item].trim().length === 0){
                isValid = false;
            }
        });

        if(isValid){
            dispatch(actions.createCompany(data.state));
            data.setState({
                name:'',
                address:'',
                revenue:'',
                phone:''
            });
        }else{
            alert('All fields are required');
        }
        //
    }
});

CreateCompany.propTypes = propTypes;

export default connect(null, mapDispatchToProps)(CreateCompany);