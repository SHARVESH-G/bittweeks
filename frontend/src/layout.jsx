import { Outlet } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import MobileNavbar from './components/navbar/mobileNav';
import RightBar from './components/rightBar/rightBar';

function Layout() {
  return (
    <div className="flex h-screen overflow-hidden">
      
      <div className="hidden md:block">
        <Navbar />
      </div>

      <div className="block md:hidden fixed bottom-0 w-full z-10">
        <MobileNavbar />
      </div>

      <main className="flex-1 overflow-y-auto px-4 py-6 bg-gray-50 hide-scrollbar">
        <div className="max-w-6xl mx-auto">
          <Outlet />
        </div>
      </main>

      <div className="hidden lg:block w-[400px]">
        <RightBar />
      </div>
    </div>
  );
}

export default Layout;
