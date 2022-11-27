import { Customer } from "../../config/models/customer";



function ResultCard({ companyName, taxNumber, taxOffice, contactNumber }: Customer) {
    return (
        <>
            <tr>
                <td>{companyName}</td>
                <td>{taxNumber}</td>
                <td>{taxOffice}</td>
                <td>{contactNumber}</td>
            </tr>
        </>

    );
}

export default ResultCard;