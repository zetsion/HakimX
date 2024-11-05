// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import { deleteTestimonial as deleteTestimonialApi } from "../../apiServices/apitestimonials";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function Testimonial({ testimonialPerson }) {
  // const navigate = useNavigate();
  // const queryClient = useQueryClient();
  const {
    // id: testimonialId,
    title,
    name,
    photo,
    company,
    role,
    testimonial,
  } = testimonialPerson;

  // const { mutate: deleteTestimonial, isLoading: isDeletingTestimonial } =
  //   useMutation({
  //     mutationFn: (id) => deleteTestimonialApi(id),
  //     onSuccess: () => {
  //       toast.success("Testimonial Successfuly deleted");
  //       queryClient.invalidateQueries({
  //         queryKey: ["testimonials"],
  //       });
  //     },
  //     onError: (err) => {
  //       toast.error(err.message);
  //     },
  //   });

  // const handleEditClick = () => {

  //   navigate("/testimonialForm", { state: { testimonialPerson } });
  // };

  return (
    <div className="flex w-full flex-col items-center rounded-lg border-x-4 border-yellow-600 bg-white p-6 text-center shadow-lg md:w-1/4">
      <img src={photo} className="mb-4 h-24 w-24 rounded-full" />
      <h2 className="flex-wrap break-words text-xl font-semibold">
        {title}. {name}, {role} at {company}{" "}
      </h2>
      <p className="font-mono text-gray-600">{testimonial}</p>
      {/* <div className="mt-auto w-1/2 justify-between">
        <button
          // disabled={isDeletingTestimonial}
          // onClick={handleEditClick}
          className="mx-1 rounded bg-yellow-600 px-2 py-1 text-white hover:bg-yellow-400"
        >
          Edit
        </button>
        <button
          // disabled={isDeletingTestimonial}
          // onClick={() => deleteTestimonial(testimonialId)}
          className="mx-1 rounded bg-red-500 px-2 py-1 text-white hover:bg-red-600"
        >
          Delete
        </button>
      </div> */}
    </div>
  );
}
