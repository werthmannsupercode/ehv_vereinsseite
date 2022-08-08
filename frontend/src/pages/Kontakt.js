import Navbar from "../components/Navigation/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
// import Map from "../components/Map/Map";
import { useState } from "react";
import { apiBaseUrl } from "./../api";
import "./../styles/Kontakt.css";

const Kontakt = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [text, setText] = useState("")
    const [phone, setPhone] = useState("")
    const [showPopUpText, setShowPopUpText] = useState(false)
    const [showPopUpName, setShowPopUpName] = useState(false)
    const [showPopUpEmail, setShowPopUpEmail] = useState(false)
    const [showPopUpSuccess, setShowPopUpSuccess] = useState(false)
    const [showPopUpNoSend, setShowPopUpNoSend] = useState(false)

    function handleErrors(response) {
        if (!response.ok) {
            setShowPopUpNoSend(!showPopUpNoSend)
            return
        }
        else {
            return setShowPopUpSuccess(true), setName(""), setText(""), setEmail(""), setPhone("");
        }
    }

    const sendNewRequest = (e) => {
        e.preventDefault();
        if (name.length === 0) {
            setShowPopUpName(!showPopUpName)
            return
        }
        if (email.indexOf("@") === -1 || email.length === 0) {
            setShowPopUpEmail(!showPopUpEmail)
            return
        }
        if (text.length === 0) {
            setShowPopUpText(!showPopUpText)
            return
        }
        else {
            fetch(apiBaseUrl + "/kontaktanfragen/neueanfrage", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name,
                    email,
                    text,
                    phone
                })
            }).then(handleErrors)
                .then(res => res.json())
                .catch((error) => {
                    console.log(error)
                })
        }
    }


    return (<div>
        <Navbar />
        <div>
            <h1 className="h1Kontakt">Hallo, schön, dass du da bist. Wir freuen uns von dir zu hören. Schicke uns einfach eine Nachricht.</h1>
            <form>
                <div className="firstBlock">
                    <div>
                        <label htmlFor="name" className="labelKontakt">NAME</label>
                        <input type="text" name="name" id="name" placeholder="Gib hier deinen Namen ein." value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="email" className="labelKontakt">EMAIL ADDRESSE</label>
                        <input type="email" id="email" name="email" placeholder="Gib hier deine Mailaddresse ein." value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className="secondBlock">
                    <label htmlFor="phone" className="labelKontakt">TELEFONNUMMER</label>
                    <input type="text" name="phone" id="phone" placeholder="Gib hier deine Telefonnummer ein." value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className="thirdBlock">
                    <label htmlFor="nachricht" className="labelKontakt">NACHRICHT</label>
                    <textarea name="nachricht" id="nachricht" cols="30" rows="10" value={text} onChange={(e) => setText(e.target.value)} placeholder="Deine Nachricht an uns">Hier kannst du deine Nachricht an uns eingeben.</textarea>
                </div>
                <input type="submit" value="ABSENDEN" onClick={sendNewRequest} className="submitKontakt" />
            </form>
        </div>
        {/* <div className="kontakt">
            <h1>Kontakt</h1>
            <div>
                <div>
                    <h2>Eigenheimer-Vereinigung</h2>
                    <h2>Waigolshausen-Theilheim e.V.</h2>
                    <p>Am Oberen Tor</p>
                    <p>97534 Waigolshausen</p>
                </div>
                <div>
                    <h3>Vorstände und Postanschriften:</h3>
                    <div>
                        <h2>Karl-Heinz Rummel</h2>
                        <p>Sonnenstr. 15</p>
                        <p>97534 Waigolshausen</p>
                        <p>09722-3030</p>
                    </div>
                    <div>
                        <h2>Helmut Werthmann</h2>
                        <p>Frühlingstr. 2</p>
                        <p>97534 Waigolshausen</p>
                        <p>09722-4116</p>
                    </div>
                </div>
            </div>
        </div>
        <Map /> */}
        <Sidebar />
        <Footer />
        {showPopUpName &&
            <div className="popUp">
                <p>Bitte gib deinen Namen ein.</p>
                <button onClick={() => setShowPopUpName(false)}>schließen</button>
            </div>
        }
        {showPopUpEmail &&
            <div className="popUp">
                <p>Bitte gib deine Emailaddresse ein.</p>
                <button onClick={() => setShowPopUpEmail(false)}>schließen</button>
            </div>
        }
        {showPopUpText &&
            <div className="popUp">
                <p>Bitte gib eine Nachricht ein.</p>
                <button onClick={() => setShowPopUpText(false)}>schließen</button>
            </div>
        }
        {showPopUpSuccess &&
            <div className="popUp">
                <h1>Wir haben deine Nachricht erhalten.</h1>
                <p>Zur Bestätigung haben wir dir soeben eine Nachricht an deine Emailaddresse geschickt.</p>
                <p>Wir werden uns in Kürze bei dir melden.</p>
                <button onClick={() => setShowPopUpSuccess(false)}>schließen</button>
            </div>
        }
        {showPopUpNoSend &&
            <div className="popUp">
                <h1>Uuuupss... ein Fehler ist aufgetreten.</h1>
                <p>Bitte versuche es erneut.</p>
                <button onClick={() => setShowPopUpNoSend(false)}>schließen</button>
            </div>
        }
    </div >);
}

export default Kontakt;