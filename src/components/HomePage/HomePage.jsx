import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './styles.less';
import CreateCompany from './CreateCompany'
import CreateUser from './CreateUser'
import {connect} from 'react-redux';

import {BrowserRouter as Router, Route, Link} from "react-router-dom";

const propTypes = {
    companies: PropTypes.array,
};

class HomePage extends Component {

    renderCreateUser(companies) {
        console.log('render create user');
        return companies.length > 0 ? (<CreateUser/>) : '';
    }

    renderCompanies(companies) {
        if (companies.length === 0) {
            return <h3>No companies to review</h3>;
        }

        return companies.map((item, index) => (<div key={index} className="company-card">
            <div className="card-header">{item.name}</div>
            <div className="card-body">
                <div className="card-item">
                    <label className="label">Address :</label>
                    <span className="description">{item.address}</span>
                </div>
                <div className="card-item">
                    <label className="label">Revenue :</label>
                    <span className="description">{item.revenue}</span>
                </div>
                <div className="card-item">
                    <label className="label">Phone :</label>
                    <span className="description">{item.phone}</span>
                </div>
            </div>
            <div className="card-footer"><Link to={"/details/"+ index}>Company Overview</Link>
        </div>
    </div>))
    }

    render() {
        const {companies} = this.props;

        return (
            <React.Fragment>
                <div className="container">
                    <div className="mainContainer">
                        <div className="header">
                            <h2>Companies</h2>
                        </div>
                        <div className="companies-list">
                            {this.renderCompanies(companies)}
                        </div>
                    </div>
                    <div className="rightContainer">
                        <CreateCompany/>
                        {this.renderCreateUser(companies)}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    companies: state.clickCounter.companies,
});

export default connect(mapStateToProps)(HomePage);
