import { Link } from "react-router-dom";
import '../styles/FooterStyles.css';

const Footer = () => {
    return (<footer>
        <ul>
            {/* <li><Link to="/lageplan">Lageplan</Link></li> */}
            <li><Link to="/kontakt">Kontakt</Link></li>
            <li><Link to="/impressum">Impressum</Link></li>
            <li><Link to="/datenschutz">Datenschutz</Link></li>
        </ul>
    </footer>);
}

export default Footer;