
import { HouseDoor, CheckCircle, XCircle } from 'react-bootstrap-icons'
import styles from './style.module.scss'

type StatusBarProps = {
    name: string;
    status: boolean;
    requirement: boolean;
}

function StatusBar({ name, status, requirement }: StatusBarProps) {
    return (
        <>
            <div className={styles.statusBar}>
                <HouseDoor color='blue' />
                <div>{name} {requirement && "( Mecburi )"}</div>
                {status ? <CheckCircle color='green' /> : <XCircle color='red' />}
            </div>
        </>
    );
}

export default StatusBar;