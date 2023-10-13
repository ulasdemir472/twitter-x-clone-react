import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import RightBar from "./rightbar/index";
import Modal from "~/modals";
import { useEffect } from "react";
import useModal from "~/store/modal/hooks";
import { useAppearance } from "~/store/appearance/hooks";

const MainLayout = () => {
  const modal = useModal();
  const appearance = useAppearance();

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--background-primary",
      appearance.backgroundColor.primary
    );
    document.documentElement.style.setProperty(
      "--background-secondary",
      appearance.backgroundColor.secondary
    );
    document.documentElement.style.setProperty(
      "--background-third",
      appearance.backgroundColor.third
    );

    document.documentElement.style.setProperty(
      "--color-primary",
      appearance.color.primary
    );
    document.documentElement.style.setProperty(
      "--color-secondary",
      appearance.color.secondary
    );

    document.documentElement.style.setProperty(
      "--font-size",
      appearance.fontSize + "px"
    );
  }, [appearance]);

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
