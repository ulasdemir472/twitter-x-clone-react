import { PropTypes } from "prop-types";
const StickyHeader = ({ title }) => {
  return (
    <header className="sticky top-0 bg-[color:var(--background-primaryAlpha)] z-30 backdrop-blur-md">
      <h3 className="px-4 font-bold h-[3.313rem] flex items-center text-xl">
        {title}
      </h3>
    </header>
  );
};

StickyHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default StickyHeader;
