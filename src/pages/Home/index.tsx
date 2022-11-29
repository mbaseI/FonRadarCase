import { Form, Formik } from "formik";
import Layout from "../../components/Layout";
import SearchBar from "../../components/SearchBar";
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "../../config/hooks";
import { addCustomer, fetchData, selectHome } from "./homeSlice";
import CustomerList from "../../components/CustomerList";
import FRModal from "../../components/FRModal";
import { Button } from "react-bootstrap";
import styles from './style.module.scss'
import { useTranslation } from "react-i18next";

type InitialValues = {
  searchText: string;
}

function Home() {
  const { t } = useTranslation()
  const initialValues: InitialValues = { searchText: "" };
  const homeData = useAppSelector(selectHome);
  const customers = homeData.customers
  const dispatch = useAppDispatch();

  const [nData, setNData] = useState(customers);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [searchText, setSearchText] = useState('');

  const onSearch = (value: any) => {
    setSearchText(value)
  }

  const filterData = (nData: any, searchText: any) => {
    return nData.filter((item: any) => item.companyName.toLowerCase().includes(searchText.toLowerCase()) || item.taxNumber.toString().includes(searchText))
  }



  useEffect(() => {
    dispatch(fetchData())
  }, [])

  useEffect(() => {
    setNData(customers)
  }, [customers])

  return (
    <>
      <Layout>
        <div className={styles.button}>
          <Button onClick={handleShow}>{t("label.addNewCustomer")}</Button>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={(e: any) => console.log(e)}
        >
          {({ values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
            setFieldValue,
            isSubmitting }) => (
            <Form>
              <SearchBar
                type="text"
                name="searchText"
                label={t("label.myCustomers")}
                placeholder="Müşteri Ara"
                controlId="searchText"
                handleChange={(e: any) => {
                  setFieldValue("searchText", e.target.value)
                  onSearch(e.target.value)
                }}
                handleBlur={handleBlur}
                value={values.searchText}
                touched={touched}
                errors={errors}

              />
            </Form>
          )}
        </Formik>
        <FRModal handleClose={handleClose} show={show} handleShow={handleShow} addCustomer={addCustomer} />
        <CustomerList data={filterData(nData, searchText)} />
      </Layout>
    </>

  );
}

export default Home;
