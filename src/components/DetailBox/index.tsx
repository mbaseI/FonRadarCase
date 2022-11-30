import FRInfoText from "../FRInfoText";
import styles from './style.module.scss'

type DetailBoxProps = {
    title: string;
    data: any;
}

function DetailBox({ title, data }: DetailBoxProps) {
    return (
        <>
            <div className={styles.title}>{title}</div>
            <div className={styles.detailBox}>
                {data.map((item: any) => {
                    return <FRInfoText key={item.id} title={item.title} text={item.text} />
                })}
            </div>
        </>


    );
}

export default DetailBox;