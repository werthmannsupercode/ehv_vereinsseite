import Navbar from "../components/Navigation/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "../styles/MitgliedWerdenStyles.css";
import { saveAs } from "file-saver";


const MitgliedWerden = () => {

    const saveFile = () => {
        saveAs(
            "https://drive.google.com/file/d/11-XaKyZ0mrvB78-Rn167p112egreLJdi/view?usp=sharing",
            "aktive-mitglieder-beitrittserklaerung.pdf"
        );
    };

    const saveFile2 = () => {
        saveAs(
            "https://drive.google.com/file/d/1ItLHJZQpemp4kC9m121ug-Y5XeQqIvfp/view?usp=sharing",
            "foerdermitglieder-beitrittserklaerung.pdf"
        );
    };
    return (<div>
        <Navbar />
        <div className="mitgliedwerden">
            <h1>Mitglied werden</h1>
            <p>Schon für einen geringen Jahresbetrag könnt ihr Mitglied in unserem großen Interessenverband für Eigenheimer werden! Je höher unsere Mitgliederzahl ist, um so wirkungsvoller kann die Interessenvertretung sein.</p>
            <p>Eine Mitgliedschaft ist entweder als Einzelmitglied direkt beim Verband in München oder als Mitglied in unserer Ortsvereinigung möglich.</p>
            <p>Alle auf dieser Website beschriebenen Leistungen sind in einem sehr geringen Mitgliedsbeitrag enthalten. Bei uns direkt kostet der <span>Beitrag jährlich 30,00€</span>. Einzelmitglieder, die keiner Ortsvereinigung angehören, leisten ihren Beitrag direkt an die Geschäftsstelle des Verbandes. Dieser Mitgliedsbeitrag beträgt jährlich 35,00 Euro.</p>
            <p>Die Beitrittserklärung zu den Eigenheimern Waigolshausen Theilheim, könnt ihr hier herunterladen:</p>
            <div className="downloadBeitrittserklaerungen">
                <div>
                    <h2>Beitrittserklärung für aktive Mitglieder:</h2>
                    <button onClick={saveFile} className="btn">Herunterladen</button>
                </div>
                <div>
                    <h2>Beitrittserklärung für Fördermitglieder:</h2>
                    <button onClick={saveFile2} className="btn">Herunterladen</button>
                </div>
            </div>
            <p>Natürlich haben wir das Formular auch in Papierform. Bei Interesse an einer Mitgliedschaft, wendet euch einfach an unsere Vorstände:</p>
            <div className="kontaktVorstaende2">
                <div>
                    <h2>Karl-Heinz Rummel</h2>
                    <p>Sonnenstr. 15</p>
                    <p>97534 Waigolshausen</p>
                    <p>09722-3030</p>
                </div>
                <div>
                    <h2>Helmut Werthmann</h2>
                    <p>Frühlingstr. 2</p>
                    <p>97534 Waigolshausen</p>
                    <p>09722-4116</p>
                </div>
            </div>
            <p>Hier könnt ihr natürlich auch die Beitrittserklärungen einfach bei einem Spaziergang einwerfen, per Post einsenden, oder persönlich übergeben.</p>
            <p><span>Wir freuen uns sehr über neue Mitglieder und laden Euch alle ein, ob Mitglieder oder nicht, euch aktiv in unserem Verein mit einzubringen</span>, Ideen, Tatendrang und Einsatzfreude sind uns sehr willkommen!</p>
            <p>Bei Interesse an einer Einzelmitgliedschaft über den Ei­gen­hei­mer­ver­band Bayern e.V. in München gibt es dort auf der Internetseite alle wichtigen Informationen. <a href="https://www.eigenheimerverband.de/mitglied-werden/">Bitte diesem Link folgen.</a></p>
        </div>
        <Sidebar />
        <Footer />
    </div>);
}

export default MitgliedWerden;