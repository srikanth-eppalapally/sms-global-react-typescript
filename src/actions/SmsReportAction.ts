import { Dispatch } from 'redux';
import { SmsGlobalActionTypes } from '../types/type';
import {  IsmsReport } from '../states/SmsReportState';
import { SmsGlobalApi } from '../api/smsGlobalApi';




export interface SmsReportAction {
    type: SmsGlobalActionTypes.ON_GET_SMS_REPORT;
    messageReport: IsmsReport;
}


export const onGetSmsReport = (response: any): SmsReportAction => {
    return {
        type: SmsGlobalActionTypes.ON_GET_SMS_REPORT,
        messageReport: response
    }
}



export const onSmsReport = () => {
    return (dispatch: Dispatch, getState: any) => {
        return new SmsGlobalApi().onGetSmsReport()
            .then((response) => {
                return dispatch(onGetSmsReport(response.data));
            });
    };
}