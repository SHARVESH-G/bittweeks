import { Outlet } from "react-router-dom";
import Navbar from './components/navbar/navbar'
import MobileNavbar from './components/navbar/mobileNav'
import RightBar from './components/rightBar/rightBar'

function Layout() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="hidden md:block">
        <Navbar />
      </div>
      <div className="block md:hidden">
        <MobileNavbar />
      </div>

      <main className="flex-1 overflow-y-auto scrollbar-hide px-4 py-6">
        <Outlet />
      </main>

      <div className="hidden md:block">
        <RightBar />
      </div>
    </div>
  );
}


export default Layout;
