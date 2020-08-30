import { Dispatch } from 'redux';
import { SmsGlobalActionTypes } from '../types/type';
import { SmsReportState, IsmsReport, IMessage } from '../states/SmsReportState';
import { SmsGlobalApi } from '../api/smsGlobalApi';




export interface SmsReportAction {
    type: SmsGlobalActionTypes.ON_GET_SMS_REPORT;
    messageReport: IsmsReport;
    messagesList: IMessage[];
}


export const onGetSmsReport =  (response: { messageReport: IsmsReport; messagesList: IMessage[]; }): SmsReportAction =>  {
    return {
        type:  SmsGlobalActionTypes.ON_GET_SMS_REPORT,
        messageReport: response.messageReport,
        messagesList: response.messagesList
    }
}



export const onSmsReport = () => {
    return (dispatch: Dispatch, getState: any) => {
        return new SmsGlobalApi().onGetSmsReport()
            .then((response: any) =>
                {
                    return dispatch(onGetSmsReport(response));
                });
    };
}