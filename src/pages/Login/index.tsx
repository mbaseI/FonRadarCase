import { Field, Form, Formik } from "formik"
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next"
import FRInput from "../../components/FRInput";
import FRPasswordInput from "../../components/FRPasswordInput";
import Layout from "../../components/Layout";


type LoginForm = {
  email: string;
  password: string;
}
function Login() {
  const { t } = useTranslation()

  const login = (values: LoginForm) => {
    console.log(values)
  }

  return (
    <>
      <Layout>
        <Row className="justify-content-md-center">
          <Col md={4}>
            <Formik
              initialValues={{ email: "asd@gmail.com", password: "Karakartal1903." }}
              onSubmit={login}
            >
              {({ values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting }) => (
                <Form>
                  <FRInput
                    type="email"
                    name="email"
                    label="E-posta Adresi"
                    placeholder="Email"
                    controlId="formEmail"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.email}
                    touched={touched}
                    errors={errors}
                  />
                  <FRPasswordInput
                    name="password"
                    label="Şifre"
                    placeholder="Password"
                    controlId="password"
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    value={values.password}
                    touched={touched}
                    errors={errors}
                  />
                  <button type="submit">{t("button.click")}</button>
                </Form>
              )}
            </Formik>
          </Col>
        </Row>
      </Layout>

    </>
  );
}

export default Login;
