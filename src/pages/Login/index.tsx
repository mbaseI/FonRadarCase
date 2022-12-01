import { Form, Formik } from "formik"
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next"
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import FRInput from "../../components/FRInput";
import FRPasswordInput from "../../components/FRPasswordInput";
import Layout from "../../components/Layout";
import { useAppDispatch, useAppSelector } from "../../config/hooks";
import { User } from "../../config/models/user";
import SignInSchema from "../../config/Validations/SignIn";
import { getUsers, selectLogin } from "./loginSlice";
import styles from './style.module.scss';


type LoginForm = {
  username: string;
  password: string;
}

function Login() {
  const { t } = useTranslation()
  const [isCorrect, setIsCorrect] = useState<any | null>(null);
  const dispatch = useAppDispatch();
  const usersState = useAppSelector(selectLogin);
  const navigate = useNavigate()
  const login = (values: LoginForm) => {
    const isValid = usersState.users.some((user: User) => values.username === user.username && values.password === user.password)
    if (!isValid) setIsCorrect(false)
    // eslint-disable-next-line no-restricted-globals
    else {
      const UUID = self.crypto.randomUUID()
      localStorage.setItem("token", UUID)
      navigate('/')
    }
  }

  useEffect(() => {
    dispatch(getUsers())
  }, [])


  return (
    <>
      <Layout>
        <Row className="justify-content-md-center mt-5">
          <Col md={4}>
            <Formik
              initialValues={{ username: "", password: "" }}
              onSubmit={login}
              validationSchema={SignInSchema}
            >
              {({ values,
                errors,
                touched,
                isValid,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting }) => (
                <Form>
                  <div className={styles.login}>
                    <FRInput
                      type="text"
                      name="username"
                      label={t("label.userName")}
                      placeholder="example@gmail.com"
                      controlId="formEmail"
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      value={values.username}
                      touched={touched.username}
                      errors={errors.username}
                    />
                    <FRPasswordInput
                      name="password"
                      label={t("label.password")}
                      placeholder="*******"
                      controlId="password"
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      value={values.password}
                      touched={touched.password}
                      errors={errors.password}
                    />
                    <Button id="loginButton" type='submit' isDisabled={!isValid} />
                    {isCorrect === false && <div onClick={() => setIsCorrect(null)} className={styles.errorMessage}>{t("validation.incorrentLogin")}</div>}
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
