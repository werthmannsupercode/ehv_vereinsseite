import Navbar from "../components/Navigation/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "../styles/MitgliederversammlungStyles.css";

const Mitgliederversammlung = () => {
    return (<div>
        <Navbar />
        <div className="mitgliederversammlung">
            <h1>Mitgliederversammlung</h1>
        </div>
        <Sidebar />
        <Footer />

    </div>);
}

export default Mitgliederversammlung;