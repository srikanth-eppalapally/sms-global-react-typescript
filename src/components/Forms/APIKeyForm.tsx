import { IAPIKeyForm } from "../../states/AddAPIState";
import React from "react";
import TextInput from "./TextInput";

type HtmlEvent = React.ChangeEvent<HTMLInputElement>
type BtnEvent = React.MouseEvent<HTMLButtonElement>

interface Props {
    handleChange: React.EventHandler<HtmlEvent>;
    onSubmit: React.EventHandler<BtnEvent>;
    addApiKeyForm: IAPIKeyForm;

}

const APIKeyForm: React.FC<Props> = ({ addApiKeyForm, handleChange, onSubmit }) => {
    return (
        <div className="form">
            <h1>Add Api keys</h1>
            <TextInput
                label="API Key"
                name="apiKey"
                type="text"
                value={addApiKeyForm.apiKey}
                onChange={(e) => handleChange(e)}
                placeholder="Enter Api Key..."
                error={addApiKeyForm.errors.apiKey}
                required={true}
            />

            <TextInput
                label="SecretKey Key"
                name="secretKey"
                type="text"
                value={addApiKeyForm.secretKey}
                onChange={(e) => handleChange(e)}
                placeholder="Enter Secret Key..."
                error={addApiKeyForm.errors.secretKey}
                required={true}
            />


            <TextInput
                label="Display Name"
                name="displayName"
                type="text"
                value={addApiKeyForm.displayName}
                onChange={(e) => handleChange(e)}
                placeholder="Enter Display Name..."
                error={addApiKeyForm.errors.displayName}
                required={true}
            />
            <button disabled={!addApiKeyForm.valid} type="submit" className="btn" onClick={onSubmit}>
                Submit
                </button>
        </div >
    )
}

export default APIKeyForm;