import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { name, email, message } = req.body;

      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.CONTACT_FORM_USERNAME, // generated ethereal user
          pass: process.env.CONTACT_FORM_PASSWORD, // generated ethereal password
        },
      });

      // send mail with defined transport object
      await transporter.sendMail({
        to: "ibo.f@hotmail.com", // list of receivers
        text: `Coming from Ibrahim Firat Personal Website\n\nFrom: ${email}\n\nName: ${name}\n\nMessage: ${message}`, // plain text body
      });

      res.status(201).json({ message: "Email has been send!" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Could not send the email!" });
    }
  }
}
