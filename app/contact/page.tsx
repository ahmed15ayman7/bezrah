"use client";
import { toast } from "react-toastify";
import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { compileWelcomeTemplate } from "@/constants/handeler";
import { sendMail } from "@/constants/mail";
import { Tooltip, Typography, Box, Link } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

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
        body: compileWelcomeTemplate(data.name, "https://bezrah.org/"),
      });
        await sendMail({
        to: "contact@bezrah.org",
        name: data.name,
        subject: "Bezrah",
        body: `${data.name} send message,\n Email is ${data.email} ,\n Message is ${data.message} `,
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
          Thank you for choosing BEZRAH Solutions. Whether you have a question, feedback,
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
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ebc78]"
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
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ebc78]"
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
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4ebc78]"
            ></textarea>
            {formErrors.message && (
              <p className="text-red-500 text-sm mt-2">{formErrors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#4ebc78] text-white py-3 rounded-lg hover:bg-[#013820] transition-all"
          >
            Send Message
          </button>
        </form>
        {/* Join Us Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Join Us</h2>
          <div className="flex justify-center space-x-6">
            <a
              href="https://docs.google.com/forms/d/1ViFzPb4L957BYdoCm0dHdp0tjYTPS8RoQMMqUN0hvVQ/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4ebc78] text-white py-2 px-4 rounded-lg hover:bg-[#013820] transition-all"
            >
              Join as a Volunteer
            </a>
            <a
              href="https://docs.google.com/forms/d/186kKYW2FaQYMWo-pm_i4OkTg1Mi1QOyvRtfH3cQDKek/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#4ebc78] text-white py-2 px-4 rounded-lg hover:bg-[#013820] transition-all"
            >
              Join as a Partner
            </a>
          </div>
        </div>

        <Box sx={{ mt: 12, color: "text.secondary", textAlign: "center" }}>
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h4"
              component="h3"
              sx={{ fontWeight: "bold", color: "text.primary", mb: 2 }}
            >
              Our Contact Information
            </Typography>
          </motion.div>

          {/* Section Description */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <Typography variant="body1" sx={{ fontSize: "1.125rem", mb: 4 }}>
              We are happy to assist you in any way we can. You can reach us
              through the following methods:
            </Typography>
          </motion.div>

          {/* Contact Details */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
              mt: 4,
            }}
          >
            {/* Email */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Tooltip title="Email Address">
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <MailOutlineIcon
                    sx={{ fontSize: 30, color: "#4ebc78", mr: 2 }}
                  />
                  <Typography>
                    <strong>Email:</strong>{" "}
                    <Link
                      href="mailto:info@bezrah.org"
                      underline="hover"
                      sx={{ color: "#4ebc78", "&:hover": { color: "#013820" } }}
                    >
                      info@bezrah.org
                    </Link>
                  </Typography>
                </Box>
              </Tooltip>
            </motion.div>

            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Tooltip title="Phone Number">
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <PhoneOutlinedIcon
                    sx={{ fontSize: 30, color: "#4ebc78", mr: 2 }}
                  />
                  <Typography>
                    <strong>Phone:</strong> +20 01501549813
                  </Typography>
                </Box>
              </Tooltip>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Tooltip title="Our Location">
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <LocationOnOutlinedIcon
                    sx={{ fontSize: 30, color: "#4ebc78", mr: 2 }}
                  />
                  <Typography>
                    <strong>Address:</strong> Benha , Egypt
                  </Typography>
                </Box>
              </Tooltip>
            </motion.div>
          </Box>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            style={{ marginTop: "2rem" }}
          >
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              We appreciate you reaching out to us. If you prefer, you can also
              connect with us on our social media pages for the latest updates.
            </Typography>
          </motion.div>
        </Box>
      </div>
    </main>
  );
};

export default Contact;
