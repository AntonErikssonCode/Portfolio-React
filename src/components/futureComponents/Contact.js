import "./Contact.css";
import { ContactUs } from "./SendMail";
import { motion } from "framer-motion";
import MailSent from "./MailSent"; 

function Contact() {
  

  return (
    <div className="contact-container">
      <ContactUs />
    </div>
  );
}
export default Contact;
