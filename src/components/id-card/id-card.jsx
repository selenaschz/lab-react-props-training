import Panel from "../ui/panel/panel";

function IdCard({ className = "", firstName, lastName, gender, height, birth, picture }) {
    
    return (
        <Panel className={className} >
            <img className="img-fluid" src={picture} alt={firstName} />
            <ul className="list-unstyled mb-0">
                <li><strong>First Name:</strong> {firstName}</li>
                <li><strong>Last Name:</strong> {lastName}</li>
                <li><strong>Gender:</strong> {gender}</li>
                <li><strong>Height:</strong> {(height / 100).toFixed(2)}m</li>
                <li><strong>Birth:</strong> {birth.toDateString()}</li>
            </ul>
        </Panel>
    );
}

export default IdCard;