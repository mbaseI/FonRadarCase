import { useTranslation } from "react-i18next";
import styles from './style.module.scss'



function Button({ onSubmit, isDisabled, type }: any) {
    const { t } = useTranslation()
    return (
        <>
            <button type={type} style={{
                pointerEvents: isDisabled && 'none',
                backgroundColor: isDisabled && '#434242',
                color: isDisabled && 'white',
            }} className={styles.button} onClick={onSubmit} >{t("button.login")}</button>
        </>

    );
}

export default Button;