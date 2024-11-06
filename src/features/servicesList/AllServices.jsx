import hakimXTeamFake from "../../data/hakimXTeamFake.png";
import TypingText from "../../utils/TypingText";

const allServices = [
  {
    title: "Graphics Design",
    description:
      "Create visually compelling, professional materials tailored for healthcare brands. From patient education resources to digital ads and social media visuals, each design communicates trust, clarity, and professionalism. These graphics enhance brand appeal while effectively engaging and educating target audiences, building a strong, memorable presence in the healthcare industry.",
    image: hakimXTeamFake,
    servicePage: "/graphics",
  },
  {
    title: "Content Creation",
    description:
      "Develop and distribute valuable healthcare content, including blogs, articles, and educational videos, to position your brand as a trusted authority in the healthcare industry.",
    image: hakimXTeamFake,
    servicePage: "/graphics",
  },
  {
    title: "Website Design",
    description:
      "Design user-friendly, visually appealing, and compliant websites for healthcare providers. Each design is crafted to provide a seamless patient experience, build trust, and reflect your brand's values. Our approach prioritizes accessibility and functionality, making it easy for patients to find information, book appointments, and connect with your services online.",
    image: hakimXTeamFake,
    servicePage: "/webdesign",
  },
  {
    title: "Website Development",
    description:
      "Design and develop secure, responsive, and user-friendly websites tailored for healthcare providers, ensuring compliance with industry regulations and offering a seamless experience for patients.",
    image: hakimXTeamFake,
    servicePage: "/webdevelop",
  },
  {
    title: "SEO Management",
    description:
      "Optimize your website for search engines with keywords and content strategies specific to healthcare, improving your visibility so that patients can find your services online easily.",
    image: hakimXTeamFake,
    servicePage: "/seom",
  },
  {
    title: "Social Media Management",
    description:
      "Manage and grow your healthcare brand's presence on social media platforms. Engage patients with health tips, success stories, and updates that enhance trust and build a loyal online community.",
    image: hakimXTeamFake,
    servicePage: "/smm",
  },
  {
    title: "Healthcare Consultancies",
    description:
      "Our Digital Healthcare Consultancy helps healthcare providers build a strong online presence to reach target patients, grow their practice, and stay competitive. We offer expert guidance on website optimization, social media engagement, and targeted advertising, ensuring your services are accessible and visible. With tailored strategies and data-driven insights, we empower your practice to attract, engage, and retain more patients for lasting growth.",
    image: hakimXTeamFake,
    servicePage: "/healthconsult",
  },
  {
    title: "Digital Marketing Package",
    description:
      "Our Digital Marketing Package empowers healthcare providers to boost online presence and attract patients. It includes SEO for visibility, social media management to engage audiences, content marketing to build authority, email marketing for patient retention, targeted ads to reach prospects, and analytics to optimize performance. With data-driven insights, we help your practice thrive, fostering growth and lasting patient relationships.",
    image: hakimXTeamFake,
    servicePage: "/digitalmarketing",
  },
];

export default function AllServices() {
  // console.log(allServices);
  return (
    <div className="md:mt-18 mt-16 max-w-full rounded-lg border-t-4 border-yellow-600 bg-teal-300 pt-10">
      <h1 className="text-center">
        <TypingText text="All Services and Products" />
      </h1>
      {allServices.map((service, index) => (
        <div
          key={service.title}
          className={`mt-2 grid gap-4 rounded-lg border-x-4 border-y-2 border-yellow-600 bg-teal-100 p-4 text-center shadow md:mt-2 ${index % 2 === 0 ? "md:grid-cols-[2fr_3fr]" : "md:grid-cols-[3fr_2fr]"} md:items-center md:py-0 md:text-left`}
        >
          {/* If index is even, image goes first */}
          {index % 2 === 0 ? (
            <>
              <img
                src={service.image}
                className="mx-auto w-full max-w-md rounded-md"
                alt="service photo"
              />
              <div>
                <h3 className="mt-4 border-b-2 border-yellow-600 text-center text-xl font-bold md:text-2xl">
                  {service.title}
                </h3>
                <div className="rounded-lg text-center md:text-left">
                  <p className="mt-4 font-mono text-sm md:text-base">
                    {service.description}
                  </p>
                </div>
                <button className="mt-4 rounded-full border-x-4 border-teal-600 bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-teal-700">
                  Read More...
                </button>
              </div>
            </>
          ) : (
            // If index is odd, text goes first
            <>
              <div>
                <h3 className="mt-4 border-b-2 border-yellow-600 text-center text-xl font-bold md:text-2xl">
                  {service.title}
                </h3>
                <div className="rounded-lg text-center md:text-left">
                  <p className="mt-4 text-sm md:text-base">
                    {service.description}
                  </p>
                </div>
                <button className="mt-4 rounded-full border-x-4 border-teal-600 bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-teal-700">
                  Read More...
                </button>
              </div>
              <img
                src={service.image}
                className="mx-auto w-full max-w-md rounded-md"
                alt="service photo"
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
}
