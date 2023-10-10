import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const SidebarSection = ({ title, children, more }) => {
  return (
    <section className="bg-[#16181c] rounded-2xl overflow-hidden border border-[#16181c] mb-4">
      <h5 className="flex items-center py-3 px-4 text-xl font-extrabold leading-6 text-[#e7e9ea]">
        {title}
      </h5>
      <div className="grid">
        {children}
        {more && (
          <Link
            to={more}
            className="h-[52px] flex items-center justify-start p-4 text-blue-500 hover:bg-white/[0.03] text-[15px]"
          >
            Daha fazla göster
          </Link>
        )}
      </div>
    </section>
  );
};

SidebarSection.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  more: PropTypes.string,
};

export default SidebarSection;
