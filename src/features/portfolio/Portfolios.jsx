// import { useNavigate } from "react-router-dom";
import usePortfolios from "./usePortfolios";
import Portfolio from "./Portfolio";
import { useState } from "react";
import TypingText from "../../utils/TypingText";

export default function Portfolios() {
  // const navigate = useNavigate();
  const { data: allPortfolios, isLoading } = usePortfolios(); // Set default to an empty array
  const [filteredPortfolios, setFilteredPortfolios] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all"); // Track the active category
  if (isLoading) {
    return (
      <p className="flex h-40 items-center justify-center bg-yellow-400 text-2xl">
        Loading...
      </p>
    ); // Optionally, show a loading message while data is fetched
  }

  function filterByCategory(category) {
    setActiveCategory(category); // Set active category for styling

    // Filter portfolios based on the selected category
    const portfolioByCategory =
      category === "all"
        ? allPortfolios // Show all portfolios if "all" category is selected
        : allPortfolios.filter((portfolio) => portfolio.category === category);

    console.log(portfolioByCategory); // For debugging
    setFilteredPortfolios(portfolioByCategory); // Update the state with filtered data
  }
  // Determine which portfolios to display
  const allFilteredPortfolios = filteredPortfolios.length
    ? filteredPortfolios
    : allPortfolios;
  return (
    <div className="rounded-lg bg-teal-300">
      <div>
        <h3 className="mb-8 mt-16 text-center font-bold sm:mt-2 md:mt-20">
          <TypingText text="Our Works" />
        </h3>
        <div className="mt-4 flex flex-col items-center justify-center md:mt-0">
          <div className="flex flex-wrap justify-center space-x-4">
            {[
              "all",
              "Graphics",
              "Contents",
              "Web-design",
              "Web-dev",
              "SEO-M",
              "SMM",
              "DMP",
              "DHC",
            ].map((category) => (
              <span
                key={category}
                onClick={() => filterByCategory(category)}
                className={`my-1 rounded-full px-4 py-2 text-center font-bold ${
                  activeCategory === category
                    ? "bg-teal-700 text-white"
                    : "bg-yellow-500 text-white hover:bg-yellow-200"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="mt-8 text-center"> */}
      <div className="mb-8 text-center text-xl font-bold">
        <div
          className={`flex flex-wrap justify-center gap-4 ${allFilteredPortfolios?.length <= 4 ? "md:flex-nowrap" : "md:flex-wrap"}`}
        >
          {/* <div className="m-4 flex flex-wrap justify-center bg-teal-600"> */}
          {allFilteredPortfolios.length > 0 ? (
            allFilteredPortfolios.map((portfolio) => (
              <Portfolio key={portfolio.id} portfolio={portfolio} />
            ))
          ) : (
            <p className="text-white">No portfolios found in this category.</p>
          )}
        </div>
        <button
          // onClick={() => navigate("/portfolioform")}
          className="mt-4 justify-center rounded-full bg-yellow-500 px-4 py-2 font-bold text-white transition duration-200 hover:bg-yellow-600"
        >
          Add Portfolio
        </button>
      </div>
    </div>
  );
}
