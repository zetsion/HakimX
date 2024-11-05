import { Outlet } from "react-router-dom";
import Header from "../features/Home/Header";
// import Footer from "../features/Home/Footer"; // Uncomment if needed
import Footer from "../features/Home/Footer";

export default function AppLayout() {
  return (
    <div className="flex min-h-screen max-w-full flex-col bg-yellow-400 sm:p-4 lg:p-8">
      <Header className="max-w-full bg-red-600" />
      <main className="flex-grow p-4 sm:mt-6 lg:mt-8">
        <Outlet />
      </main>
      <Footer className="mt-auto w-full" />
    </div>
  );
}
