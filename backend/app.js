require('dotenv').config();
const express = require('express');
const app =express();
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname +"./client/build"));
app.use(cors());

app.get('/', (request, response) => {

    response.send("working")

});

    app.post('/send',
    [

        check('email').isEmail(),
        check('subject').not().isEmpty(),
        check('message').not().isEmpty(),
      ], 
      (request, response) => {
        const {firstname, lastname, email, mobile, subject, message} = request.body;
        console.log(email)
        const errors = validationResult(request);
        if (!errors.isEmpty()) {
          return response.status(400).json({ errors: errors.array() });
        } else {
          const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
              user: process.env.EMAIL_USERNAME,
              pass: process.env.EMAIL_PASSWORD,
            },
          });
      
          const mailOption = {
            from: email,
            to: process.env.EMAIL_USERNAME,
            subject: subject,
            text: `Name: ${firstname} ${lastname}\nEmail: ${email}\nMessage: ${message}\nMobile: ${mobile}`,

          };
      
          transporter.sendMail(mailOption, (error, info) => {
            if (error) {
              console.log(error);
              response.status(500).send('Internal Server Error');
            } else {
              console.log('Email sent: ' + info.response);
            }
          });
        }
        return response.json({message: "Your Message was Successfully Sent!"})


      });



app.use((req, res) => {
    res.status(404);
    res.send('<h1>Error 404: Resource not found</h1>')
})

app.listen(5000, () =>{
    console.log("App listening on port 5000");
})