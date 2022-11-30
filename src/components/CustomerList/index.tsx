import { MouseEvent, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Customer } from "../../config/models/customer";
import ResultCard from "../ResultCard";
import styles from './style.module.scss'
type CustomerListProps = {
    data: []
}


function CustomerList({ data }: CustomerListProps) {
    const [nData, setNData] = useState(data);
    const { t } = useTranslation()


    useEffect(() => {
        setNData(data)
    }, [data])


    const onSortClick = (e: MouseEvent<HTMLElement>, key: string) => {
        const direction = e.currentTarget.getAttribute('sortBy') || "asc"
        const sortedData = direction === "asc" ? [...data].sort((a: any, b: any) => a[key] > b[key] ? -1 : 1) : [...data].sort((a: any, b: any) => a[key] < b[key] ? -1 : 1)
        e.currentTarget.setAttribute("sortBy", direction === 'asc' ? 'dsc' : 'asc')
        setNData(sortedData as any)

    }



    return (
        <>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th className={styles.columnName} onClick={(e) => onSortClick(e, "companyName")}>{(t("title.companyName"))}</th>
                        <th className={styles.columnName} onClick={(e) => onSortClick(e, "taxNumber")}>{(t("title.taxNumber"))}</th>
                        <th className={styles.columnName} onClick={(e) => onSortClick(e, "taxOffice")}>{(t("title.taxOffice"))}</th>
                        <th className={styles.columnName} onClick={(e) => onSortClick(e, "contactNumber")}>{(t("title.contactNumber"))}</th>
                    </tr>
                </thead>
                <tbody>
                    {nData.map((item: Customer) => {
                        return <ResultCard key={item.id} companyName={item.companyName} taxNumber={item.taxNumber} taxOffice={item.taxOffice} contactNumber={item.contactNumber} invoiceCount={item.invoiceCount} id={item.id} />
                    })}
                </tbody>
            </Table>
        </>
    );
}

export default CustomerList;