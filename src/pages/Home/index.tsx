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
  const [nData, setNData] = useState(customers);

  const onSearch = (value: any) => {
    const filteredData = nData.filter((item: any) => {
      return item.companyName.toLowerCase().includes(value.toLowerCase())
    })
    setNData(filteredData)

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
                onSearch={onSearch}
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
        <CustomerList data={nData} />
      </Layout>
    </>

  );
}

export default Home;
