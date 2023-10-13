import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import RightBar from "./rightbar/index";
import { useSelector } from "react-redux";
import Modal from "~/modals";

const MainLayout = () => {
  const modal = useSelector((state) => state.modal.modal);
  console.log(modal);

  return (
    <div className="w-[1265px] mx-auto flex">
      {modal && <Modal />}
      <Sidebar />
      <main className="flex-1 flex gap-[30px]">
        <main className="flex-1 max-w-[600px] border-x border-[#2f3336]">
          <Outlet />
        </main>
        <RightBar />
      </main>
    </div>
  );
};

export default MainLayout;
