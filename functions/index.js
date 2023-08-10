const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require("cors")({origin:true});
admin.initializeApp();


/**
* Here we're using Gmail to send 
*/
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'arunkumargodmoto@gmail.com',
        pass: 'Arunkumar@06'
    }
});

exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
      
        // getting dest email by query string
        const dest = req.query.to;
        console.log("dest-email",dest,req.query);
        

        const mailOptions = {
            from: 'arunkuse@gmail.com', // Something like: Jane Doe <janedoe@gmail.com>
            to: req.query.to,
            subject: 'Micromedia Team will contact you soon,'+req.query.subject, // email subject
            html: `<p style="font-size: 16px;">Welome to micromedia.cloud</p>
                <br />
                <img src="https://micromedia.cloud/img/bg/bg.jpg" />
                <p>${req.query.text}</p>

            ` // email content in HTML
        };
  
        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if(erro){
                return res.send(erro.toString());
            }
            return res.send('Sended');
        });
    });    
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
