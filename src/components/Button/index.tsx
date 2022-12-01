import { ButtonHTMLAttributes, HTMLAttributes } from "react";
import { useTranslation } from "react-i18next";
import styles from './style.module.scss'


type ButtonProps = {
    onSubmit?: () => void,
    isDisabled: boolean,
    type: "submit" | "button",
    id: string
}

function Button({ onSubmit, isDisabled, type, id }: ButtonProps) {
    const { t } = useTranslation()
    return (
        <>
            <button id={id} type={type} style={{
                pointerEvents: isDisabled ? 'none' : "auto",
                backgroundColor: isDisabled ? '#434242' : "",
                color: isDisabled ? 'white' : "",
            }} className={styles.button} onClick={onSubmit} >{t("button.login")}</button>
        </>
    );
}

export default Button;