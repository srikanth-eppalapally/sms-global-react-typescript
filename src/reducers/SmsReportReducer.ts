import { Reducer } from 'redux';
import { SmsGlobalActionTypes } from '../types/type';
import { SmsReportState } from '../states/SmsReportState';
import { SmsReportAction } from '../actions/SmsReportAction';


const initialState: SmsReportState = {
    messageReport: {
        total: 0,
        limit: 0,
        offset: 0,
        messages: []
    }
};
const SmsReportReducer: Reducer<SmsReportState, SmsReportAction> =
    (state: SmsReportState = initialState, action: SmsReportAction) => {

        switch (action.type) {
            case SmsGlobalActionTypes.ON_GET_SMS_REPORT: {
                return {
                    ...state,
                    messageReport: action.messageReport,
                }

            }
            default: return state;
        }
    };

export default SmsReportReducer;
