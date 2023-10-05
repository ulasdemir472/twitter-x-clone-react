import classNames from "classnames";
import { createElement } from "react";
import PropTypes from "prop-types";

const Button = ({ size, children }) => {
  return createElement(
    "button",
    {
      className: classNames(
        "bg-[#1d9bf0] rounded-full flex items-center justify-center font-bold",
        {
          "px-4 h-9": size === "normal",
          "px-4 h-[52px] w-full text-[17px]": size === "large",
        }
      ),
    },
    children
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(["normal", "large"]),
  children: PropTypes.node.isRequired,
};

export default Button;
