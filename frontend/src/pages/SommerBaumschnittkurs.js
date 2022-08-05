import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "../styles/SommerBaumschnittkursStyles.css";

const Satzung = () => {
    return (<div>
        <Navbar />
        <div className="sommerbaumschnittkurs">
            <h1>Sommer Baumschnittkurs</h1>
        </div>
        <Sidebar />
        <Footer />

    </div>);
}

export default Satzung;