import classNames from "classnames";
import { createElement } from "react";
import PropTypes from "prop-types";

const Button = ({ as, size, variant, className, children, ...props }) => {
  return createElement(
    as,
    {
      className: classNames(
        "rounded-full flex items-center justify-center font-bold",
        {
          "px-4 h-8 font-semibold text-sm": size === "small",
          "px-4 h-9 ": size === "normal",
          "px-4 h-[52px] w-full text-[17px]": size === "large",
          "bg-[color:var(--color-primary)] hover:opacity-90 text-white":
            variant === "primary",
          "bg-[color:var(--color-base)] text-[color:var(--background-primary)]":
            variant === "white",
          "border border-[#b4b4b4] hover:border-[#67070f] hover:bg-[#f4212e1a] hover:text-[#f4212e]":
            variant === "outline-white",
          [className]: true,
        }
      ),
      ...props,
    },
    children
  );
};

Button.propTypes = {
  as: PropTypes.any,
  size: PropTypes.oneOf(["small", "normal", "large"]),
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "white", "outline-white"]),
  props: PropTypes.object,
  className: PropTypes.string,
};

Button.defaultProps = {
  as: "button",
  size: "normal",
  variant: "primary",
};

export default Button;
