import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Portfolio({ portfolio }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/portfoliodetail", { state: { portfolio } });
  }
  return (
    <div className="flex w-full flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg md:w-1/4">
      {/* // <div className="flex w-full flex-col items-center rounded-lg bg-white p-6 text-center shadow-lg lg:w-1/4"> */}
      <div className="relative" key={portfolio.id}>
        <img
          src={portfolio?.photo}
          className="h-40 max-w-full rounded-md object-cover"
          alt="Graphic Portfolio"
        />
        <div className="absolute bottom-0 left-1/2 mb-2 flex -translate-x-1/2 transform gap-4 space-x-2 whitespace-nowrap">
          <span className="rounded-lg bg-yellow-600 bg-opacity-100 px-4 py-2 font-mono font-bold text-white hover:bg-teal-600">
            {portfolio.name}
          </span>
          <button
            onClick={handleClick}
            className="rounded-lg bg-yellow-600 bg-opacity-100 px-4 py-2 font-mono font-bold text-white hover:bg-teal-600"
          >
            More...
          </button>
        </div>
      </div>
    </div>
  );
}
