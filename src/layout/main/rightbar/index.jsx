import Search from "./search";
import Premium from "./premium/index";
import Topics from "./topics";

const RightBar = () => {
  return (
    <aside className="w-[350px] mr-2.5">
      <Search />
      <Premium />
      <Topics />
    </aside>
  );
};

export default RightBar;
