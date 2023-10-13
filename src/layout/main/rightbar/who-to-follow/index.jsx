import { useSelector } from "react-redux";
import SidebarSection from "~/components/sidebar-section";
import UserCard from "~/components/user-card";
import { whoToFollowUsers } from "~/mock";

const WhoToFollow = () => {
  const account = useSelector((state) => state.auth.currentAccount);

  return (
    <SidebarSection
      title="Kimi takip etmeli"
      more={`https://twitter.com/i/connect_people?user_id=${account.id}`}
    >
      {whoToFollowUsers.map((user) => {
        return <UserCard user={user} key={user.id} />;
      })}
    </SidebarSection>
  );
};

export default WhoToFollow;
