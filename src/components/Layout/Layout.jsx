import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

function Layout() {
  return (
    <div className="flex flex-row h-screen w-screen overflow-hidden">
      <Sidebar />
      <div className="p-[25px]">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
export default Layout;
