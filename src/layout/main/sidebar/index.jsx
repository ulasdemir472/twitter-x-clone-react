import Account from "./account";
import Logo from "./logo";
import Menu from "./menu";

const Sidebar = () => {
  return (
    <aside className="w-[267px] min-h-screen max-h-screen px-2 flex flex-col">
      <Logo />
      <Menu />
      <Account />
    </aside>
  );
};

export default Sidebar;
