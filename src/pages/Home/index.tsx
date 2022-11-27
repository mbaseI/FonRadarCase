import { Form, Formik } from "formik";
import { Table } from "react-bootstrap";
import Layout from "../../components/Layout";
import SearchBar from "../../components/SearchBar";
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from "../../config/hooks";
import { fetchData, selectHome } from "./homeSlice";
import ResultCard from "../../components/ResultCard";
import { Customer } from "../../config/models/customer";

type InitialValues = {
  searchText: string;
}





function Home() {
  const home = useAppSelector(selectHome);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData())
  }, [])


  const initialValues: InitialValues = { searchText: "" };

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
                label="Müşteriler"
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
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {home.customers.map((item: Customer) => {
              return <ResultCard key={item.id} companyName={item.companyName} taxNumber={item.taxNumber} taxOffice={item.taxOffice} contactNumber={item.contactNumber} invoiceCount={item.invoiceCount} id={item.id} />
            })}


          </tbody>
        </Table>
      </Layout>
    </>

  );
}

export default Home;
