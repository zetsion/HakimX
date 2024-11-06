import { useState } from "react";
import { FaLinkedin, FaTelegram, FaInstagram } from "react-icons/fa";
import CreateSubscriberForm from "./CreateSubscriberForm";

// let installPromptEvent;

// window.addEventListener("beforeinstallprompt", (event) => {
//   // Prevent the default mini-infobar or install prompt
//   event.preventDefault();
//   // Save the event for later use
//   installPromptEvent = event;

//   // Show your custom install button (e.g., a button that says "Install")
//   document.getElementById("installButton").style.display = "block";
// });

// document.getElementById("installButton").addEventListener("click", () => {
//   // Show the install prompt
//   installPromptEvent.prompt();

//   // Handle the outcome of the user's choice
//   installPromptEvent.userChoice.then((choiceResult) => {
//     if (choiceResult.outcome === "accepted") {
//       console.log("User accepted the install prompt");
//     } else {
//       console.log("User dismissed the install prompt");
//     }
//     // Reset the event so it can be triggered again if necessary
//     installPromptEvent = null;
//   });
// });

// Footer Component
const Footer = () => {
  const [openSections, setOpenSections] = useState({
    services: false,
    customers: false,
    contact: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <footer className="flex w-full flex-col items-center bg-stone-700 p-5 text-white">
      <div className="flex w-full max-w-[1200px] flex-wrap justify-center">
        {/* Services Section */}
        <div className="m-2 flex min-w-[200px] flex-col items-center rounded-lg border-t-4 border-yellow-600 bg-teal-600 bg-opacity-100">
          <div
            className="flex w-full cursor-pointer justify-between p-2"
            onClick={() => toggleSection("services")}
          >
            <h2 className="text-lg">Our Services</h2>
            <span>{openSections.services ? "-" : "+"}</span>
          </div>
          {openSections.services && (
            <ul className="p-2">
              <li className="my-1">Graphics Design</li>
              <li className="my-1">Content Creation</li>
              <li className="my-1">SEO Management</li>
              <li className="my-1">Social Media Management</li>
              <li className="my-1">Website Design</li>
              <li className="my-1">Healthcare Consultancies</li>
            </ul>
          )}
        </div>

        {/* Customers Section */}
        <div className="rouded-lg m-2 flex min-w-[200px] flex-col items-center border-t-4 border-yellow-600 bg-teal-600 bg-opacity-100">
          <div
            className="flex w-full cursor-pointer justify-between p-2"
            onClick={() => toggleSection("customers")}
          >
            <h2 className="text-lg">Our Customers</h2>
            <span>{openSections.customers ? "-" : "+"}</span>
          </div>
          {openSections.customers && (
            <ul className="p-2">
              <li className="my-1">Hospitals</li>
              <li className="my-1">Speciality Centers</li>
              <li className="my-1">Pharmaceuticals</li>
              <li className="my-1">Clinics</li>
              <li className="my-1">Doctors</li>
              <li className="my-1">Influencers</li>
            </ul>
          )}
        </div>

        {/* Contact Section */}
        <div className="rouded-lg bg-blue m-2 flex min-w-[200px] flex-col items-center border-t-4 border-yellow-600 bg-teal-600 bg-opacity-100">
          <div
            className="flex w-full cursor-pointer justify-between p-2"
            onClick={() => toggleSection("contact")}
          >
            <h2 className="text-lg">Contact Us</h2>
            <span>{openSections.contact ? "-" : "+"}</span>
          </div>
          {openSections.contact && (
            <div className="p-2 text-center">
              <p>Addis Abeba, Ethiopia</p>
              <p>HakimXinfo@gmail.com</p>
              <p>+251 (961 170 808)</p>
              <p>+251 (961 170 800)</p>
            </div>
          )}
        </div>
      </div>

      <CreateSubscriberForm />
      {/* <button className="bg-blue-500" onClick={installPromptEvent()}>
        Install
      </button> */}

      <div className="my-5 flex justify-center">
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="mx-2 text-2xl text-white"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.linkedin.com/company/hakimx-healthcare-digital-marketing/?"
          target="_blank"
          rel="noreferrer"
          className="mx-2 text-2xl text-white"
        >
          <FaTelegram />
        </a>
        <a
          href="https://www.instagram.com/hakimxofficial/"
          target="_blank"
          rel="noreferrer"
          className="mx-2 text-2xl text-white"
        >
          <FaInstagram />
        </a>
      </div>

      <div className="mt-5 text-center text-xs">
        © Copy Right @2024 All Rights Reserved - HakimX Healthcare Digital
        Marketing Agency
      </div>
    </footer>
  );
};

export default Footer;
