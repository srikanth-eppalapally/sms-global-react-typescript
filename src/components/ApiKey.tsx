import React from 'react';
import { IApiKeys } from '../states/AddAPIState';




interface Props {
    apiKeys: IApiKeys
}
export const ApiKey: React.FC<Props> = ({ apiKeys }) => {
    return (
        <div className="card w-100">
            <ul>
            {
                Object.keys(apiKeys).map((report, i) => 
                    <li key={i}><strong>{report}:</strong> {apiKeys[report]} </li>
                    )
            }
            </ul>
        </div >
    );
}