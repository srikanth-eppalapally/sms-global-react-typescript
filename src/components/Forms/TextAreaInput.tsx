import * as React from 'react';


type HtmlEvent = React.ChangeEvent<HTMLTextAreaElement>


interface Props {
    name: string;
    onChange: React.EventHandler<HtmlEvent>;
    label: string;
    value: any;
    error: string;
    placeholder: string;
    required: boolean;
}

const TextAreaInput: React.FC<Props> = ({ name,
    placeholder,
    onChange,
    value,
    error,
    label, required }) => {
    return (
        <div className={error ? 'form-group has-error' : 'form-group'}>
            <label htmlFor={name}>{label}</label>
            <textarea
                id={name}
                name={name}
                placeholder={placeholder}
                onChange={(e) => onChange(e)}
                value={value}
                required={required}
                className="form-control"
            />
            {error && <p>{error}</p>}
        </div>
    )
}

export default TextAreaInput;






