import { MouseEvent, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Customer } from "../../config/models/customer";
import ResultCard from "../ResultCard";
import styles from './style.module.scss'
type CustomerListProps = {
    data: Customer[]
}


function CustomerList({ data }: CustomerListProps) {
    const [nData, setNData] = useState<Customer[]>(data);
    const { t } = useTranslation()


    useEffect(() => {
        setNData(data)
    }, [data])


    const onSortClick = (e: MouseEvent<HTMLElement>, key: string) => {
        const direction = e.currentTarget.getAttribute('sortBy') || "asc"
        const sortedData = direction === "asc" ? [...data].sort((a: any, b: any) => a[key as keyof any] > b[key as keyof any] ? -1 : 1) :
            [...data].sort((a: any, b: any) => a[key as any] < b[key as any] ? -1 : 1)
        e.currentTarget.setAttribute("sortBy", direction === 'asc' ? 'dsc' : 'asc')
        setNData(sortedData as Customer[])
    }



    return (
        <>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th className={styles.columnName} onClick={(e) => onSortClick(e, "companyName")}>{(t("title.companyName"))}&nbsp;&#8593;&#8595;</th>
                        <th className={styles.columnName} onClick={(e) => onSortClick(e, "taxNumber")}>{(t("title.taxNumber"))}&nbsp;&#8593;&#8595;</th>
                        <th className={styles.columnName} onClick={(e) => onSortClick(e, "taxOffice")}>{(t("title.taxOffice"))}&nbsp;&#8593;&#8595;</th>
                        <th className={styles.columnName} onClick={(e) => onSortClick(e, "invoiceCount")}>{(t("title.invoiceCount"))}&nbsp;&#8593;&#8595;</th>
                        <th className={styles.columnName} onClick={(e) => onSortClick(e, "contactNumber")}>{(t("title.contactNumber"))}&nbsp;&#8593;&#8595;</th>
                    </tr>
                </thead>
                <tbody>
                    {nData.map((item: Customer) => {
                        return <ResultCard key={item.id} companyName={item.companyName} taxNumber={item.taxNumber} taxOffice={item.taxOffice} invoiceCount={item.invoiceCount} contactNumber={item.contactNumber} id={item.id} />
                    })}
                </tbody>
            </Table>
        </>
    );
}

export default CustomerList;