import Navbar from "../components/Navigation/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ApfelbaumImSommer from "../images/Apfelbaum im Sommer.JPG"
import ApfelbaumVorher from "../images/Apfelbaum vor dem Schnitt.jpg"
import ApfelbaumNachher from "../images/Apfelbaum nach dem Schnitt.jpg"
import Altbaum from "../images/DSC_0694.JPG"
import Jungbaum from "../images/DSC_0695.JPG"
import BaumSanierung from "../images/DSC_0697.JPG"
import Ehrung from "../images/ehrung_mitglieder_ehv_waigo_theilheim_2022 (1).jpg"
import AlterbaumNeu from "../images/alterbaum_neu2.jpg"
import AlterbaumOrg from "../images/alterbaum_org2.jpg"
import Rueckschnittmenge from "../images/rueckschnittmenge.jpg"
import StrauchbaumNeu from "../images/strauchbaum_neu1.jpg"
import StrauchbaumOrg from "../images/strauchbaum_org.jpg"
import TNWinter from "../images/img_20220305_102154_8.jpg"
import NicoleKuhn from "../images/img_20220305_101822_4.jpg"
import BratwurststandPutzaktion from "../images/BratwurststandPutzaktion.jpeg"
import AussenbereichPutzaktion from "../images/AußenbereichPutzaktion.jpeg"
import HalleHelferfest from "../images/HalleHelferfest.jpeg"
import Hallenputz from "../images/Hallenputz.jpeg"

import "./../styles/EhvNewsStyles.css";

