
import nodemailer from "nodemailer";

export async function POST(req) {
  const data = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });

  await transporter.sendMail({
    to: "axsft01@gmail.com",
    subject: "New AXSFT Enquiry",
    text: JSON.stringify(data)
  });

  return Response.json({ success: true });
}
