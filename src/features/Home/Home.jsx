import hakimXTeamFake from "../../data/hakimXTeamFake.png";
// import hakimxdmbg from "../../data/hakimxdmbg.webp";
import hakimxdmbg2 from "../../data/hakimxdmbg2.webp";
import iconKnowHealthcare from "../../data/icons/icon-know-healthcare.svg";
import iconExtendTeam from "../../data/icons/icon-extend-team.svg";
import iconOurCulture from "../../data/icons/icon-our-culture.svg";
import { FaCircleArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import TypingText from "../../utils/TypingText";
import hakimxdmbg from "../../data/hakimxdmbg.webp";
import hakimxdmbg3 from "../../data/hakimxdmbg3.webp";
const whychooseusData = [
  {
    icon: iconKnowHealthcare,
    title: "We know healthcare",
    description:
      " We’re dedicated all-rounders and <b>experts in your field</b>, providing a combined digital skillset that’s hard to find in an in-house team. ",
  },
  {
    icon: iconExtendTeam,
    title: "Part of your in-house team",
    description:
      " Our digital experts aim to become an extension of your existing in-house team. We take <b>full accountability </b> for the management and results of key areas of your digital strategy, helping you to deliver on your objectives. ",
  },
  {
    icon: iconOurCulture,
    title: "Our culture ",
    description:
      " In an increasingly remote, digital world, we remain <b> open </b>, <b> supportive </b> and <b>collaborative </b> in all we do. We have fostered a fun, caring community of like-minded people whose mission is to make a tangible difference to the healthcare sector. ",
  },
];
export default function Home() {
  const navigate = useNavigate();
  function handleContact() {
    navigate("/contacts");
  }
  function handleWorks() {
    navigate("/portfolio");
  }
  function handleServices() {
    navigate("/services");
  }
  return (
    <div
      //  className="m-3 max-w-full pt-10 md:pt-0"
      className="m-3 max-w-full bg-cover bg-fixed bg-no-repeat pt-10 md:pt-0"
      style={{
        backgroundImage: `url(${hakimxdmbg2})`,
        backgroundPosition: "center",
      }}
    >
      <div className="flex w-full justify-center md:justify-start">
        <div className="mt-40 w-full rounded-lg bg-transparent px-4 py-6 text-center md:mt-20 md:w-1/2 md:px-10 md:py-8">
          <h3 className="font-serif text-2xl font-bold text-yellow-600 sm:text-lg md:text-7xl lg:text-2xl">
            <TypingText text="HakimX Healthcare Digital Marketing!" />
          </h3>

          <p className="md: my-10 font-mono text-2xl font-bold text-black sm:text-base md:text-lg lg:text-xl">
            We’re a passionate team of Healthcare professioals, graphic
            designers, computer engineers, and digital marketing specialists.
          </p>

          <button
            onClick={handleContact}
            className="mt-4 rounded-full border-x-4 border-teal-600 bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-yellow-600"
          >
            Contact us
          </button>
        </div>
      </div>

      <div className="mt-8 text-center">
        <h3 className="font-serif text-xl font-bold md:text-2xl">
          <span className="rounded-xl border-x-4 border-yellow-600 bg-teal-300 p-2">
            {" "}
            Your Digital Partner
          </span>
        </h3>
        <p className="mx-auto mt-4 max-w-xl rounded-xl border-x-4 border-y-2 border-yellow-600 text-center font-mono font-extrabold text-black">
          We combine expertise in research, creative design, and digital
          activation to enhance patient engagement and drive positive health
          outcomes. By leveraging data-driven insights, we make healthcare
          innovations accessible and impactful.
        </p>

        <button
          onClick={handleWorks}
          className="mt-4 rounded-full border-x-4 border-teal-600 bg-yellow-500 px-4 py-2 font-serif font-bold text-white hover:bg-teal-700"
        >
          Our Works
        </button>
      </div>

      <div className="mt-4 grid gap-4 rounded-lg border-x-4 border-y-2 border-yellow-600 bg-teal-300 p-4 text-center shadow md:mt-16 md:grid-cols-[2fr_3fr] md:items-center md:text-left">
        <div className="flex items-center justify-evenly space-x-2 md:flex-row">
          <h3 className="text-xl font-bold md:text-2xl">What sets us apart?</h3>
          <span className="hidden text-xl md:inline-block md:text-2xl">
            <FaCircleArrowRight size={50} />
          </span>
        </div>

        <ul className="mt-4 list-disc space-y-2 px-5 text-left font-mono md:space-y-4 md:px-0 md:text-left">
          <li>
            <b>Independent and proud:</b> We’re agile and responsive, adapting
            quickly to our clients’ unique needs.
          </li>
          <li>
            <b>Founder-led:</b> Driven by a passion for connecting people to
            better health.
          </li>
          <li>
            <b>Audience experts:</b> We create campaigns and strategies that cut
            through the noise.
          </li>
          <li>
            <b>Digital prowess:</b> Helping healthcare brands unlock their
            digital marketing potential.
          </li>
        </ul>
      </div>

      <div className="mt-8 grid gap-4 rounded-lg border-x-4 border-y-2 border-yellow-600 bg-teal-300 p-4 text-center shadow md:mt-16 md:grid-cols-[2fr_3fr] md:items-center md:text-left">
        <img
          src={hakimXTeamFake}
          className="mx-auto w-full max-w-md rounded-md"
          alt="HakimX Team"
        />
        <div>
          {" "}
          <h3 className="mt-4 text-center font-serif text-xl font-bold md:text-2xl">
            Join the HakimX family
          </h3>
          <div className="rounded-lg text-center font-mono md:text-left">
            <p className="mt-4 text-sm md:text-base">
              If you’re an ambitious marketer with a passion for healthcare,
              reach out to us at <b>HakimXinfo@gmail.com</b> for more
              information.
            </p>
            <ul className="mx-auto mt-4 list-disc space-y-2 border-2 border-yellow-500 px-5 text-sm md:mx-0 md:border-0 md:px-0 md:text-base">
              <li>Connecting patients to the right healthcare providers.</li>
              <li>Advancing new healthcare technologies and medicines.</li>
              <li>Making healthcare information more accessible online.</li>
            </ul>
          </div>
          <button
            onClick={handleServices}
            className="mt-4 rounded-full border-x-4 border-teal-600 bg-yellow-600 px-4 py-2 font-bold text-white hover:bg-teal-700"
          >
            Services
          </button>
        </div>
      </div>

      <div className="mt-8 border-x-4 border-t-2 border-yellow-600 text-center">
        <h3 className="font-serif text-xl font-bold text-black md:text-2xl">
          <span className="rounded-xl border-x-4 border-yellow-600 bg-teal-300 p-2">
            {" "}
            The HakimX Digital team
          </span>
        </h3>
        <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
          <img
            src={hakimxdmbg2}
            className="w-full rounded-md object-cover"
            alt="Team member 1"
          />
          <img
            src={hakimxdmbg}
            className="w-full rounded-md object-cover"
            alt="Team member 2"
          />
          <img
            src={hakimxdmbg3}
            className="w-full rounded-md object-cover"
            alt="Team member 3"
          />
        </div>
        <button
          onClick={handleContact}
          className="mt-4 rounded-full border-x-4 border-teal-600 bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-yellow-600"
        >
          Contact us
        </button>
      </div>

      <div className="mt-8 border-x-4 border-t-2 border-yellow-600 text-center">
        <h3 className="font-serif text-xl font-bold text-black md:text-2xl">
          <span className="rounded-xl border-x-4 border-yellow-600 bg-teal-300 p-2">
            {" "}
            Why Choose HakimX?
          </span>
        </h3>
        <div className="mt-4 grid gap-6 rounded-lg md:grid-cols-2 lg:grid-cols-3">
          {whychooseusData.map((whychoose) => (
            <div
              className="rounded-lg border-2 border-yellow-500 bg-teal-300 p-4 shadow"
              key={whychoose.title}
            >
              <img
                src={whychoose.icon}
                className="mx-auto mb-4 h-12 w-12"
                alt="Icon"
              />
              <h4 className="text-lg font-semibold">{whychoose.title}</h4>
              <p
                className="mt-2 font-mono"
                dangerouslySetInnerHTML={{ __html: whychoose.description }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
