import StickyHeader from "~/components/sticky-header";
import Tab from "~/components/tab";
import ForYou from "./for-you";

const Home = () => {
  return (
    <>
      <StickyHeader title="Anasayfa" />
      <Tab activeTab="for-you">
        <Tab.Items>
          <Tab.Item id="for-you">Size Özel</Tab.Item>
          <Tab.Item id="following">Takip Edilenler</Tab.Item>
        </Tab.Items>
        <Tab.Content id="for-you">
          <ForYou />
        </Tab.Content>
        <Tab.Content id="following">2.content</Tab.Content>
      </Tab>
    </>
  );
};

export default Home;
