import { FRDetailBox } from "../../config/models/frDetailBox";
import FRInfoText from "../FRInfoText";
import styles from './style.module.scss'

type DetailBoxProps = {
    title: string;
    data: FRDetailBox[];
}

function DetailBox({ title, data }: DetailBoxProps) {
    return (
        <>
            <div className={styles.title}>{title}</div>
            <div className={styles.detailBox}>
                {data.map((item: FRDetailBox) => {
                    return <FRInfoText key={item.id} title={item.title} text={item.text} />
                })}
            </div>
        </>
    );
}

export default DetailBox;