import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email, phone, message } = req.body;

    // Create a transporter object using your email provider's SMTP details
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Use Gmail or your email provider's SMTP
      auth: {
        user: process.env.EMAIL, // Your email address
        pass: process.env.EMAIL_PASSWORD, // Your email password
      },
    });

    try {
      // Send email
      await transporter.sendMail({
        from: process.env.EMAIL,
        to: 'wijesinghe.anj@gmail.com',
        subject: `New Contact Message from ${firstName} ${lastName}`,
        text: `
          Name: ${firstName} ${lastName}
          Email: ${email}
          Phone: ${phone}
          
          Message:
          ${message}
        `,
      });

      return res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ message: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
