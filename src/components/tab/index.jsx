import { PropTypes } from "prop-types";
import Items from "~/components/tab/items";
import Item from "~/components/tab/item";
import Content from "~/components/tab/content";
import { useEffect, useState } from "react";
import { TabContext } from "./context";

const Tab = ({ children, activeTab }) => {
  const [active, setActive] = useState(activeTab);

  useEffect(() => {
    setActive(activeTab);
  }, [activeTab]);

  const items = children.filter((c) => c.type === Items);
  const contents = children.filter((c) => c.type === Content);

  const content = contents.find((c) => c.props.id === active);

  const data = { active, setActive };

  return (
    <TabContext.Provider value={data}>
      <div className="border-b border-[color:var(--background-third)] sticky top-[3.313rem] bg-[color:var(--background-primaryAlpha)] z-30 backdrop-blur-md">
        {items}
      </div>
      {content}
    </TabContext.Provider>
  );
};

Tab.Items = Items;
Tab.Item = Item;
Tab.Content = Content;

Tab.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
  activeTab: PropTypes.string.isRequired,
};

export default Tab;
