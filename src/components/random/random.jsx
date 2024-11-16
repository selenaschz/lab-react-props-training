import Panel from "../ui/panel/panel";

function Random({ className = "", min, max }) {
    const randomNumber = Math.floor(Math.random() * (max - min) + min);
    return (
        <Panel className={className}>
            Random value between {min} and {max} =&gt; {randomNumber}
        </Panel>
        
    );
}

export default Random;