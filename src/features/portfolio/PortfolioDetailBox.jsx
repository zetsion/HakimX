import { useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { parseISO, format } from "date-fns";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { deletePortfolio as deletePortfolioApi } from "../../apiServices/apiPortfolios";
// import toast from "react-hot-toast";
/* eslint-disable react/prop-types */

export default function PortfolioDetailBox() {
  // const queryClient = useQueryClient();
  const location = useLocation();
  const navigate = useNavigate();
  const { portfolio } = location.state || {}; // Get portfolio from state
  const formattedDate = format(parseISO(portfolio.created_at), "MMMM d, yyyy");
  // const { mutate: deletePortfolio, isLoading: isDeleting } = useMutation({
  //   mutationFn: (id) => deletePortfolioApi(id),
  //   onSuccess: () => {
  //     toast.success("Portfolio successfull deleted");
  //     queryClient.invalidateQueries({
  //       queryKey: ["portfolios"],
  //     });
  //     navigate("/portfolio");
  //   },
  //   onError: () => {
  //     toast.error("Error to delete portfolio at portfolio detail page");
  //   },
  // });

  // function handleDelete() {
  //   console.log(portfolio);
  //   deletePortfolio(portfolio.id);
  // }

  // function handleEdit() {
  //   navigate(`/portfolioForm/${portfolio?.id}`, { state: { portfolio } });
  // }
  function handleBack() {
    navigate("/portfolio");
  }
  // const isWorking = isDeleting;
  if (!portfolio)
    return (
      <div className="mt-10 flex items-center justify-center gap-2 p-4">
        <p className="rounded-md bg-teal-600 p-2 font-bold text-black">
          No Portfolio to show! Please go back to{" "}
        </p>
        <span className="bg-teal-600 text-lg font-bold text-black">
          <IoIosArrowForward />
        </span>
        <button className="rounded-md bg-yellow-600 p-2" onClick={handleBack}>
          Portfolios List
        </button>
      </div>
    );

  return (
    <div className="bg-gray-100">
      {/* Full height container for teal background */}
      <div className="mx-auto mt-10 flex max-w-7xl flex-col rounded-lg bg-teal-300 p-4 shadow-md sm:p-6">
        <div className="md:mt-4 md:flex">
          <div className="flex-grow md:w-2/3">
            <div className="mt-4">
              <h1 className="text-xl font-bold text-gray-800 sm:text-2xl">
                Project Name
              </h1>
              <p className="text-gray-600">{portfolio.name}</p>
            </div>
            {/* // details section */}
            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gray-700">
                Project Type
              </h2>
              <p className="text-gray-600">{portfolio.category}</p>
            </div>

            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gray-700">
                Client Name
              </h2>
              <p className="text-gray-600">{portfolio.client}</p>
            </div>

            {portfolio.link && (
              <div className="mt-4">
                <h2 className="text-lg font-semibold text-gray-700">
                  Project Link
                </h2>
                <a
                  href={portfolio.link}
                  className="text-blue-600 hover:underline"
                >
                  {portfolio.link}
                </a>
              </div>
            )}

            <div className="mt-4">
              <h2 className="text-lg font-semibold text-gray-700">
                Project Description
              </h2>
              <p className="text-gray-600">{portfolio.description}</p>
            </div>
          </div>
          {/* // Project Photo Section */}
          <div className="mt-4 md:ml-4 md:mt-0 md:w-1/2">
            <h2 className="text-lg font-semibold text-gray-700">
              Posted : {formattedDate}
            </h2>
            <img
              src={portfolio.photo} // Use portfolio photo or fallback
              alt="Project Photo"
              className="mt-2 h-auto w-full rounded-lg shadow-md"
            />
          </div>
        </div>
        {/* // button section  */}
        <div className="mt-4 flex justify-between space-x-2">
          <button
            // disabled={isWorking}
            onClick={handleBack}
            className="rounded bg-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-400"
          >
            Back
          </button>
          {/* <div className="flex space-x-2">
            <button
              // onClick={handleEdit}
              // disabled={isWorking}
              className="rounded bg-yellow-600 px-4 py-2 text-white hover:bg-yellow-500"
            >
              Edit
            </button>
            <button
              // disabled={isWorking}
              // onClick={handleDelete}
              className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
              Delete
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
