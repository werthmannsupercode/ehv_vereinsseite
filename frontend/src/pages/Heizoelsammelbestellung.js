import Navbar from "../components/Navigation/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "../styles/HeizoelsammelbestellungStyles.css";

const Satzung = () => {
    return (<div>
        <Navbar />
        <div className="heizoelsammelbestellung">
            <h1>Heiz√∂lsammelbestellung</h1>
        </div>
        <Sidebar />
        <Footer />

    </div>);
}

export default Satzung;