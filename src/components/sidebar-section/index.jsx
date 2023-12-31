import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";

const SidebarSection = ({ title, children, more }) => {
  return (
    <section className="bg-[color:var(--background-secondary)] rounded-2xl overflow-hidden border border-[color:var(--background-secondary)] mb-4">
      <h5 className="flex items-center py-3 px-4 text-xl font-extrabold leading-6">
        {title}
      </h5>
      <div className="grid">
        {children}
        {more && (
          <Link
            to={more}
            className="h-[3.25rem] flex items-center justify-start p-4 text-[color:var(--color-primary)] hover:bg-[color:var(--background-third)]"
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
