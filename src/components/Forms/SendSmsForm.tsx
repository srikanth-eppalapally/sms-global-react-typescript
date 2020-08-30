import React from "react";
import TextInput from "./TextInput";
import { ISendSmsForm } from "../../states/SendSmsState";
import TextAreaInput from "./TextAreaInput";

type HtmlEvent = React.ChangeEvent<HTMLInputElement>
type BtnEvent = React.MouseEvent<HTMLButtonElement>
type textArea = React.ChangeEvent<HTMLTextAreaElement>
interface Props {
    handleChange: React.EventHandler<HtmlEvent | textArea>;
    onSubmit: React.EventHandler<BtnEvent>;
    sendSmsForm: ISendSmsForm;

}

const SendSmsForm: React.FC<Props> = ({ sendSmsForm, handleChange, onSubmit }) => {
    return (
        <div className="form">
            <h1>Send Sms</h1>
            <TextInput
                label="From"
                name="from"
                type="text"
                value={sendSmsForm.from}
                onChange={(e) => handleChange(e)}
                placeholder="Enter From ..."
                error={sendSmsForm.errors.from}
                required={true}
            />

            <TextInput
                label="To"
                name="to"
                type="number"
                value={sendSmsForm.to}
                onChange={(e) => handleChange(e)}
                placeholder="Enter to address..."
                error={sendSmsForm.errors.to}
                required={true}
            />


            <TextAreaInput
                label="Message"
                name="message"
                value={sendSmsForm.message}
                onChange={(e) => handleChange(e)}
                placeholder="Enter Message..."
                error={sendSmsForm.errors.message}
                required={true}
            />
            <button disabled={!sendSmsForm.valid} type="submit" className="btn" onClick={(e) => onSubmit(e)}>
                Send
                </button>
        </div >
    )
}

export default SendSmsForm;