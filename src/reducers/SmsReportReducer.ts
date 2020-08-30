import { Reducer } from 'redux';
import { SmsGlobalActionTypes } from '../types/type';
import { SmsReportState } from '../states/SmsReportState';
import { SmsReportAction } from '../actions/SmsReportAction';


const initialState:SmsReportState  =  {
   
    messageReport:{
        total: 0,
        sent: 0,
        delivered: 0,
        failed: 0
    },
    messagesList: []

    

};
const SmsReportReducer: Reducer<SmsReportState, SmsReportAction> =
    (state: SmsReportState = initialState, action: SmsReportAction) => {

        switch (action.type) {
            case SmsGlobalActionTypes.ON_GET_SMS_REPORT: {
                return {
                    ...state,
                    messagesList: action.messagesList,
                    messageReport: action.messageReport,
                }

            }
            default: return state;
        }
    };

export default SmsReportReducer;
