const express = require('express')
const app = express.Router()
const nodemailer = require('nodemailer')
require('dotenv').config()
app.post('/mailtoadmin', (req, res) => {
    console.log(req.body);
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD,
        }
    })
    let mailOptions = {
        from: 'service64test@gmail.com',
        to: 'service64test@gmail.com',
        subject: 'Testing and sendmail',
        text: 'For clients with plaintext support only',
        html: '<h3>' + req.body.name + '</h3>' +  '<h4>' + req.body.email + '</h4>' + '<p>' + req.body.message + '</p>',
    }

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log('Error Occurs', err);
        }
        else {
            res.send({
                message: 'Recvied your message'
            })
        }
    })
})

module.exports = app