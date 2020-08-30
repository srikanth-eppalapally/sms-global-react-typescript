import React from 'react';
import { connect } from 'react-redux';
import AppState from '../states/AppState';
import { addAPIKeys, handleInputChange } from '../actions/AdddAPIKeysAction';
import APIKeyForm from './Forms/APIKeyForm';
import { ApiKey } from './ApiKey';
import { IApiKeys } from '../states/AddAPIState';


const mapStateToProps = (state: AppState) => {
    return {
        apiKeys: state.addAPIState.apiKeys,
        addApiKeyForm: state.addAPIState.addApiKeyForm
    };
};

const mapDispatchToProps = (dispatch: Function) => {
    return {
        addAPIKeys: () => dispatch(addAPIKeys()),
        handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => dispatch(handleInputChange(e)),
    }
}



type Props = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>;

const UnconnectedAddAPIKeys: React.FC<Props> = (props) => {
    const { addApiKeyForm, handleInputChange, addAPIKeys, apiKeys } = props;
    let apiKey;
    const keys = window.sessionStorage.getItem('API_KEY_SETTINGS')
    if (keys) {
        apiKey = { ...JSON.parse(keys) } as IApiKeys;
    } else {
        apiKey = apiKeys;
    }
    return (
        <div className="api-key-container">
            <APIKeyForm onSubmit={addAPIKeys} addApiKeyForm={addApiKeyForm} handleChange={handleInputChange} />
            {apiKey.apiKey ? <ApiKey apiKeys={apiKey} /> : null}
        </div >
    );
}



export const AddAPIKeys = connect(
    mapStateToProps,
    mapDispatchToProps
)(UnconnectedAddAPIKeys);


