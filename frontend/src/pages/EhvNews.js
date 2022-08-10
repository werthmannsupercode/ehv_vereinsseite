import Navbar from "../components/Navigation/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

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
        <Sidebar />
        <Footer />
    </div>);
}

export default EhvNews;