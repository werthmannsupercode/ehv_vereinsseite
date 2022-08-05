import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "../styles/UnsereLeistungenStyles.css";

const UnsereLeistungen = () => {
    return (<div>
        <Navbar />
        <div className="unsereleistungen">
            <h1>Unsere Leistungen</h1>
        </div>
        <Sidebar />
        <Footer />

    </div>);
}

export default UnsereLeistungen;