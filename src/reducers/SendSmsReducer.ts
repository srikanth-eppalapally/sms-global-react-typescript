import { Reducer } from 'redux';
import { SmsGlobalActionTypes } from '../types/type';
import { SendSmsState } from '../states/SendSmsState';
import { SendSmsAction } from '../actions/SendSmsAction';


const initialState: SendSmsState = {
    sendSmsForm: {
        from: '',
        to: '',
        message: '',
        errors: {
            from: '',
            to: '',
            message: '',
        },
        valid: false,
        submit: false
    }
};
const SendSmsReducer: Reducer<SendSmsState, SendSmsAction> =
    (state: SendSmsState = initialState, action: SendSmsAction) => {

        switch (action.type) {
            case SmsGlobalActionTypes.ON_SMS_FORM_CHANGE: {
                return {
                    ...state,
                    sendSmsForm: action.sendSmsForm,
                }

            }
            default: return state;
        }
    };

export default SendSmsReducer;