const EhvNews = () => {
    return (<div className="news">
        <Navbar />
        <h1 className="newsHaedline">EIGENHEIMER AKTUELL</h1>
        <article className="newsSubtitle">
            <h2>2022</h2>
            <h2>NACHRICHTEN UND BERICHTE VON UNSEREN VERANSTALTUNGEN</h2>
            <h2>FIRST EDITION</h2>
        </article>
        {/* =====================ARTIKEL SOMMERBAUMSCHNITTKURS===================================== */}
        <div className="articleNews">
            <div className="articleImg">
                <img src={ApfelbaumImSommer} alt="Apfelbaum im Sommer" />
                <h3>Sommerbaumschnittkurs 2022</h3>
            </div>
            <div className="gridNews">
                <p><span>THE - 30.07.2022</span> Um 10 Uhr bei strahlendem Sonnenschein und angenehmen Temperaturen haben sich 9 interessierte Eigenheimer aufgemacht, um von Nicole Kuhn, unserer Referentin aus Werneck, alles über den Obstbaumschnitt im Sommer zu lernen.</p>
                <p>Einige Teilnehmer waren bereits beim Winterbaumschnittkurs im März mit dabei und daher neugierig, was aus den damals geschnittenen Bäumen inzwischen geworden war. Deshalb startete der Kurs wieder auf dem Grundstück der Familie Helbig.</p>
            </div>
            <div>
                <figure>
                    <img src={ApfelbaumVorher} alt="Apfelbaum vor dem Schnitt" />
                    <figcaption>Apfelbaum vor dem Schnitt</figcaption>
                </figure>
                <figure>
                    <img src={ApfelbaumNachher} alt="Apfelbaum nach dem Schnitt" />
                    <figcaption>Apfelbaum nach dem Schnitt</figcaption>
                </figure>
                <figure>
                    <img src={ApfelbaumImSommer} alt="Apfelbaum im Sommer" />
                    <figcaption>Apfelbaum im Sommer</figcaption>
                </figure>
            </div>
            <div className="gridNews">
                <p>Aufgrund der großen Trockenheit in diesem Jahr wurden an den bereits im März geschnittenen Bäumen nur kleine Ausbesserungen vorgenommen. Viele Schnittstellen würden zu zusätzlicher Verdunstung und Austrocknung der Bäume führen. Daher ist in diesem Jahr eher Vorsicht geboten.</p>
                <p>Was allerdings problemlos möglich ist, ist die „Wasserschosser“ jetzt noch auszuschneiden. Bei unseren Exemplaren hatten sich allerdings gar nicht viele davon gebildet und die Teilnehmer und Nicole Kuhn waren mit der Entwicklung der Bäume seit März mehr als zufrieden.</p>
            </div>
            <div >
                <figure>
                    <img src={Altbaum} alt="Altbaum einkürzen" />
                    <figcaption>Altbaum einkürzen</figcaption>
                </figure>
                <figure>
                    <img src={Jungbaum} alt="Jungbaum erziehen" />
                    <figcaption>Jungbaum erziehen</figcaption>
                </figure>
                <figure>
                    <img src={BaumSanierung} alt="Baum sanieren" />
                    <figcaption>Baum sanieren</figcaption>
                </figure>
            </div>
            <div className="gridNews">
                <p>Der zweite Teil des Kurses fand auf der Streuobstwiese von Elke Rumpel statt. Dort gab es wunderbare Beispiele vom Altbaum bis zum selbst gezogenen Jungbaum und auch die Problematik alte Streuobstwiesen zu erhalten und zu bewirtschaften wurde viel diskutiert.</p>
                <p>Wir als Eigenheimer bedanken uns herzlich bei unserer Referentin Nicole Kuhn. Ihr Wissen und ihre praktische Erfahrung haben uns wieder viele neue Erkenntnisse gebracht und vor allem Lust darauf gemacht, sich selbst an den eigenen Obstbäumen auszuprobieren und unsere Streuobstwiesen oder Hausbäume richtig zu pflegen.</p>
            </div>
            <div className="gridNews">
                <p>Von besonderem ökologischen Wert ist auch das Todholz bereits abgestorbener Bäume. Und manch schwächelnder Baum könnte durch einen entsprechenden Schnitt wieder stabilisiert werden. Alles das aber in diesem Jahr besser im Herbst, denn auch das Problem die Bäume in diesem Sommer ausreichend zu wässern wurde angesprochen und Tips zur richtigen Bewässerung von Nicole an die Teilnehmer weitergegeben.</p>
                <p>Ganz lieben Dank auch an die Familien Helbig und Rumpel und an alle interessierten Teilnehmer. Es war ein schöner Tag!</p>
            </div>
        </div>
        {/* =====================ARTIKEL HELFERESSEN===================================== */}
        <div className="articleNews">
            <div className="articleImg">
                <img src={HalleHelferfest} alt="Apfelbaum im Sommer" />
                <h3>Helferessen Sommer 2022</h3>
            </div>
            <div className="gridNews">
                <p><span>WAI - 15.07.2022</span> 2 Jahre Pandemie. Unsere gemeinsamen Feste konnten seither nicht mehr stattfinden. Für die Vorstandschaft des Eigenheimer Vereins war es daher wichtig, zumindest die aktiven Helfer einmal einzuladen und ihnen somit für ihre Hilfe über die Jahre zu danken.</p>
                <p>Daher trafen sich Vorstandschaft und viele der Aktiven zu einem Sommerfest in kleinem Rahmen mit Gegrilltem, leckeren Salaten und kühlen Getränken. Unsere Halle wieder einmal belebt zu sehen, hat gut getan und macht Lust darauf auch wieder öffentliche Veranstaltungen durchzuführen.</p>
            </div>
            <div>
                <figure>
                    <img src={BratwurststandPutzaktion} alt="Bratwurststand an der Vereinshalle nach der Putzaktion" />
                    <figcaption>Vorbereitung des Grillstands</figcaption>
                </figure>
                <figure>
                    <img src={Hallenputz} alt="Vereinshalle nach der Putzaktion" />
                    <figcaption>Halle nach der Putzaktion</figcaption>
                </figure>
                <figure>
                    <img src={AussenbereichPutzaktion} alt="Aussenbereich an der Vereinshalle nach der Putzaktion" />
                    <figcaption>Aussenbereich hinter der Vereinshalle</figcaption>
                </figure>
            </div>
            <div className="gridNews2">
                <p>Um unser Helferessen in einem angenehmen und gepflegten Rahmen abhalten zu können, war nach 2 Jahren, in denen unsere Halle ungenutzt blieb, auch einiges vorzubereiten. Und so haben wir uns im Vorfeld in verschiedenen Teams zu Putz- und Instandsetzungsaktionen zusammengefunden.</p>
                <p>Wasserleitungen und Stromanschlüsse wurden wieder in Betrieb genommen, Laub und Staub gekehrt, Spinnen gejagt und Müll entsorgt. Am Ende erstrahlte unsere Halle wieder in altem Glanz. Allen Helfern bei den Vorbereitungen und auch nach dem Fest beim Aufräumen ganz lieben Dank!</p>
            </div>
        </div>
        {/* =====================ARTIKEL MITGLIEDEREHRUNG===================================== */}
        <div className="articleNews">
            <div className="articleImg">
                <img src={Ehrung} alt="Geehrte Mitglieder EHV 2022" />
                <h3>Ehrung langjähriger Mitglieder</h3>
            </div>
            <div className="gridNews2">
                <p><span>WAI - 29.04.2022</span> Mit leichter Verspätung, aber mit genauso viel Herzblut danken wir nochmals auch hier auf unserer Seite unseren langjährigen Mitgliedern für ihr Engagement in unserem Verein! 🎖💐.</p>
                <p>Schön, dass es euch gibt. Endlich konnten wir bei unserer Mitgliederversammlung auch wieder alle zusammen und persönlich Ehrungen durchführen.</p>
            </div>
        </div>
        {/* =====================ARTIKEL WINTERBAUMSCHNITTKURS===================================== */}
        <div className="articleNews">
            <div className="articleImg">
                <img src={TNWinter} alt="Teilnehmer im Winterbaumschnittkurs" />
                <h3>Winterbaumschnittkurs 2022</h3>
            </div>
            <div className="gridNews">
                <p><span>THE - 05.03.2022</span> Bei strahlendem Sonnenschein haben wir uns in diesem Jahr in Theilheim getroffen. Unserer Referentin war dieses Jahr zum ersten Mal Nicole Kuhn aus Werneck, Fachfrau mit jede Menge Erfahrung im Baumschnitt. Und so erhielten die Teilnehmer eine umfangreiche Einführung in die wichtigsten Grundsätze beim Rückschnitt von Bäumen.</p>
                <p>Der alte Apfelbaum auf dem Grundstück von Familie Halbig bot fast alle Varianten von sehr alten, fast abgestorbenen Teilen bis hin zu kräftigen Neuaustrieben, die es zu „bändigen“ galt. In reger Diskussion konnten die Teilnehmer das Vorgehen am Baum besprechen und anschließend den eigentlichen Rückschnitt beobachten.</p>
            </div>
            <div>
                <figure>
                    <img src={AlterbaumOrg} alt="alter Baum vor dem Schnitt" />
                    <figcaption>alter Baum vorher</figcaption>
                </figure>
                <figure>
                    <img src={Rueckschnittmenge} alt="zurückgeschnittene Äste am Boden" />
                    <figcaption> </figcaption>
                </figure>
                <figure>
                    <img src={AlterbaumNeu} alt="alter Baum nach dem Schnitt" />
                    <figcaption>alter Baum nachher</figcaption>
                </figure>
            </div>
            <div className="gridNews">
                <p>Hierzu stellte Frau Kuhn auch die richtigen Werkzeuge vor; von der Astschere, der Handsäge, dem elektrischen Hochentaster bis hin zur akkubetriebenen Handkettensäge konnten die Baumschnittinteressierten die Werkzeuge gleich in Aktion erleben. Immer wieder gab Frau Kuhn auch Tipps aus ihrer beruflichen Erfahrung an die Gemeinschaft weiter und beantwortete spezielle Rückfragen.</p>
                <p>Nachdem am alten Baum durch den Rückschnitt bereits ca. ein Drittel an Astmaterial am Boden gesammelt lag, wurde der weitere Rückschnitt auf das nächste Jahr verschoben. Im Anschluss konnten weitere Schnittmaßnahmen an jungen „Buschbäumen“ (Kirsche und Birne) gemeinsam durchgeführt werden, sodass bis zur Mittagszeit ein vielseitiges Schnittprogramm vorgestellt wurde.</p>
            </div>
            <div >
                <figure>
                    <img src={StrauchbaumOrg} alt="Strauchbaum vor dem Schnitt" />
                    <figcaption>Strauchbaum vorher</figcaption>
                </figure>
                <figure>
                    <img src={NicoleKuhn} alt="Referentin des Baumschnittkurses Nicole Kuhn" />
                    <figcaption>Referentin Nicole Kuhn</figcaption>
                </figure>
                <figure>
                    <img src={StrauchbaumNeu} alt="Strauchbaum nach dem Schnitt" />
                    <figcaption>Strauchbaum nachher</figcaption>
                </figure>
            </div>
            <div className="gridNews2">
                <p>Alle Teilnehmer waren sich einig, den Erfolg der Schnittmaßnahmen beim folgenden Sommerschnitt weiter beobachten zu wollen. Wir verabredeten uns, auch den Sommerschnitt (speziell am vorhandenen Kirschbaum) auf dem Anwesen Halbig durchzuführen.</p>
                <p>Wir bedanken uns bei Frau Kuhn und dem Vorstand der Eigenheimer für den interessanten und praxisnahen Baumschnittkurs. Nicole Kuhn überraschte uns alle mit einem selbstgemachten Meisenknödel als kleines Präsent. Wir freuen uns auf den nächsten Kurs im Sommer, zu dem jedermann wieder herzlich eingeladen ist.</p>
            </div>
        </div>
        <Sidebar />
        <Footer />
    </div>);
}

export default EhvNews;