// Sample images for team members

import { useNavigate } from "react-router-dom";
// import image1 from "../../data/image1.png";
import hakimxdmbg from "../../data/hakimxdmbg.webp";
import hakimxdmbg2 from "../../data/hakimxdmbg2.webp";
import hakimxdmbg3 from "../../data/hakimxdmbg3.webp";
import TypingText from "../../utils/TypingText";

const DigitalTeam = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/contacts");
  }
  const digitalTeamList = [
    { name: "Hilmnesh D", role: "Digital Marketer", photo: hakimxdmbg3 },
    { name: "John A", role: "Content Strategist", photo: hakimxdmbg2 },
    { name: "Tesfa B", role: "Web Developer", photo: hakimxdmbg },
  ];
  return (
    <div className="mt-16 border-t-4 border-yellow-600 bg-teal-300 text-center">
      <h3 className="text-xl font-bold md:text-2xl">
        <TypingText text="The HakimX Digital Team" />
      </h3>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {digitalTeamList.map((digitalteamSingle) => (
          <div
            key={digitalteamSingle.role}
            className="border-spacing-2 rounded-lg border-x-4 border-yellow-600 p-4 shadow-md"
          >
            <img
              src={digitalteamSingle.photo}
              className="mb-2 h-auto w-full rounded-md object-cover"
              alt="Team member 1"
            />
            <h4 className="text-lg font-semibold">{digitalteamSingle.name}</h4>
            <p className="text-gray-600">{digitalteamSingle.role}</p>
          </div>
        ))}
      </div>

      <button
        onClick={handleClick}
        className="mt-4 rounded-full border-x-4 border-teal-600 bg-yellow-500 px-4 py-2 font-bold text-white transition duration-200 hover:bg-yellow-600"
      >
        Contact Us
      </button>
    </div>
  );
};

export default DigitalTeam;
