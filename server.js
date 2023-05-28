const dotenv = require('dotenv')
dotenv.config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(10000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.WORD,
    clientId: process.env.OAUTH_CLIENTID,
   clientSecret: process.env.OAUTH_CLIENT_SECRET,
   refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.body; 
  const mail = {
    from: name,
    to: "joshndjohn@gmail.com",
    subject: "Message from new Visitor",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Instruction: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    console.log(error);
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Thanks for contacting us! We'll get back to you shortly." });
    }
  });
});

