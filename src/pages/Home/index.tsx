import { Form, Formik } from "formik";
import Layout from "../../components/Layout";
import SearchBar from "../../components/SearchBar";
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "../../config/hooks";
import { fetchData, selectHome } from "./homeSlice";
import CustomerList from "../../components/CustomerList";
import FRModal from "../../components/FRModal";
import { Button } from "react-bootstrap";
import styles from './style.module.scss'
import { useTranslation } from "react-i18next";
import { Customer } from "../../config/models/customer";


type InitialValues = {
  searchText: string;
}

function Home() {
  const { t } = useTranslation()
  const initialValues: InitialValues = { searchText: "" };
  const homeData = useAppSelector(selectHome);
  const customers = homeData.customers
  const dispatch = useAppDispatch();

  const [nData, setNData] = useState<Customer[]>(customers);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [searchText, setSearchText] = useState('');

  const onSearch = (value: string) => {
    setSearchText(value)
  }

  const filterData = (nData: Customer[], searchText: string) => {
    return nData.filter((item: Customer) => item.companyName.toLowerCase().includes(searchText.toLowerCase()) || item.taxNumber.toString().includes(searchText))
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
          <Button id="addNewCustomer" onClick={handleShow}>{t("label.addNewCustomer")}</Button>
        </div>
        <Formik
          initialValues={initialValues}
          onSubmit={(e: any) => console.log(e)}
        >
          {({ values,
            touched,
            handleBlur,
            setFieldValue,

          }) => (
            <Form>
              <SearchBar
                type="text"
                name="searchText"
                label={t("label.myCustomers")}
                placeholder="Müşteri Ara"
                controlId="searchText"
                handleChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setFieldValue("searchText", e.target.value)
                  onSearch(e.target.value)
                }}
                handleBlur={handleBlur}
                value={values.searchText}
                touched={touched}

              />
            </Form>
          )}
        </Formik>
        <FRModal handleClose={handleClose} show={show} handleShow={handleShow} />
        <CustomerList data={filterData(nData, searchText)} />
      </Layout>
    </>

  );
}

export default Home;
