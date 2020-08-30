export interface SmsReportState {
    messageReport: IsmsReport,
    messagesList: IMessage[]
}

export interface IsmsReport{
    [key: string]: number;
    total: number,
    sent: number,
    delivered: number,
    failed: number
}

export interface IMessage {
    timeSent: string;
    from: string;
    to: string;
    status: string;
    messageContent: ''

}