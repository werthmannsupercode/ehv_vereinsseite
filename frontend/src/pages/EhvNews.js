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
import AussenbereichPutzaktion from "../images/Au├čenbereichPutzaktion.jpeg"
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
                <p><span>THE - 30.07.2022</span> Um 10 Uhr bei strahlendem Sonnenschein und angenehmen Temperaturen haben sich 9 interessierte Eigenheimer aufgemacht, um von Nicole Kuhn, unserer Referentin aus Werneck, alles ├╝ber den Obstbaumschnitt im Sommer zu lernen.</p>
                <p>Einige Teilnehmer waren bereits beim Winterbaumschnittkurs im M├Ąrz mit dabei und daher neugierig, was aus den damals geschnittenen B├Ąumen inzwischen geworden war. Deshalb startete der Kurs wieder auf dem Grundst├╝ck der Familie Helbig.</p>
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
                <p>Aufgrund der gro├čen Trockenheit in diesem Jahr wurden an den bereits im M├Ąrz geschnittenen B├Ąumen nur kleine Ausbesserungen vorgenommen. Viele Schnittstellen w├╝rden zu zus├Ątzlicher Verdunstung und Austrocknung der B├Ąume f├╝hren. Daher ist in diesem Jahr eher Vorsicht geboten.</p>
                <p>Was allerdings problemlos m├Âglich ist, ist die ÔÇ×WasserschosserÔÇť jetzt noch auszuschneiden. Bei unseren Exemplaren hatten sich allerdings gar nicht viele davon gebildet und die Teilnehmer und Nicole Kuhn waren mit der Entwicklung der B├Ąume seit M├Ąrz mehr als zufrieden.</p>
            </div>
            <div >
                <figure>
                    <img src={Altbaum} alt="Altbaum eink├╝rzen" />
                    <figcaption>Altbaum eink├╝rzen</figcaption>
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
                <p>Wir als Eigenheimer bedanken uns herzlich bei unserer Referentin Nicole Kuhn. Ihr Wissen und ihre praktische Erfahrung haben uns wieder viele neue Erkenntnisse gebracht und vor allem Lust darauf gemacht, sich selbst an den eigenen Obstb├Ąumen auszuprobieren und unsere Streuobstwiesen oder Hausb├Ąume richtig zu pflegen.</p>
            </div>
            <div className="gridNews">
                <p>Von besonderem ├Âkologischen Wert ist auch das Todholz bereits abgestorbener B├Ąume. Und manch schw├Ąchelnder Baum k├Ânnte durch einen entsprechenden Schnitt wieder stabilisiert werden. Alles das aber in diesem Jahr besser im Herbst, denn auch das Problem die B├Ąume in diesem Sommer ausreichend zu w├Ąssern wurde angesprochen und Tips zur richtigen Bew├Ąsserung von Nicole an die Teilnehmer weitergegeben.</p>
                <p>Ganz lieben Dank auch an die Familien Helbig und Rumpel und an alle interessierten Teilnehmer. Es war ein sch├Âner Tag!</p>
            </div>
        </div>
        {/* =====================ARTIKEL HELFERESSEN===================================== */}
        <div className="articleNews">
            <div className="articleImg">
                <img src={HalleHelferfest} alt="Apfelbaum im Sommer" />
                <h3>Helferessen Sommer 2022</h3>
            </div>
            <div className="gridNews">
                <p><span>WAI - 15.07.2022</span> 2 Jahre Pandemie. Unsere gemeinsamen Feste konnten seither nicht mehr stattfinden. F├╝r die Vorstandschaft des Eigenheimer Vereins war es daher wichtig, zumindest die aktiven Helfer einmal einzuladen und ihnen somit f├╝r ihre Hilfe ├╝ber die Jahre zu danken.</p>
                <p>Daher trafen sich Vorstandschaft und viele der Aktiven zu einem Sommerfest in kleinem Rahmen mit Gegrilltem, leckeren Salaten und k├╝hlen Getr├Ąnken. Unsere Halle wieder einmal belebt zu sehen, hat gut getan und macht Lust darauf auch wieder ├Âffentliche Veranstaltungen durchzuf├╝hren.</p>
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
                <p>Um unser Helferessen in einem angenehmen und gepflegten Rahmen abhalten zu k├Ânnen, war nach 2 Jahren, in denen unsere Halle ungenutzt blieb, auch einiges vorzubereiten. Und so haben wir uns im Vorfeld in verschiedenen Teams zu Putz- und Instandsetzungsaktionen zusammengefunden.</p>
                <p>Wasserleitungen und Stromanschl├╝sse wurden wieder in Betrieb genommen, Laub und Staub gekehrt, Spinnen gejagt und M├╝ll entsorgt. Am Ende erstrahlte unsere Halle wieder in altem Glanz. Allen Helfern bei den Vorbereitungen und auch nach dem Fest beim Aufr├Ąumen ganz lieben Dank!</p>
            </div>
        </div>
        {/* =====================ARTIKEL MITGLIEDEREHRUNG===================================== */}
        <div className="articleNews">
            <div className="articleImg">
                <img src={Ehrung} alt="Geehrte Mitglieder EHV 2022" />
                <h3>Ehrung langj├Ąhriger Mitglieder</h3>
            </div>
            <div className="gridNews2">
                <p><span>WAI - 29.04.2022</span> Mit leichter Versp├Ątung, aber mit genauso viel Herzblut danken wir nochmals auch hier auf unserer Seite unseren langj├Ąhrigen Mitgliedern f├╝r ihr Engagement in unserem Verein! ­čÄľ­čĺÉ.</p>
                <p>Sch├Ân, dass es euch gibt. Endlich konnten wir bei unserer Mitgliederversammlung auch wieder alle zusammen und pers├Ânlich Ehrungen durchf├╝hren.</p>
            </div>
        </div>
        {/* =====================ARTIKEL WINTERBAUMSCHNITTKURS===================================== */}
        <div className="articleNews">
            <div className="articleImg">
                <img src={TNWinter} alt="Teilnehmer im Winterbaumschnittkurs" />
                <h3>Winterbaumschnittkurs 2022</h3>
            </div>
            <div className="gridNews">
                <p><span>THE - 05.03.2022</span> Bei strahlendem Sonnenschein haben wir uns in diesem Jahr in Theilheim getroffen. Unserer Referentin war dieses Jahr zum ersten Mal Nicole Kuhn aus Werneck, Fachfrau mit jede Menge Erfahrung im Baumschnitt. Und so erhielten die Teilnehmer eine umfangreiche Einf├╝hrung in die wichtigsten Grunds├Ątze beim R├╝ckschnitt von B├Ąumen.</p>
                <p>Der alte Apfelbaum auf dem Grundst├╝ck von Familie Halbig bot fast alle Varianten von sehr alten, fast abgestorbenen Teilen bis hin zu kr├Ąftigen Neuaustrieben, die es zu ÔÇ×b├ĄndigenÔÇť galt. In reger Diskussion konnten die Teilnehmer das Vorgehen am Baum besprechen und anschlie├čend den eigentlichen R├╝ckschnitt beobachten.</p>
            </div>
            <div>
                <figure>
                    <img src={AlterbaumOrg} alt="alter Baum vor dem Schnitt" />
                    <figcaption>alter Baum vorher</figcaption>
                </figure>
                <figure>
                    <img src={Rueckschnittmenge} alt="zur├╝ckgeschnittene ├äste am Boden" />
                    <figcaption> </figcaption>
                </figure>
                <figure>
                    <img src={AlterbaumNeu} alt="alter Baum nach dem Schnitt" />
                    <figcaption>alter Baum nachher</figcaption>
                </figure>
            </div>
            <div className="gridNews">
                <p>Hierzu stellte Frau Kuhn auch die richtigen Werkzeuge vor; von der Astschere, der Hands├Ąge, dem elektrischen Hochentaster bis hin zur akkubetriebenen Handkettens├Ąge konnten die Baumschnittinteressierten die Werkzeuge gleich in Aktion erleben. Immer wieder gab Frau Kuhn auch Tipps aus ihrer beruflichen Erfahrung an die Gemeinschaft weiter und beantwortete spezielle R├╝ckfragen.</p>
                <p>Nachdem am alten Baum durch den R├╝ckschnitt bereits ca. ein Drittel an Astmaterial am Boden gesammelt lag, wurde der weitere R├╝ckschnitt auf das n├Ąchste Jahr verschoben. Im Anschluss konnten weitere Schnittma├čnahmen an jungen ÔÇ×Buschb├ĄumenÔÇť (Kirsche und Birne) gemeinsam durchgef├╝hrt werden, sodass bis zur Mittagszeit ein vielseitiges Schnittprogramm vorgestellt wurde.</p>
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
                <p>Alle Teilnehmer waren sich einig, den Erfolg der Schnittma├čnahmen beim folgenden Sommerschnitt weiter beobachten zu wollen. Wir verabredeten uns, auch den Sommerschnitt (speziell am vorhandenen Kirschbaum) auf dem Anwesen Halbig durchzuf├╝hren.</p>
                <p>Wir bedanken uns bei Frau Kuhn und dem Vorstand der Eigenheimer f├╝r den interessanten und praxisnahen Baumschnittkurs. Nicole Kuhn ├╝berraschte uns alle mit einem selbstgemachten Meisenkn├Âdel als kleines Pr├Ąsent. Wir freuen uns auf den n├Ąchsten Kurs im Sommer, zu dem jedermann wieder herzlich eingeladen ist.</p>
            </div>
        </div>
        <Sidebar />
        <Footer />
    </div>);
}

export default EhvNews;