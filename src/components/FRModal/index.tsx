import { Formik } from 'formik';
import { InputGroup, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '../../config/hooks';
import { Customer } from '../../config/models/customer';
import { ModalProps } from '../../config/models/modalProps';
import { addCustomer, fetchData } from '../../pages/Home/homeSlice';
import styles from './style.module.scss';


type InitialValues = Customer


function FRModal({ show, handleClose }: ModalProps) {

    const dispatch = useAppDispatch();
    const initialValues: InitialValues = { companyName: "", taxNumber: "", taxOffice: "", invoiceCount: "", contactNumber: "" };
    const { t } = useTranslation();

    const onValueSubmit = (values: InitialValues) => {
        dispatch(addCustomer(values)).then(() => dispatch(fetchData()))
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Formik initialValues={initialValues}
                onSubmit={onValueSubmit}>
                {({ values,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                }) => (
                    <div>
                        <Modal.Header>
                            <Modal.Title>{t("label.addNewCustomer")}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Group controlId={"CustomerAddModal"}>
                                <InputGroup>
                                    <div className={styles.inputGroup}>
                                        <Form.Control
                                            type={"string"}
                                            name={"companyName"}
                                            id={'companyName'}
                                            placeholder={t("title.companyName")}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.companyName}
                                            className='border  border-rounded'
                                        />
                                        <Form.Control
                                            type={"string"}
                                            name={"taxNumber"}
                                            id={'taxNumber'}
                                            placeholder={t("title.taxNumber")}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.taxNumber}
                                            className='border  border-rounded'
                                        />
                                        <Form.Control
                                            type={"string"}
                                            name={"taxOffice"}
                                            id={'taxOffice'}
                                            placeholder={t("title.taxOffice")}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.taxOffice}
                                            className='border  border-rounded'
                                        />
                                        <Form.Control
                                            type={"string"}
                                            name={"contactNumber"}
                                            id={'contactNumber'}
                                            placeholder={t("title.contactNumber")}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.contactNumber}
                                            className='border  border-rounded'
                                        />
                                        <Form.Control
                                            type={"string"}
                                            name={"invoiceCount"}
                                            id={'invoiceCount'}
                                            placeholder={t("title.invoiceCount")}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.invoiceCount}
                                            className='border  border-rounded'
                                        />
                                    </div>
                                </InputGroup>
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={handleClose} variant="secondary" >
                                {t("button.close")}
                            </Button>
                            <Button id="saveChanges" onClick={() => {
                                handleSubmit()
                                handleClose()
                            }} type='submit' variant="primary" >
                                {t("button.saveChanges")}
                            </Button>
                        </Modal.Footer>
                    </div>
                )}
            </Formik>
        </Modal >

    );
}

export default FRModal;