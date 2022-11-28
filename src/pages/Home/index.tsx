import { Form, Formik } from "formik";
import Layout from "../../components/Layout";
import SearchBar from "../../components/SearchBar";
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from "../../config/hooks";
import { fetchData, selectHome } from "./homeSlice";
import CustomerList from "../../components/CustomerList";


type InitialValues = {
  searchText: string;
}

function Home() {

  const initialValues: InitialValues = { searchText: "" };
  const homeData = useAppSelector(selectHome);
  const customers = homeData.customers
  const dispatch = useAppDispatch();



  useEffect(() => {
    dispatch(fetchData())
  }, [])
  return (
    <>
      <Layout>
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
                label="Müşterilerim"
                placeholder="Müşteri Ara"
                controlId="searchText"
                onSearch={handleSubmit}
                handleChange={(e: any) => {
                  setFieldValue("searchText", e.target.value)
                }}
                handleBlur={handleBlur}
                value={values.searchText}
                touched={touched}
                errors={errors}

              />
            </Form>
          )}
        </Formik>
        <CustomerList data={customers} />
      </Layout>
    </>

  );
}

export default Home;
