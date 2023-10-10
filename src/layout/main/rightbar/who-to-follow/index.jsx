import { useSelector } from "react-redux";
import SidebarSection from "~/components/sidebar-section";

const WhoToFollow = () => {
  const account = useSelector((state) => state.auth.currentAccount);

  return (
    <SidebarSection
      title="Kimi takip etmeli"
      more={`https://twitter.com/i/connect_people?user_id=${account.id}`}
    >
      <div className="px-4 py-3 flex justify-center items-center gap-2">
        <div className="mr-2">
          <img
            height={40}
            width={40}
            src="https://pbs.twimg.com/profile_images/1594297822165229569/6Fe9hRZ6_400x400.jpg"
            alt="de marke"
            className="rounded-sm"
          />
        </div>
        <div className="flex flex-1 justify-between items-center">
          <div className="flex flex-col items-start justify-center">
            <span className="font-bold">De Marke Sports</span>
            <span className="text-gray-600">@demarke</span>
          </div>
          <button className="px-3 py-2 h-8 bg-white text-black rounded-full flex items-center justify-center font-semibold">
            Takip et
          </button>
        </div>
      </div>
    </SidebarSection>
  );
};

export default WhoToFollow;
