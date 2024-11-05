import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Portfolio({ portfolio }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/portfoliodetail", { state: { portfolio } });
  }
  return (
    <div className="flex w-full flex-col items-center rounded-lg border-x-4 border-yellow-600 bg-white p-6 text-center shadow-lg md:w-1/4">
      {/* // <div className="flex w-full flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg lg:w-1/4"> */}
      <div className="relative" key={portfolio.id}>
        <img
          src={portfolio?.photo}
          className="h-40 max-w-full rounded-md object-cover"
          alt="Graphic Portfolio"
        />
        <div className="relative bottom-0 mb-2 flex justify-end">
          <button
            onClick={handleClick}
            className="absolute bottom-0 right-0 mb-2 mr-2 rounded-lg bg-yellow-600 px-4 py-2 font-mono font-bold text-white hover:bg-teal-600"
          >
            More...
          </button>
        </div>
      </div>
    </div>
  );
}
