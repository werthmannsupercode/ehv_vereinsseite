import Navbar from "../components/Navigation/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "../styles/Impressum.css";
import Blaumeise from "../images/Blaumeise.png"

const Impressum = () => {
    return (<div>
        <Navbar />
        <img src={Blaumeise} alt="Blaumeise Zeichnung" className="blaumeise" />
        <div className="impressum">
            <h1>Impressum</h1>
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>Eigenheimer-Vereinigung Waigolshausen-Theilheim e. V.</p>
            <p>Am Oberen Tor</p>
            <p>97534 Waigolshausen</p>
            <p>Vereinsregister: VR 774</p>
            <p>Registergericht: Amtsgericht Schweinfurt</p>
            <h3>Vertreten durch:</h3>
            <p>Karl-Heinz Rummel</p>
            <p>Helmut Werthmann</p>
            <h3>Kontakt</h3>
            <p>Telefon: +49 (0) 9722 3030 oder +49 (0)9722 4116</p>
            <p>E-Mail: ehv_waigolshausen@web.de</p>
            <h3>Postadresse</h3>
            <p>Sonnenstr. 15</p>
            <p>97534 Waigolshausen</p>
            <h3>Illustrationen:</h3>
            <p>A.Reich (✝︎)</p>
            <p>Es ist uns ein Anliegen, dass die Arbeit unseres ehemaligen Mitglieds nicht in Vergessenheit gerät. Viele Jahre war er unser Chronist und hat die Chroniken mit viel Liebe und künstlerischem Geschick verziert. Wir finden, dass diese Malereien und Zeichnungen nicht in unserem Archiv verstauben sollten. In dankbarer Erinnerung.</p>
            <h3>Redaktionell verantwortlich</h3>
            <p>Werthmann Michaela</p>
            <p>Hauptstr. 38</p>
            <p>97534 Waigolshausen</p>
            <h3>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h3>
            <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
            <h3>Haftung für Inhalte</h3>
            <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
            <h3>Haftung für Links</h3>
            <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
            <h3>Urheberrecht</h3>
            <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
                Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
            <h3>Quelle:</h3>
            <a href="https://www.e-recht24.de/impressum-generator.htm">https://www.e-recht24.de/impressum-generator.htm</a>
        </div>
        <Sidebar />
        <Footer />
    </div>);
}

export default Impressum;