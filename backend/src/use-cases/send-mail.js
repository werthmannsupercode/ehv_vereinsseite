const { google } = require("googleapis")
const nodemailer = require("nodemailer")

const dotenv = require("dotenv")
dotenv.config()

const GMAIL_ADRESS = process.env.GMAIL_ADRESS
const CLIENT_ID = process.env.GMAIL_CLIENT_ID
const CLIENT_SECRET = process.env.GMAIL_CLIENT_SECRET
const REDIRECT_URI = process.env.GMAIL_REDIRECT_URI
const REFRESH_TOKEN = process.env.GMAIL_REFRESH_TOKEN

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })


function sendMail({ to, subject, message, html }) {
    return oAuth2Client
        .getAccessToken()
        .then(accessToken => {
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    type: "OAuth2",
                    user: GMAIL_ADRESS,
                    clientId: CLIENT_ID,
                    clientSecret: CLIENT_SECRET,
                    refreshToken: REFRESH_TOKEN,
                    accessToken: accessToken
                }
            })

            return transporter.sendMail({
                from: `Eigenheimer-Vereinigung Waigolshausen-Theilheim 📧 <${GMAIL_ADRESS}>`,
                to,
                subject,
                message,
                html: html || message.replaceAll("\n", "<br/>")
            })
        }).then(sentMessageInfo => {
            return sentMessageInfo.accepted.includes(to)
        })
}

module.exports = {
    sendMail
}