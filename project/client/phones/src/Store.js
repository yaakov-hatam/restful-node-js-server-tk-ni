import {createStore} from 'redux';

const model = {
    phones: []
}

export const ACTIONS = {
    "ADDPHONE": "ADDPHONE",
    "EDITPHONE": "EDITPHONE",
    "DELETEPHONE": "DELETEPHONE"
}
const reducer = (m = model, action) =>{
    const options = {}
}