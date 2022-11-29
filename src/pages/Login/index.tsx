import { Form, Formik } from "formik"
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next"
import Button from "../../components/Button";
import FRInput from "../../components/FRInput";
import FRPasswordInput from "../../components/FRPasswordInput";
import Layout from "../../components/Layout";
import styles from './style.module.scss'

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
        <Row className="justify-content-md-center mt-5">
          <Col md={4}>
            <Formik
              initialValues={{ email: "", password: "" }}
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
                  <div className={styles.login}>
                    <FRInput
                      type="email"
                      name="email"
                      label={t("label.email")}
                      placeholder="example@gmail.com"
                      controlId="formEmail"
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      value={values.email}
                      touched={touched}
                      errors={errors}
                    />
                    <FRPasswordInput
                      name="password"
                      label={t("label.password")}
                      placeholder="*******"
                      controlId="password"
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      value={values.password}
                      touched={touched}
                      errors={errors}
                    />
                    <Button onSubmit={handleSubmit} />
                  </div>
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
