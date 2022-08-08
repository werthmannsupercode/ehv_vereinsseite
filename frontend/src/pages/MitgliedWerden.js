import Navbar from "../components/Navigation/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "../styles/MitgliedWerdenStyles.css"

const MitgliedWerden = () => {
    return (<div>
        <Navbar />
        <div className="mitgliedwerden">
            <h1>Mitglied Werden</h1>
        </div>
        <Sidebar />
        <Footer />
    </div>);
}

export default MitgliedWerden;