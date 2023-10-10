import { topics } from "~/utils/consts";
import Topic from "./topic";
import SidebarSection from "~/components/sidebar-section";

const Topics = () => {
  return (
    <SidebarSection title="İlgini Çekebilecek Gündemler" more="/trends">
      {topics.map((topic, index) => (
        <Topic item={topic} key={index} />
      ))}
    </SidebarSection>
  );
};

export default Topics;
