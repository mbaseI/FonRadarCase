import { Form } from 'react-bootstrap';
import styles from './style.module.scss';

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
    controlId: string;

}

function FRInput({ name, value, placeholder, label, type, controlId, touched, errors, handleChange, handleBlur }: FRInputProps) {

    return (
        <div className={styles.frinput}>
            <Form.Group controlId={controlId}>
                <Form.Label className="d-flex justify-content-start">{label}</Form.Label>
                <Form.Control
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={value}
                />
                {touched && <div className={styles.error}>{errors}</div>}
            </Form.Group>
        </div>
    );
}

export default FRInput;