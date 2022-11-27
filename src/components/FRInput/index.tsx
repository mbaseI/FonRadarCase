import { Form } from 'react-bootstrap';
import { EyeSlash } from 'react-bootstrap-icons'

type FRInputProps = {
    handleChange: any;
    handleBlur: any;
    touched: any;
    errors: any;
    value: any;
    name: string;
    label: string;
    type: "text" | "email";
    placeholder: string;
    controlId: string
}

function FRInput({ name, value, placeholder, label, type, controlId, touched, errors, handleChange, handleBlur }: FRInputProps) {
    return (
        <Form.Group controlId={controlId}>
            <Form.Label className="d-flex justify-content-start">{label}</Form.Label>
            <Form.Control
                type={type}
                name={name}
                placeholder={placeholder}
                onChange={handleChange}
                onBlur={handleBlur}
                value={value}
            // className={touched.name && errors.name ? "has-error" : null}
            />
            {touched.name && errors.name ? (
                <div className="error-message">{errors.name}</div>
            ) : null}
        </Form.Group>
    );
}

export default FRInput;