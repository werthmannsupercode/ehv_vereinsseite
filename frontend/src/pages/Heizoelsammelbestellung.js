import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "../styles/HeizoelsammelbestellungStyles.css";

const Satzung = () => {
    return (<div>
        <Navbar />
        <div className="heizoelsammelbestellung">
            <h1>Heizölsammelbestellung</h1>
        </div>
        <Sidebar />
        <Footer />

    </div>);
}

export default Satzung;