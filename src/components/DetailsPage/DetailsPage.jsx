import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";

const propTypes = {
    companies: PropTypes.array,
};


class DetailsPage extends Component {
    constructor(props) {
        super(props);
    }

    renderCompanyDetails(companies) {
        let data = companies[this.props.match.params.company];

        return (
            <div className="profileOverView">
                <div className="header">{data.name}</div>
                <div className="body">
                    <div className="section">
                        <div className="card-item">
                            <label className="label">Address :</label>
                            <label className="description">{data.address}</label>
                        </div>
                        <div className="card-item">
                            <label className="label">Revenue :</label>
                            <label className="description">{data.revenue}</label>
                        </div>
                        <div className="card-item">
                            <label className="label">Phone :</label>
                            <label className="description">{data.phone}</label>
                        </div>
                    </div>
                    <div className="section">
                        <div className="card-item">
                            <label className="label">Total Employees</label>
                            <label className="description">{data.users.length}</label>
                        </div>
                    </div>
                </div>
                <div className="footer">&nbsp;</div>
            </div>
        );
    }

    renderUserDetails(companies){
        let data = companies[this.props.match.params.company];

        return data.users.map((item, index) => (<div key={index} className="company-card">
            <div className="card-header">{item.name}</div>
            <div className="card-body">
                <div className="card-item">
                    <label className="label">Address :</label>
                    <span className="description">{item.address}</span>
                </div>
            </div>
        </div>))
    }

    render() {
        const {companies} = this.props;
        return (
            <React.Fragment>
                <div className="details-container">
                    {this.renderCompanyDetails(companies)}
                    <div className="user-details">
                        <div className="header">Employees</div>
                        <div className="body">
                            {this.renderUserDetails(companies)}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    companies: state.clickCounter.companies,
});

export default connect(mapStateToProps)(DetailsPage);