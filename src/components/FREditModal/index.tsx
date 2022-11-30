import { Formik } from 'formik';
import { InputGroup, Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useTranslation } from 'react-i18next';
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from '../../config/hooks';
import { getCustomer } from '../../pages/Detail/detailSlice';
import styles from './style.module.scss';


type InitialValues = {
    companyName: string;
    taxNumber: number | undefined;
    taxOffice: string;
    invoiceCount: number | undefined;
    contactNumber: string;
}


function FREditModal({ show, handleClose, handleShow, editCustomer, userId, customerData }: any) {

    const dispatch = useAppDispatch();
    const initialValues: InitialValues = {
        companyName: customerData?.companyName, taxNumber: customerData?.taxNumber, taxOffice: customerData?.taxOffice,
        invoiceCount: customerData?.invoiceCount, contactNumber: customerData?.contactNumber
    };
    const { t } = useTranslation();


    const onValueSubmit = (values: any) => {
        dispatch(editCustomer({ userId, values })).then(() => dispatch(getCustomer(userId)))
    }

    return (
        <Modal show={show} onHide={handleClose} animation={false}>
            <Formik initialValues={initialValues}
                onSubmit={onValueSubmit}>
                {({ values,
                    errors,
                    touched,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    setFieldValue,
                    isSubmitting }) => (
                    <div>
                        <Modal.Header>
                            <Modal.Title>{t("label.edit")}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Group controlId={"CustomerAddModal"}>
                                <InputGroup>
                                    <div className={styles.inputGroup}>
                                        <Form.Control
                                            type={"string"}
                                            name={"companyName"}
                                            placeholder={t("title.companyName")}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.companyName}
                                            className='border  border-rounded'
                                        />
                                        <Form.Control
                                            type={"string"}
                                            name={"taxNumber"}
                                            placeholder={t("title.taxNumber")}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.taxNumber}
                                            className='border  border-rounded'
                                        />
                                        <Form.Control
                                            type={"string"}
                                            name={"taxOffice"}
                                            placeholder={t("title.taxOffice")}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.taxOffice}
                                            className='border  border-rounded'
                                        />
                                        <Form.Control
                                            type={"string"}
                                            name={"contactNumber"}
                                            placeholder={t("title.contactNumber")}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.contactNumber}
                                            className='border  border-rounded'
                                        />
                                        <Form.Control
                                            type={"string"}
                                            name={"invoiceCount"}
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
                            <Button onClick={() => {
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

export default FREditModal;