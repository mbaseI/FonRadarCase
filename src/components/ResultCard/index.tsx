import { Customer } from "../../config/models/customer";
import { useNavigate } from "react-router-dom";



function ResultCard({ companyName, taxNumber, taxOffice, invoiceCount, id }: Customer) {
    const navigate = useNavigate();
    return (
        <>
            <tr style={{ cursor: 'pointer' }} onClick={() => navigate(`/detail/${id}`, { state: id })}>
                <td>{companyName}</td>
                <td>{taxNumber}</td>
                <td>{taxOffice}</td>
                <td>{invoiceCount}</td>
            </tr>
        </>
    );
}

export default ResultCard;