import axios, { AxiosResponse } from 'axios';
import Crypto from 'crypto-js';
import { SmsReportState } from '../states/SmsReportState';


export class SmsGlobalApi {

    private baseUrl = "https://api.smsglobal.com";


    getAuthorizationHeader(uri: string, method: string): string {
        const storedValue: string = window.sessionStorage.getItem('API_KEY_SETTINGS') || '';
        const apiKeySettings: any = JSON.parse(storedValue);
        const { apiKey, secretKey } = apiKeySettings;
        const ts = Math.floor(new Date().getTime() / 1000);
        const nonce = Math.floor(Math.random() * 1e16);
        const signature = [ts, nonce, method, uri, this.baseUrl, 80];
        const macString = `${signature.join(`\n`)}\n\n`;
        const macHash = Crypto.HmacSHA256(macString, secretKey);
        const macBase64 = Crypto.enc.Base64.stringify(macHash);
        return `MAC id="${apiKey}", ts="${ts}", nonce="${nonce}", mac="${macBase64}"`;
    };


    onSendSms(payload: any): Promise<AxiosResponse<any>> {
        const authorizationHeader = this.getAuthorizationHeader('/v2/sms/', 'POST')
        const sendSmsUrl = this.baseUrl + '/v2/sms/';
        const headers =  {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: authorizationHeader,
        }
        
       return axios.post(sendSmsUrl, payload, { headers })
    }

    onGetSmsReport(): Promise<AxiosResponse<SmsReportState>>{
        const authorizationHeader = this.getAuthorizationHeader('/v2/sms/', 'GET')
        const sendSmsUrl = this.baseUrl + '/v2/sms/?limit=5';
        const headers =  {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: authorizationHeader,
        }
        
       return axios.get(sendSmsUrl,  { headers })
    }

}