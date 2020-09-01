

import { Dispatch } from 'redux';
import { SmsGlobalActionTypes } from '../types/type';
import { IAPIKeyForm, IApiKeys } from '../states/AddAPIState';

export interface AddAPIKeysAction {
    type: SmsGlobalActionTypes.ADD_API_KEYS | SmsGlobalActionTypes.ON_INPUT_CHANGE,
    apiKeys: IApiKeys;
    addApiKeyForm: IAPIKeyForm;
}

export const addAPIKeysToState = (list: IApiKeys): AddAPIKeysAction => {
    return {
        type: SmsGlobalActionTypes.ADD_API_KEYS,
        apiKeys: list
    } as AddAPIKeysAction;
}

export const onHandleInputChange = (addApiKeyForm: IAPIKeyForm): AddAPIKeysAction => {
    return {
        type: SmsGlobalActionTypes.ON_INPUT_CHANGE,
        addApiKeyForm: addApiKeyForm
    } as AddAPIKeysAction;
}

export const resetForm = (addApiKeyForm: IAPIKeyForm, dispatch: Dispatch) => {
    addApiKeyForm.apiKey = '';
    addApiKeyForm.secretKey = '';
    addApiKeyForm.displayName = '';
    addApiKeyForm.valid = false;
    dispatch(onHandleInputChange({ ...addApiKeyForm }));
}

export const addAPIKeys = () => {
    return (dispatch: Dispatch, getState: any) => {
        let { apiKeys, addApiKeyForm } = getState().addAPIState;
  
        const { apiKey, secretKey, displayName, valid } = addApiKeyForm;
        if (valid) {
            apiKeys = {
                apiKey: apiKey,
                secretKey: secretKey,
                displayName: displayName
            }
            window.sessionStorage.setItem('API_KEY_SETTINGS', JSON.stringify(apiKeys));
            dispatch(addAPIKeysToState({ ...apiKeys }));
            resetForm({ ...addApiKeyForm }, dispatch);
        }


    };
};




export const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return (dispatch: Dispatch, getState: any) => {
        const { addApiKeyForm } = getState().addAPIState;
        switch (e.target.name) {
            case 'apiKey':
                addApiKeyForm.apiKey = e.target.value;
                if (addApiKeyForm.apiKey.length < 3) {
                    addApiKeyForm.errors.apiKey = 'Minimum Character length is 3';

                } else if (!addApiKeyForm.apiKey || addApiKeyForm.apiKey === '') {
                    addApiKeyForm.errors.apiKey = 'Api Key is required';

                } else {
                    addApiKeyForm.errors.apiKey = '';
                }

                break;
            case 'secretKey':
                addApiKeyForm.secretKey = e.target.value;
                if (addApiKeyForm.secretKey.length < 3) {
                    addApiKeyForm.errors.secretKey = 'Minimum Character length is 3';

                } else if (!addApiKeyForm.secretKey || addApiKeyForm.secretKey === '') {
                    addApiKeyForm.errors.secretKey = 'Api Key is required';

                } else {
                    addApiKeyForm.errors.secretKey = '';
                }

                break;
            case 'displayName':
                addApiKeyForm.displayName = e.target.value;
                if (addApiKeyForm.displayName.length < 3) {
                    addApiKeyForm.errors.displayName = 'Minimum Character length is 3';

                } else if (!addApiKeyForm.displayName || addApiKeyForm.displayName === '') {
                    addApiKeyForm.errors.displayName = 'Api Key is required';

                } else {
                    addApiKeyForm.errors.displayName = '';
                }

                break;
        }
        const { errors } = addApiKeyForm;
        const { apiKey, secretKey, displayName } = errors;
        if (apiKey === '' && secretKey === '' && displayName === '') {
            addApiKeyForm.valid = true;
        } else {
            addApiKeyForm.valid = false;
        }
        dispatch(onHandleInputChange({ ...addApiKeyForm }));
    };

};