import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import Map from "../components/Map/Map";
import { useState, useEffect } from "react";
import { apiBaseUrl } from "./../api"

const Kontakt = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [text, setText] = useState("")

    const sendNewRequest = () => {

        fetch(apiBaseUrl + "/kontaktanfragen/neueanfrage", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                email,
                text
            })
        }).then(res => res.json(), alert("Vielen Dank für deine Anfrage. Wir haben dir eine Eingangsbestätigung an deine Emailaddresse geschickt.")
        )
    }


    return (<div>
        <Navbar />
        <div className="kontakt">
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
            <div>
                <form>
                    <input type="text" name="name" id="name" placeholder="Dein Name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input type="email" id="email" name="email" placeholder="Deine Mailaddresse" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <textarea name="nachricht" id="nachricht" cols="30" rows="10" value={text} onChange={(e) => setText(e.target.value)}>Hier kannst du deine Nachricht an uns eingeben.</textarea>
                    <input type="submit" value="Absenden" onClick={sendNewRequest} />
                </form>
            </div>

        </div>
        <Map />
        <Sidebar />
        <Footer />
    </div >);
}

export default Kontakt;