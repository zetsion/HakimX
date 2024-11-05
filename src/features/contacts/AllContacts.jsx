// import { Form } from "react-router-dom"; // Import Form from react-router-dom

import ContactInfo from "./ContactInfo";
import CreateContactForm from "./CreateContactForm";
import TypingText from "../../utils/TypingText";

export default function AllContacts() {
  return (
    <div className="container mx-auto bg-teal-300 px-4 py-8">
      <h1 className="mb-6 text-center text-3xl font-bold">
        <TypingText text="Get in Touch" />
      </h1>

      <div className="flex flex-col justify-center md:flex-row md:space-x-8">
        <div className="mb-6 flex-1 rounded-lg bg-white p-6 shadow-lg md:mb-0">
          <h2 className="mb-4 text-xl font-semibold">Contact Us</h2>
          <CreateContactForm />
        </div>
        <ContactInfo />
      </div>
    </div>
  );
}
