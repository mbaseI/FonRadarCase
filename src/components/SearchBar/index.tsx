import { FormikErrors, FormikHelpers, FormikProps, FormikState, FormikTouched, FormikValues } from 'formik';
import { Form, InputGroup } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons'

type SearchBarProps = {
    handleChange: any;
    handleBlur: any;
    touched: FormikTouched<{ [field: string]: any }>;
    value: any;
    name: string;
    label: string;
    controlId: string;
    placeholder: string;
    type: any;
}


function SearchBar({ name, value, placeholder, label, type, controlId, touched, handleChange, handleBlur }: any) {
    return (
        <Form.Group controlId={controlId}>
            <Form.Label className="d-flex justify-content-start h4">{label}
            </Form.Label>
            <InputGroup className="mb-2">
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
            </InputGroup>
        </Form.Group>

    );
}

export default SearchBar;