export interface AddAPIState {
    apiKeys: IApiKeys;
    addApiKeyForm: IAPIKeyForm;
}


export interface IApiKeys {
    [key: string]: string;
    apiKey: string;
    secretKey: string,
    displayName: string;
}

export interface IAPIKeyForm {
    apiKey: string;
    secretKey: string;
    displayName: string;
    errors: Ierror;
    submit: boolean;
    valid: boolean;
}

export interface Ierror {
    apiKey: string;
    secretKey: string;
    displayName: string;
}