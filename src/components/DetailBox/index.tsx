import { useTranslation } from "react-i18next";
import FRInfoText from "../FRInfoText";
import styles from './style.module.scss'

type DetailBoxProps = {
    title: string;
}

function DetailBox({ title }: DetailBoxProps) {
    const { t } = useTranslation()
    return (
        <>
            <div className={styles.title}>{title}</div>
            <div className={styles.detailBox}>
                <FRInfoText title={'2019'} text={'123.123.00 ₺'} />
                <FRInfoText title={'2019'} text={'123.123.00 ₺'} />
                <FRInfoText title={'2019'} text={'123.123.00 ₺'} />
            </div>
        </>


    );
}

export default DetailBox;