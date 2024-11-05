import Testimonial from "./Testimonial";
// import { useNavigate } from "react-router-dom";
import useTestimonials from "./useTestimonials";
import TypingText from "../../utils/TypingText";

export default function TestimonialsList() {
  // const navigate = useNavigate();
  const { testimonials, error, isLoading } = useTestimonials();

  if (isLoading)
    return (
      <p className="flex h-40 items-center justify-center bg-yellow-400 text-2xl">
        Loading Testimonials...
      </p>
    );
  if (error)
    return (
      <p className="flex h-40 items-center justify-center bg-yellow-400 text-2xl">
        {error.message}
      </p>
    ); // Display error message
  return (
    <div className="mt-8 rounded-lg bg-teal-300 text-center">
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-6 text-center font-bold">
          <TypingText text=" What Our Clients Say" />
        </h1>

        <div
          className={`flex flex-wrap justify-center gap-4 ${testimonials.length <= 4 ? "md:flex-nowrap" : "md:flex-wrap"}`}
        >
          {testimonials.map((testimonialPerson) => (
            <Testimonial
              key={testimonialPerson.testimonial}
              testimonialPerson={testimonialPerson}
            />
          ))}
        </div>
      </div>
      <button
        // onClick={() => navigate("/testimonialform")}
        className="mt-4 rounded-full bg-yellow-500 px-4 py-2 font-bold text-white transition duration-200 hover:bg-yellow-600"
      >
        Add Testimonial
      </button>
    </div>
  );
}
