import { useTranslation } from "react-i18next";
import styles from './style.module.scss'



function Button({ onSubmit }: any) {
    const { t } = useTranslation()
    return (
        <>
            <button className={styles.button} onClick={onSubmit} >{t("button.login")}</button>
        </>

    );
}

export default Button;