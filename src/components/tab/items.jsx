import { PropTypes } from "prop-types";

const Items = ({ children }) => {
  return <div className="flex">{children}</div>;
};

Items.propTypes = {
  children: PropTypes.any,
};

export default Items;
