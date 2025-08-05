import Navbar from "./common/Navbar";
import Footer from "./common/Footer";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
