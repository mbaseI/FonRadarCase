
import { HouseDoor, CheckCircle, XCircle } from 'react-bootstrap-icons'
import { useTranslation } from 'react-i18next';
import styles from './style.module.scss'

type StatusBarProps = {
    name: any;
    status: boolean;
    requirement: boolean;
}

function StatusBar({ name, status, requirement }: StatusBarProps) {
    const { t } = useTranslation()
    return (
        <>
            <div className={styles.statusBar}>
                <div className={styles.textSide}>
                    <HouseDoor color='blue' />
                    <span>{name} {requirement && `(${t("document.required")})`}</span>
                </div>
                <div>
                    {status ? <CheckCircle color='green' /> : <XCircle color='red' />}
                </div>
            </div>
        </>
    );
}

export default StatusBar;