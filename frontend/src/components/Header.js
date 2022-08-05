import "../styles/HaederStyles.css"
import Luftbild from "../images/luftbild_suedwest-1.jpeg";

const Header = () => {
    return (<header style={{ backgroundImage: `url(${Luftbild})` }}>
        <h2>Willkommen</h2>
        <h3>bei den Eigenheimern</h3>
        <p>Wir sind der Verein für alle Hausbesitzer, Häuslebauer und Gartenfreunde in den Orten Waigolshausen,
            Theilheim und Umgebung.</p>
        <p>Wir hoffen Euch auf den folgenden Seiten über unseren Verein, unsere Leistungen und unsere Aktivitäten zu
            informieren und auf dem Laufenden zu halten.</p>
    </header>);
}

export default Header;