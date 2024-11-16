import visaLogo from "../../assets/images/visa.png";
import mCardLogo from "../../assets/images/master-card.svg"

import "./credit-card.css";

function CreditCard({ className = "", card, bgColor, color }) {
    const { type, number, expirationMonth, expirationYear, bank, owner } = card;
    const dots = (<span dangerouslySetInnerHTML={{ __html: "&bull;&bull;&bull;&bull;" }} />)
    return (
        <div className={`d-flex rounded flex-column p-3 credit-card ${className}`} style={{
            backgroundColor: bgColor,
            color: color
        }}>
            <img className="align-self-end" src={type.toLowerCase() === "visa" ? visaLogo : mCardLogo} alt={type} />
            <div className="fs-3 align-self-center my-2">
                <span className="fw-bold">{dots} {dots} {dots}</span>
                <span className="fw-lighter">{number.substr(number.length -4)}</span>
            </div>
            <div className="d-flex gap-3 fw-lighter fs-xs">
                <span>Expires {expirationMonth}/{`${expirationYear}`.substr(2)}</span>
                <span>{bank}</span>
            </div>
            <div className="fw-lighter fs-xs">{owner}</div>
        </div>
    );
}
export default CreditCard;