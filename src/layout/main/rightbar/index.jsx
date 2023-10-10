import Search from "./search";
import Premium from "./premium/index";
import Topics from "./topics";
import WhoToFollow from "./who-to-follow";

const RightBar = () => {
  return (
    <aside className="w-[350px] mr-2.5">
      <Search />
      <Premium />
      <Topics />
      <WhoToFollow />
    </aside>
  );
};

export default RightBar;
