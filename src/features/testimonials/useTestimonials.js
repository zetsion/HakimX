import { useQuery } from "@tanstack/react-query";
import { getTestimonials } from "../../apiServices/apitestimonials";

export default function useTestimonials() {
  const {
    isLoading,
    data: testimonials,
    error,
  } = useQuery({
    queryKey: ["testimonials"],
    queryFn: getTestimonials,
    staleTime: 20 * 60 * 1000,
  });
  return { isLoading, testimonials, error };
}
