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

    response.send("working");

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
            html: `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <title>Email</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                    }
                    .email-container {
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                    }
                    .email-header {
                        background-color: rgb(247, 197, 104);
                        color: black;
                        padding: 10px;
                        text-align: center;
                    }
                    .email-content {
                        padding: 20px;
                    }
                    .email-container {
                      max-width: 600px;
                      margin: 0 auto;
                      padding: 20px;
                      background-color: rgb(250, 211, 140);
                      border: 1px solid #ddd;
                  }
                  .email-content p {
                      margin: 0;
                      padding: 5px 0;
                      font-size: 16px;
                  }
              
                  /* Strong text (for labels) */
                  .email-content strong {
                      font-weight: bold;
                  }
                </style>
            </head>
            <body>
                <div class="email-container">
                    <div class="email-header">
                        <h1>${subject}</h1>
                    </div>
                    <div class="email-content">
                        <p><strong>Name:</strong> ${firstname} ${lastname}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Message:</strong> ${message}</p>
                        <p><strong>Mobile:</strong> ${mobile}</>
                    </div>
                </div>
            </body>
            </html>
        `,

          };
      
          transporter.sendMail(mailOption, (error, info) => {
            if (error) {
              console.log(error);
              response.status(500).send('Internal Server Error');
            } else {
              console.log('Email sent: ' + info.response);
              return response.json({message: "Your Message was Successfully Sent!"})
            }
          });
        }
              });



app.use((req, res) => {
    res.status(404);
    res.send('<h1>Error 404: Resource not found</h1>')
})

app.listen(5000, () =>{
    console.log("App listening on port 5000");
})