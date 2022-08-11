import Navbar from "../components/Navigation/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "../styles/UnsereLeistungenStyles.css";
import Blumengirlande from "../images/Blumengirlande.png";

const UnsereLeistungen = () => {
    return (<div>
        <Navbar />
        <div className="unsereleistungen">
            <h1>Unsere Leistungen</h1>
            <div>
                <p>Über den Eigenheimerverband Bayern e.V. gibt es u.a. folgende Leistungen für unsere Mitglieder:</p>
                <ul>
                    <li>Bauherren-Haftpflichtversicherung</li>
                    <li>Haus- und Grundstückshaftpflichtversicherung</li>
                    <li>Günstige, maßgeschneiderte Zusatzversicherungen</li>
                    <li>Beratung für Bauherren</li>
                    <li>Gartenfachliche Beratung</li>
                    <li>Rechtsberatung</li>
                    <li>Zeitschrift „Eigenheimer Magazin“</li>
                    <li>Interessenvertretung der Eigenheimbesitzer</li>
                    <li>Einkaufsvergünstigungen</li>
                </ul>
            </div>
            <img src={Blumengirlande} alt="Blumengirlande" />
        </div>
        <Sidebar />
        <Footer />

    </div>);
}

export default UnsereLeistungen;