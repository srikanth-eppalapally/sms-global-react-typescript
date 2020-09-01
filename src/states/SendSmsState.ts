import { IMessage } from "./SmsReportState";

export interface SendSmsState {
    sendSmsForm: ISendSmsForm,
    messages: IMessage[]
}




export interface ISendSmsForm {
    from: string;
    to: string,
    message: string;
    errors: ISmsFormError;
    valid: boolean;
    submit: boolean;
}



export interface ISmsFormError {
    from: string;
    to: string;
    message: string;
}