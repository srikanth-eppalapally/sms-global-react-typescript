import { Reducer } from 'redux';

import { AddAPIState } from '../states/AddAPIState';
import { SmsGlobalActionTypes } from '../types/type';
import { AddAPIKeysAction } from '../actions/AdddAPIKeysAction';


const initialState: AddAPIState = {
    apiKeys: {
        apiKey: '',
        secretKey: '',
        displayName: ''
    },
    addApiKeyForm: {
        apiKey: '',
        secretKey: '',
        displayName: '',
        errors: {
            apiKey: '',
            secretKey: '',
            displayName: '',
        },
        valid: false,
        submit: false
    }
};
const AddAPIKeysReducer: Reducer<AddAPIState, AddAPIKeysAction> =
    (state: AddAPIState = initialState, action: AddAPIKeysAction) => {

        switch (action.type) {
            case SmsGlobalActionTypes.ADD_API_KEYS: {
                return {
                    ...state,
                    apiKeys: action.apiKeys,
                }

            } case SmsGlobalActionTypes.ON_INPUT_CHANGE: {
                return {
                    ...state,
                    addApiKeyForm: action.addApiKeyForm,
                }

            }
            default: return state;
        }
    };

export default AddAPIKeysReducer;
