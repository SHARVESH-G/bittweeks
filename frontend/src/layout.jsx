import MobileNavbar from "./components/navbar/mobileNav";
import Navbar from "./components/navbar/navbar";
import { Outlet } from "react-router-dom";
import RightBar from "./components/rightBar/rightBar";

function Layout() {
  return (
    <div className="flex min-h-screen justify-between">
      <div className="hidden md:block">
        <Navbar />
      </div>
      <div className="block md:hidden">
        <MobileNavbar />
      </div>
      <Outlet />
      <div className="hidden md:block">
        <RightBar />
      </div>
    </div>
  );
}

export default Layout;
