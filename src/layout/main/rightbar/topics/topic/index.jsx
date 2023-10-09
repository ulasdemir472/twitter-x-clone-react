import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { numberFormat } from "~/utils/formats";

const Topic = ({ item }) => {
  return (
    <Link to="/" className="py-3 px-4 hover:bg-white/[0.03] transition-colors">
      <div className="text-[13px] text-[#77767b] leading-4">{item.title}</div>
      <div className="font-bold leading-5 text-[15px] mt-0.5 text-[#e7e9ea]">
        {item.topic.type === "tag" && "#"}
        {item.topic.value}
      </div>
      {item?.postCount && (
        <div className="leading-4 text-[13px] mt-1 text-[#77767b]">
          {numberFormat(item.postCount)} posts
        </div>
      )}
    </Link>
  );
};

Topic.propTypes = {
  item: PropTypes.any,
};

export default Topic;
