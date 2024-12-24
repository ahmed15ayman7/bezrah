"use server";
import nodemailer from "nodemailer";

export async function sendMail({
  to,
  name,
  subject,
  body,
}: {
  to: string;
  name: string;
  subject: string;
  body: string;
}) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;
  console.log(SMTP_EMAIL);
  console.log(SMTP_PASSWORD);

  const transport = nodemailer.createTransport({
    host: "smtp.hostinger.com", // عنوان خادم SMTP الخاص بـ Hostinger
    port: 465, // عادةً ما يكون 465 لـ SSL أو 587 لـ TLS
    secure: true, // true إذا كنت تستخدم SSL
    auth: {
      user: SMTP_EMAIL, // الإيميل الخاص بك (info@bezrah.org)
      pass: SMTP_PASSWORD, // كلمة المرور الخاصة بالإيميل
    },
  });

  try {
    const testResult = await transport.verify();
    console.log("SMTP Configuration Verified:", testResult);
  } catch (error) {
    console.error("SMTP Verification Failed:", { error });
    return;
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: body,
    });
    console.log("Email Sent Successfully:", sendResult);
  } catch (error) {
    console.error("Failed to Send Email:", error);
  }
}
