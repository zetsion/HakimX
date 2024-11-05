import { Outlet } from "react-router-dom";
import Header from "../features/Home/Header";
import Footer from "../features/Home/Footer";

export default function AppLayout() {
  return (
    <div className="flex min-h-screen max-w-full flex-col overflow-x-hidden">
      {/* Header with full width */}
      <Header className="w-full" />

      {/* Main content area with padding that adapts on different screen sizes */}
      <main className="w-full max-w-full flex-grow p-4 pt-10 sm:mt-6 lg:mt-8">
        <Outlet />
      </main>

      {/* Footer with full width */}
      <Footer className="mt-auto w-full" />
    </div>
  );
}
