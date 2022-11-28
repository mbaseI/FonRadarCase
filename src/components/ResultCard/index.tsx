import { Customer } from "../../config/models/customer";



function ResultCard({ companyName, taxNumber, taxOffice, invoiceCount }: Customer) {
    return (
        <>
            <tr >
                <td>{companyName}</td>
                <td>{taxNumber}</td>
                <td>{taxOffice}</td>
                <td>{invoiceCount}</td>
            </tr>
        </>

    );
}

export default ResultCard;