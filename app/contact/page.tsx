"use client";
import { toast } from "react-toastify";
import { useState } from "react";
import { Tooltip, Button } from "@mui/material";
import { IconMail, IconPhone, IconLocation } from "@tabler/icons-react";
import { motion } from "framer-motion";
import axios from "axios";
import { compileWelcomeTemplate } from "@/constants/handeler";
import { sendMail } from "@/constants/mail";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validateForm();
    setFormErrors(errors);

    if (Object.values(errors).every((error) => !error)) {
      // Send the message to your email and send a thank you email to the client
      await sendEmail(formData);
    }
  };

  const validateForm = () => {
    const errors: any = {};

    if (!formData.name) errors.name = "Please provide your name.";
    if (!formData.email) errors.email = "Please provide your email address.";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Please provide a valid email address.";
    if (!formData.message)
      errors.message = "Please share your message with us.";

    return errors;
  };

  const sendEmail = async (data: any) => {
    try {
      // إرسال رسالة شكر للمستخدم
      // const userResponse =
      // await axios.post("/api/send-email", {
      //   to: data.email,
      //   subject: "Thank you for your message!",
      //   body: `Dear ${data.name},\n\nThank you for reaching out to us. We will get back to you shortly!\n\nBest regards,\nBEZRAH Solutions`,
      // });
      await sendMail({
        to: data.email,
        name: data.name,
        subject: "Bezrah",
        body: compileWelcomeTemplate(data.name, "https://bezrah2.vercel.app/"),
      });

      toast.success("Thank you message sent to the user!");

      // // إرسال رسالة إليك
      // const adminResponse = await axios.post("/api/send-email", {
      //   to: "ahmed15ayman7ahmed2002@gmail.com", // البريد الإلكتروني الخاص بك
      //   subject: `New Message from ${data.name}`,
      //   body: `You have received a new message from ${data.name} (${data.email}).\n\nMessage:\n${data.message}`,
      // });

      // if (adminResponse.status === 200) {
      //   toast.success("Message sent to the admin!");
      // } else {
      //   toast.error("Error sending message to admin email.");
      // }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("An error occurred while sending the email.");
    }
  };

  return (
    <main className="py-16 bg-white">
      <div className="container mx-auto text-center px-4">
        {/* Heading */}
        <motion.h1
          className="text-5xl font-extrabold text-gray-900 mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          We’d Love to Hear From You!
        </motion.h1>
        <motion.p
          className="text-xl text-gray-500 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Thank you for BEZRAH Solutions. Whether you have a question, feedback,
          or just want to get in touch, we're here to help!
        </motion.p>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="mt-8 max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl"
        >
          <div className="mb-6">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Full Name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a0b59f]"
            />
            {formErrors.name && (
              <p className="text-red-500 text-sm mt-2">{formErrors.name}</p>
            )}
          </div>

          <div className="mb-6">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a0b59f]"
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm mt-2">{formErrors.email}</p>
            )}
          </div>

          <div className="mb-6">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message or Inquiry"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#a0b59f]"
            ></textarea>
            {formErrors.message && (
              <p className="text-red-500 text-sm mt-2">{formErrors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#a0b59f] text-white py-3 rounded-lg hover:bg-[#8b9c7d] transition-all"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information Section */}
        <div className="mt-12 text-gray-600">
          <motion.h3
            className="text-2xl font-semibold text-gray-900 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Our Contact Information
          </motion.h3>
          <motion.p
            className="text-lg mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            We are happy to assist you in any way we can. You can reach us
            through the following methods:
          </motion.p>

          <div className="space-y-6">
            <div className="flex items-center">
              <Tooltip title="Email Address">
                <IconMail className="mr-3 text-[#a0b59f]" />
              </Tooltip>
              <p>
                <strong className="font-semibold">Email:</strong>{" "}
                <a
                  href="mailto:hr@bezrah.org"
                  className="text-[#a0b59f] hover:text-[#8b9c7d]"
                >
                  hr@bezrah.org
                </a>
              </p>
            </div>
            <div className="flex items-center">
              <Tooltip title="Phone Number">
                <IconPhone className="mr-3 text-[#a0b59f]" />
              </Tooltip>
              <p>
                <strong className="font-semibold">Phone:</strong> +1 (123)
                456-7890
              </p>
            </div>
            <div className="flex items-center">
              <Tooltip title="Our Location">
                <IconLocation className="mr-3 text-[#a0b59f]" />
              </Tooltip>
              <p>
                <strong className="font-semibold">Address:</strong> 123 Green
                Street, Eco City, State, 45678
              </p>
            </div>
          </div>

          <div className="mt-8 text-gray-500">
            <p>
              We appreciate you reaching out to us. If you prefer, you can also
              connect with us on our social media pages for the latest updates.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
