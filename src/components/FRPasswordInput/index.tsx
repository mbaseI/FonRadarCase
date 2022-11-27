import { Form, InputGroup } from 'react-bootstrap';
import { EyeSlash, EyeFill } from 'react-bootstrap-icons';
import { useState } from 'react';

type FRPasswordInputProps = {
    handleChange: any;
    handleBlur: any;
    touched: any;
    errors: any;
    value: any;
    name: string;
    label: string;
    controlId: string;
    placeholder: string;

}

function FRPasswordInput({ name, value, placeholder, label, controlId, touched, errors, handleChange, handleBlur }: FRPasswordInputProps) {

    const [isShow, setIsShow] = useState(false);

    return (
        <Form.Group controlId={controlId}>
            <Form.Label className="d-flex justify-content-start">{label}</Form.Label>
            <InputGroup>
                <Form.Control
                    type={isShow ? "text" : "password"}
                    name={name}
                    placeholder={placeholder}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={value}
                    aria-describedby={name}
                    className='border border-start-0 border-rounded'
                />
                <InputGroup.Text role="button" onClick={() => setIsShow(!isShow)} className='bg-white border-left-0 cursor-pointer' id={name}>
                    <div>
                        {isShow ? <EyeFill /> : <EyeSlash />}
                    </div>
                </InputGroup.Text>
                {touched.name && errors.name ? (
                    <div className="error-message">{errors.name}</div>
                ) : null}
            </InputGroup>
        </Form.Group>
    );
}

export default FRPasswordInput;