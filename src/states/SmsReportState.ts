export interface SmsReportState {
    messageReport: IsmsReport,
}

export interface IsmsReport{
    total: number,
    offset: number,
    limit: number,
    messages: IMessage[]
}

export interface IMessage {
    [key:string] : string | number;
    id: number;
    outgoing_id: number;
    origin: string;
    destination: string;
    message: string;
    status: string;
    dateTime: string;
}
