import { Routes, Route } from "react-router-dom";
import './App.css';
import Startseite from "./pages/Startseite";
import MitgliedWerden from "./pages/MitgliedWerden";
import Jahresablauf from "./pages/Jahresablauf";
import AktivWerden from "./pages/AktivWerden";
import Impressum from "./pages/Impressum";
import Kontakt from "./pages/Kontakt";
import Lageplan from "./pages/Lageplan";
import Datenschutz from "./pages/Datenschutz";
import Satzung from "./pages/Satzung";
import Vorstand from "./pages/Vorstand";
import UnsereLeistungen from "./pages/UnsereLeistungen";
import WinterBaumschnittkurs from "./pages/WinterBaumschnittkurs";
import FraesenUndLueften from "./pages/FraesenUndLueften";
import Heizoelsammelbestellung from "./pages/Heizoelsammelbestellung";
import Mitgliederversammlung from "./pages/Mitgliederversammlung";
import SommerBaumschnittkurs from "./pages/SommerBaumschnittkurs";
import EhvNews from "./pages/EhvNews";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Startseite />} />
        <Route path="/mitgliedwerden" element={<MitgliedWerden />} />
        <Route path="/jahresablauf" element={<Jahresablauf />} />
        <Route path="/aktivwerden" element={<AktivWerden />} />
        <Route path="/satzung" element={<Satzung />} />
        <Route path="/vorstand" element={<Vorstand />} />
        <Route path="/unsereleistungen" element={<UnsereLeistungen />} />
        <Route path="/winterbaumschnittkurs" element={<WinterBaumschnittkurs />} />
        <Route path="/fraesenundlueften" element={<FraesenUndLueften />} />
        <Route path="/heizoelsammelbestellung" element={<Heizoelsammelbestellung />} />
        <Route path="/mitgliederversammlung" element={<Mitgliederversammlung />} />
        <Route path="/sommerbaumschnittkurs" element={<SommerBaumschnittkurs />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/lageplan" element={<Lageplan />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
        <Route path="/ehvnews" element={<EhvNews />} />
      </Routes>

    </div>
  );
}

export default App;
