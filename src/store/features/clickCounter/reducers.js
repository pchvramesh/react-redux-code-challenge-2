import types from './types';
import {createDefaultReducer} from '../../helpers'

const initialState = {
    companies: [],
    update:true
};

const createCompany = (state, payload) => {
    let data = [];
    payload['users'] = [];
    data.push(payload);
    state.companies = state.companies.concat(data);
    return {
        ...state
    }
};

const createUser = (state, payload) => {
    state.companies[payload.employer]['users'].push(payload);
    state.udpate = !state.update;
    return {
        ...state
    }
};


const actionMap = {
    [types.CREATE_COMPANY]: createCompany,
    [types.CREATE_USER]: createUser
};

export default createDefaultReducer(actionMap, initialState)