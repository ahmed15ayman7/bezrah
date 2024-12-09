import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { to, subject, body } = await req.json();

    // إعداد النقل عبر البريد الإلكتروني
    const transporter = nodemailer.createTransport({
      service: "gmail", // أو يمكنك استخدام أي خدمة بريد أخرى
      auth: {
        user: process.env.EMAIL_USER, // بريدك الإلكتروني
        pass: process.env.EMAIL_PASS, // كلمة المرور الخاصة ببريدك
      },
    });

    // إعداد الرسالة المرسلة
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to,
      subject,
      text: body,
    };

    // إرسال البريد الإلكتروني
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 }
    );
  }
}
