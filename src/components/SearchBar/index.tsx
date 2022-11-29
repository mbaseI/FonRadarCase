import { Form, InputGroup } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons'

type SearchBarProps = {
    handleChange: any;
    handleBlur: any;
    touched: any;
    errors: any;
    value: any;
    name: string;
    label: string;
    controlId: string;
    placeholder: string;
    type: "text";
}


function SearchBar({ name, value, placeholder, label, type, controlId, touched, errors, handleChange, handleBlur }: SearchBarProps) {
    return (
        <Form.Group controlId={controlId}>
            <Form.Label className="d-flex justify-content-start h4">{label}
            </Form.Label>
            <InputGroup>
                <Form.Control
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={value}
                    aria-describedby={name}
                    className='border  border-rounded'
                />
                <InputGroup.Text className='bg-white cursor-pointer' id={name}>
                    <Search />
                </InputGroup.Text>
                {touched.name && errors.name ? (
                    <div className="error-message">{errors.name}</div>
                ) : null}
            </InputGroup>
        </Form.Group>

    );
}

export default SearchBar;