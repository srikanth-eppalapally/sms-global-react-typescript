import { AddAPIState } from "./AddAPIState";
import { SendSmsState } from "./SendSmsState";
import { SmsReportState } from "./SmsReportState";

export default interface AppState {
    addAPIState: AddAPIState;
    sendSmsState: SendSmsState,
    smsReportState: SmsReportState
}
