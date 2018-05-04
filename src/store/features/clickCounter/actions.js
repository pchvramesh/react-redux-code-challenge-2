import types from './types';


function createCompany(data) {
    return {
        type: types.CREATE_COMPANY,
        payload:data
    }
}

function createUser(data) {
    return {
        type: types.CREATE_USER,
        payload:data
    }
}

function incrementBy1() {
    return {
        type: types.INCREMENT_NUMBER,
    }
}

function decrementBy1() {
    return {
        type: types.DECREMENT_NUMBER,
    }
}

function resetNumberToZero() {
    return {
        type: types.RESET_TO_ZERO,
    }
}

export default {
    incrementBy1,
    decrementBy1,
    resetNumberToZero,
    createCompany,
    createUser
};