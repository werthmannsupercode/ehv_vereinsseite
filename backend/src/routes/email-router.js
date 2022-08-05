const express = require("express")
const { neueAnfrage } = require("../use-cases/add-newRequest");
const { sendMail } = require("../use-cases/send-mail");
const { sendMailtoself } = require("../use-cases/send-mailtoself")

const emailRouter = express.Router()

emailRouter.post("/neueanfrage", (req, res) => {
    if (!req.body) {
        res.status(400).json({ error: "Please include content." })
        return;
    }

    const Anfrage = {
        email: req.body.email,
        name: req.body.name,
        datumDerAnfrage: Date.now(),
        text: req.body.text
    }

    sendMail({
        to: Anfrage.email,
        subject: "Deine Nachricht hat uns erreicht. Dankeschön",
        message: `
                    Hallo ${Anfrage.name},
            
                    vielen Dank für deine Nachricht. 
            Wir melden uns in Kürze bei dir.
            
                 Bis dahin wünschen wir dir eine angenehme Zeit
                   Deine Eigenheimer `
    }
    )

    sendMailtoself({
        to: "werthmannsupercode@gmail.com",
        subject: "Neue Anfrage über Kontaktformular",
        message: `Neue Anfrage von: ${Anfrage.name}

        Von Adresse: ${Anfrage.email}

        Nachricht: 

        ${Anfrage.text}`
    })

    neueAnfrage(Anfrage)
        .then(addedRequest => res.status(201).json(addedRequest))
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: "Failed to add request to database." })
        })
})
// const usersArray = [
//     {
//         email: "ahmed@super-code.de",
//         name: "Ahmed Nasr",
//         joinedAt: 1658222679370,
//         verifiedEmail: true
//     }
// ]

// app.get("/users", (_, res) => {
//     const verifiedUsers = usersArray.filter(u => u.verifiedEmail === true)
//     res.json(verifiedUsers)
// })

// app.post("/users", (req, res) => {

//     sendMail({
//         to: newUser.email,
//         subject: "Please verify your email...",
//         message: `
//         Hello ${newUser.name},

//         thank you for joining Keller-Kinder!

//         Please use this six-digit verification code to verify your email.

//         ${newUser.sixDigitCode}

//         After that you will be shown on the member list.

//         Looking forward to do kellering with you.

//         Yours,
//         Keller-Kinder CEO 
//         `
//     }).then(wasSent => {
//         if(wasSent) {
//             usersArray.push(newUser)
//             res.status(200).json({
//                 email: newUser.email,
//                 name: newUser.name,
//                 joinedAt: newUser.joinedAt,
//                 verifiedEmail: newUser.verifiedEmail
//             })
//         } else {
//             res.status(500).json({ error: "Internal Server Error, please try joining again later."})
//         }
//     })
// })

// app.put("/users/verify", (req, res) => {
//     const userEmail = req.body.email
//     const sixDigitCodeClaim = req.body.sixDigitCode

//     const user = usersArray.find(u => u.email === userEmail)
//     if(!user) {
//         return res.status(400).json({ error: "Bad Request. User not found." })
//     }

//     const codeWasCorrect = user.sixDigitCode === sixDigitCodeClaim
//     if(!codeWasCorrect) {
//         return res.status(400).json({ error: "Bad Request. Code incorrect." })
//     }

//     // VERIFY USER EMAIL, everything is fine...
//     user.verifiedEmail = true;
//     res.status(200).json({
//         email: user.email,
//         name: user.name,
//         joinedAt: user.joinedAt,
//         verifiedEmail: user.verifiedEmail
//     })
// })



// sendMail({ 
//     to: "ahmed@super-code.de",
//     subject: "Mr. Fredoni, we need you! Part 5",
//     message: `
//     Hi Mr. Fredoni,

//     we urgently need a full stack dev.
//     Are you available?

//     If so please call me 0129303030.

//     Yours Truly,
//     Ahmed from Super Coders Pro
//     `
// })

module.exports = {
    emailRouter
}