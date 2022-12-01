import styles from './style.module.scss'

type DetailBoxProps = {
    title: string;
    text: string | number;
}

function FRInfoText({ title, text }: DetailBoxProps) {
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