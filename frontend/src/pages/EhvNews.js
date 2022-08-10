import Navbar from "../components/Navigation/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import ApfelbaumImSommer from "../images/Apfelbaum im Sommer.JPG"
import ApfelbaumVorher from "../images/Apfelbaum vor dem Schnitt.jpg"
import ApfelbaumNachher from "../images/Apfelbaum nach dem Schnitt.jpg"

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
        <div className="articleNews">
            <div className="articleImg">
                <img src={ApfelbaumImSommer} alt="Apfelbaum im Sommer" />
                <h3>Sommerbaumschnittkurs 2022</h3>
            </div>
            <div>
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
            <div>
                <p>Aufgrund der großen Trockenheit in diesem Jahr wurden an den bereits im März geschnittenen Bäumen nur kleine Ausbesserungen vorgenommen. Viele Schnittstellen würden zu zusätzlicher Verdunstung und Austrocknung der Bäume führen. Daher ist in diesem Jahr eher Vorsicht geboten.</p>
                <p>Was allerdings problemlos möglich ist, ist die „Wasserschosser“ jetzt noch auszuschneiden. Bei unseren Exemplaren hatten sich allerdings gar nicht viele davon gebildet und die Teilnehmer und Nicole Kuhn waren mit der Entwicklung der Bäume seit März mehr als zufrieden.</p>
            </div>
            <p>Beim „Busch“birnbaum hatten sich einige Konkurrenzzweige zur Spitze entwickelt, die eingekürzt werden sollten.</p>
            <p>Der zweite Teil des Kurses fand auf der Streuobstwiese von Elke Rumpel statt. Dort gab es wunderbare Beispiele vom Altbaum bis zum selbst gezogenen Jungbaum und auch die Problematik alte Streuobstwiesen zu erhalten und zu bewirtschaften wurde viel diskutiert.</p>
            <p>Von besonderem ökologischen Wert ist auch das Todholz bereits abgestorbener Bäume. Und manch schwächelnder Baum könnte durch einen entsprechenden Schnitt wieder stabilisiert werden. Alles das aber in diesem Jahr besser im Herbst, denn auch das Problem die Bäume in diesem Sommer ausreichend zu wässern wurde angesprochen und Tips zur richtigen Bewässerung von Nicole an die Teilnehmer weitergegeben.</p>
            <p>Wir als Eigenheimer bedanken uns herzlich bei unserer Referentin Nicole Kuhn. Ihr Wissen und ihre praktische Erfahrung haben uns wieder viele neue Erkenntnisse gebracht und vor allem Lust darauf gemacht, sich selbst an den eigenen Obstbäumen auszuprobieren und unsere Streuobstwiesen oder Hausbäume richtig zu pflegen.</p>
            <p>Ganz lieben Dank auch an die Familien Helbig und Rumpel und an alle interessierten Teilnehmer. Es war ein schöner Tag!</p>
        </div>
        <Sidebar />
        <Footer />
    </div>);
}

export default EhvNews;