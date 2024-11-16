function Greetings({ lang, children }) {
    let greet = '';
    switch (lang) {
        case 'de':
            greet = 'Hallo'
            break;
        case 'en':
            greet = 'Hello'
            break;
        case 'es':
            greet = 'Holi'
            break;
        case 'fr':
            greet = 'Bonjour'
            break;
        default:
            greet = 'Hello'
            break;
    }
    return (
        <div className="border border-black p-1"> {greet} {children}</div>
    );
}

export default Greetings;