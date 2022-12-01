import * as Yup from "yup";
// const { t } = useTranslation()

const SignInSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Kullanıcı adı 3 karakterden fazla olmalı")
    .max(50)
    .required("E-mail alanı boş bırakılamaz"),
  password: Yup.string().required("Lütfen şifrenizi giriniz!"),
});

export default SignInSchema;
