import { PropTypes } from "prop-types";

const Content = ({ children }) => {
  return <div>{children}</div>;
};

Content.propTypes = {
  children: PropTypes.any,
};

export default Content;
