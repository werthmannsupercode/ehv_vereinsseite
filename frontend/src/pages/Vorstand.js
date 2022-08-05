import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Schmetterling2 from "../images/Schmetterling2.png"
import "../styles/VorstandStyles.css";

const Vorstand = () => {
    return (<div>
        <Navbar />
        <div className="vorstand">
            <h1>Vorstand</h1>
            <p className="absatz">Unser Verein existiert dank der Mithilfe vieler einzelner Personen. Ohne diese Gemeinschaftsleistung gäbe es uns nicht. Danke allen aktiven Mitgliedern!</p>
            <p className="absatz">Offiziell vertreten werden wir durch folgenden Vorstand:</p>
            <div className="vorstaende">
                <div>
                    <h2>Karl-Heinz Rummel</h2>
                    <p>Vorsitzender Eigenheimer</p>
                    <p><span>seit 1983</span> Vereinsmitglied</p>
                    <p><span>2001 – 2009</span> Schriftführer</p>
                    <p><span>2009 – 2017</span> Revisor</p>
                    <p><span>seit 2017</span> Vorsitzender</p>
                </div>
                <div>
                    <h2>Helmut Werthmann</h2>
                    <p>Vorsitzender</p>
                    <p><span>seit 1996</span> Vereinsmitglied</p>
                    <p><span>1997-2013</span> 2. Vorstand</p>
                    <p><span>seit 2013</span> Vorsitzender</p>
                </div>
                <div>
                    <h2>Thomas Stanjek</h2>
                    <p>Kassier</p>
                </div>
            </div>
            <p className="absatz2">In unserem Vorstand gibt es Platz für bis zu 4 Personen. Das ist gut so! Denn wir möchten den Verein fit für die Zukunft machen und jungen Mitgliedern einen sanften Einstieg in die Vorstandschaft ermöglichen.</p>
            <p className="absatz2">Wenn du also Interesse hast, unseren Verein administrativ mitzugestalten, dann sprich uns an. Für Engagement gibt es bei uns immer einen freien Platz!</p>
            <img src={Schmetterling2} alt="Schmetterling" className="schmetterlingVorstand" />
        </div>
        <Sidebar />
        <Footer />

    </div>);
}

export default Vorstand;