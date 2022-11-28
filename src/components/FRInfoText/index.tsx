import { useTranslation } from "react-i18next";
import styles from './style.module.scss'

type DetailBoxProps = {
    title: string;
    text: string;
}

function FRInfoText({ title, text }: DetailBoxProps) {
    const { t } = useTranslation()
    return (
        <>
            <div className={styles.FRInfoText}>
                <div className={styles.title}>{title}</div>
                <div className={styles.text}>{text}</div>
            </div>
        </>

    );
}

export default FRInfoText;