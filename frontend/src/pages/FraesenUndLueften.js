import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import "../styles/FraesenUndLuftenStyles.css"

const FraesenUndLueften = () => {
    return (<div>
        <Navbar />
        <div className="fraesenundlueften">
            <h1>Fräsen und Lüften</h1>
        </div>
        <Sidebar />
        <Footer />
    </div>);
}

export default FraesenUndLueften;