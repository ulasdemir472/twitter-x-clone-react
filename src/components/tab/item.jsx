import { PropTypes } from "prop-types";
import { useTab } from "./context";
import classNames from "classnames";
const Item = ({ children, id }) => {
  const { active, setActive } = useTab();

  return (
    <button
      className="flex-auto text-center hover:bg-[color:var(--background-secondary)] transition-colors"
      onClick={() => {
        setActive(id);
      }}
    >
      <div
        className={classNames(
          "h-[3.313rem] inline-flex items-center relative font-large",
          {
            "font-bold": active === id,
            "text-[color:var(--color-baseSecondary)] font-medium":
              active !== id,
          }
        )}
      >
        {children}
        {active === id && (
          <div className="h-[4px] absolute bottom-0 left-0 w-full rounded-full bg-[color:var(--color-primary)]" />
        )}
      </div>
    </button>
  );
};

Item.propTypes = {
  children: PropTypes.any,
  id: PropTypes.string,
};

export default Item;
