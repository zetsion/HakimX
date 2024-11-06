import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomePage from "./pages/HomePage";
import Portfolio from "./pages/Portfolio";
import Testimonials from "./pages/Testimonials";
import Contacts from "./pages/Contacts";
import PageNotFound from "./pages/PageNotFound";
import OurTeam from "./pages/OurTeam";
import AppLayout from "./ui/AppLayout";
// import Header from "./features/Home/Header";
import Services from "./pages/Services";
import TestimonialForm from "./pages/TestimonialForm";
import PortfolioForm from "./pages/PortfolioForm";
import { Toaster } from "react-hot-toast";
import PortfolioDetail from "./pages/PortfolioDetail";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 100,
    },
  },
});
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <div className="flex h-screen max-w-full flex-col">
        <BrowserRouter>
          {/* <div className="flex-grow"> */}
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="home" element={<HomePage />} />
              <Route path="services" element={<Services />} />
              <Route path="portfolio" element={<Portfolio />} />
              <Route path="testimonials" element={<Testimonials />} />
              <Route path="ourteam" element={<OurTeam />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="testimonialform" element={<TestimonialForm />} />
              <Route path="portfolioform/:id?" element={<PortfolioForm />} />
              <Route path="portfoliodetail" element={<PortfolioDetail />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </QueryClientProvider>
  );
}
