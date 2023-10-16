import { NavLink } from "react-router-dom";
import classNames from "classnames";
import { MenuItems } from "~/utils/consts";
import More from "./more";
import New from "./new";
import { useSelector } from "react-redux";

const Menu = () => {
  const account = useSelector((state) => state.auth.currentAccount);

  return (
    <nav className="mt-0.5 mb-1">
      {MenuItems.map((item, index) => {
        return (
          <NavLink
            to={typeof item.path == "function" ? item.path(account) : item.path}
            className="py-[0.188rem] block group"
            key={index}
          >
            {({ isActive }) => (
              <div
                className={classNames(
                  "p-3 rounded-full inline-flex items-center gap-5 group-hover:bg-[color:var(--background-third)] transition-colors",
                  {
                    "font-bold": isActive,
                  }
                )}
              >
                <div className="w-[1.641rem] h-[1.641rem] relative">
                  {item?.notifications && (
                    <span className="w-[1.125rem] h-[1.125rem] absolute -top-1.5 -right-1 bg-[color:var(--color-primary)] text-white rounded-full flex justify-center items-center text-[0.688rem]">
                      {item?.notifications}
                    </span>
                  )}

                  {!isActive && item.icons.passive}
                  {isActive && item.icons.active}
                </div>

                <div className="pr-4 text-xl">{item.title}</div>
              </div>
            )}
          </NavLink>
        );
      })}
      <More />
      <New />
    </nav>
  );
};

export default Menu;
