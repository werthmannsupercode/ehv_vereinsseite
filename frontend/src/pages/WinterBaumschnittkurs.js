import Navbar from "../components/Navigation/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "../styles/WinterbaumschnittkursStyles.css"

const Winterbaumschnittkurs = () => {
    return (<div>
        <Navbar />
        <div className="winterbaumschnittkurs">
            <h1>Winter Baumschnittkurs</h1>
        </div>
        <Sidebar />
        <Footer />
    </div>);
}

export default Winterbaumschnittkurs;