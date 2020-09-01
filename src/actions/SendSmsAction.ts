import { Dispatch } from 'redux';
import { SmsGlobalActionTypes } from '../types/type';
import { ISendSmsForm } from '../states/SendSmsState';
import { SmsGlobalApi } from '../api/smsGlobalApi';
import { IMessage } from '../states/SmsReportState';


export interface SendSmsAction {
    type: SmsGlobalActionTypes.ON_SEND_SMS | SmsGlobalActionTypes.ON_SMS_FORM_CHANGE;
    messages: IMessage[];
    sendSmsForm: ISendSmsForm
}



export const onSuccessSmsSend = (response: any): SendSmsAction => {
    return {
        type: SmsGlobalActionTypes.ON_SEND_SMS,
        messages: [...response.messages]
    } as SendSmsAction;
}

export const onHandleInputChange = (sendSmsForm: ISendSmsForm): SendSmsAction => {
    return {
        type: SmsGlobalActionTypes.ON_SMS_FORM_CHANGE,
        sendSmsForm: sendSmsForm
    } as SendSmsAction;
}


export const onSendingSms = () => {
    return (dispatch: Dispatch, getState: any) => {
        const { sendSmsForm } = getState().sendSmsState;
        const { from, to, message } = sendSmsForm;
        const req = {
            destination: to,
            message: message,
            origin: from
        }
        console.log(req);
        return new SmsGlobalApi().onSendSms(req)
            .then((response) =>
                dispatch(onSuccessSmsSend(response.data)));
    };
}




export const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    return (dispatch: Dispatch, getState: any) => {
        const { sendSmsForm } = getState().sendSmsState;
        switch (e.target.name) {
            case 'from':
                sendSmsForm.from = e.target.value;
                if (sendSmsForm.from.length < 3 || sendSmsForm.from.length > 11) {
                    sendSmsForm.errors.from = 'Length should be  3 to 11 characters';

                } else if (!sendSmsForm.from || sendSmsForm.from === '') {
                    sendSmsForm.errors.from = 'From field should not be empty';

                } else {
                    sendSmsForm.errors.from = '';
                }

                break;
            case 'to':
                sendSmsForm.to = e.target.value;
                if (sendSmsForm.to.length < 10) {
                    sendSmsForm.errors.to = 'Minimum Character length is 10';

                } else if (!sendSmsForm.to || sendSmsForm.to === '') {
                    sendSmsForm.errors.to = 'To field Should not be empty';

                } else {
                    sendSmsForm.errors.to = '';
                }

                break;
            case 'message':
                sendSmsForm.message = e.target.value;
                if (sendSmsForm.message < 3) {
                    sendSmsForm.errors.message = 'Minimum Character length is 3';

                } else if (!sendSmsForm.message || sendSmsForm.message === '') {
                    sendSmsForm.errors.message = 'Message Should not be empty';

                } else {
                    sendSmsForm.errors.message = '';
                }

                break;
        }
        const { errors } = sendSmsForm;
        const { from, to, message } = errors;
        if (from === '' && to === '' && message === '') {
            sendSmsForm.valid = true;
        } else {
            sendSmsForm.valid = false;
        }
        dispatch(onHandleInputChange({ ...sendSmsForm }));
    };
}