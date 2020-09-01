import axios, { AxiosResponse } from 'axios';
import Crypto from 'crypto-js';
import { IsmsReport } from '../states/SmsReportState';


export class SmsGlobalApi {

    private baseUrl = "https://api.smsglobal.com";

    /**
     * @description  creates mac hash code 
     * @param uri api endpoint
     * @param method http method type
     */
    getAuthorizationHeader(uri: string, method: string): string {
        const storedValue: string = window.sessionStorage.getItem('API_KEY_SETTINGS') || '';
        const apiKeySettings: any = JSON.parse(storedValue);
        const { apiKey, secretKey } = apiKeySettings;
        const ts = Math.floor(new Date().getTime() / 1000); // The Unix timestamp of the time you made the request
        const nonce = Math.floor(Math.random() * 1e16); // random string 
        const signature = [ts, nonce, method, uri, 'api.smsglobal.com', 443]; // group all required fileds to create mac
        const macString = `${signature.join(`\n`)}\n\n`;  // join all the fields by \n
        const macHash = Crypto.HmacSHA256(macString, secretKey);  //  hash it using the HMAC method with api secret key
        const macBase64 = Crypto.enc.Base64.stringify(macHash);  // base64 encode
        return `MAC id="${apiKey}", ts="${ts}", nonce="${nonce}", mac="${macBase64}"`;
    };


    /**
     * 
     * @param payload has information about message origin, destination and message
     * @description  makes an api call to send message
     */

    onSendSms(payload: any): Promise<AxiosResponse<any>> {
        const authorizationHeader = this.getAuthorizationHeader('/v2/sms/', 'POST')
        const sendSmsUrl = this.baseUrl + '/v2/sms/';
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: authorizationHeader,
        }

        return axios.post(sendSmsUrl, payload, { headers })
    }


    /**
     * @description makes api call to return message reports
     */

    onGetSmsReport(): Promise<AxiosResponse<IsmsReport>> {
        const authorizationHeader = this.getAuthorizationHeader('/v2/sms/?limit=5', 'GET')
        const sendSmsUrl = this.baseUrl + '/v2/sms/?limit=5';
        const headers = {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: authorizationHeader,
        }

        return axios.get(sendSmsUrl, { headers })
    }

}