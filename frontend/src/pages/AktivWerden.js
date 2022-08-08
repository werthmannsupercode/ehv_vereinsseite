import Navbar from "../components/Navigation/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Schmetterling from "../images/schmetterling1.png";
import '../styles/AktivWerdenStyles.css';

const AktivWerden = () => {
    return (<div>
        <Navbar />
        <div className="aktivWerden">
            <div>
                <h1>Aktiv werden</h1>
                <h2>Sommerfest 2.0</h2>
                <p>Schon einige Jahre hat unser Garten- und Hallenfest nicht mehr stattgefunden… Neben der Corona-Pandemie gibt es dafür auch noch einen weiteren wichtigen Grund: freiwillige Helfer!</p>
                <p>Vielleicht hast du Lust uns dabei zu helfen wieder ein Sommerfest durchzuführen?</p>
                <p>Wir würden uns freuen, wenn du gemeinsam mit uns neue Ideen entwickelst und uns mit Tatkraft bei der Umsetzung unterstützt. Nur gemeinsam können wir ein lebendiges Vereinsleben gestalten.</p>
                <h2>Andere Idee?</h2>
                <p>Du hast eine andere Idee, mit der du unseren Verein bereichern möchtest? Lass uns das unbedingt wissen!!</p>
                <p>Bei Interesse bitte melden bei:</p>
                <p>Karl-Heinz Rummel (09722-3030) oder Helmut Werthmann (09722-4116)</p>
            </div>
            <img src={Schmetterling} alt="Schmetterling gemalt von A.Reich" />
        </div>
        <Sidebar />
        <Footer />
    </div>);
}

export default AktivWerden;