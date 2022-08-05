import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';
import '../styles/SidebarStyles.css';

const Sidebar = () => {
    return (
        <aside>
            <a href={"https://www.facebook.com/EigenheimerWaigolshausenTheilheim"}><FontAwesomeIcon icon={faFacebook} /></a>
            <Link to="/ehvnews"><FontAwesomeIcon icon={faNewspaper} /></Link>
        </aside>
    );
}

export default Sidebar;