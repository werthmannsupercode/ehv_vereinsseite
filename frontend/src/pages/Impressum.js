import Navbar from "../components/Navigation/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "../styles/Impressum.css";

const Impressum = () => {
    return (<div>
        <Navbar />
        <div className="impressum">
            <h1>Impressum</h1>
        </div>
        <Sidebar />
        <Footer />
    </div>);
}

export default Impressum;