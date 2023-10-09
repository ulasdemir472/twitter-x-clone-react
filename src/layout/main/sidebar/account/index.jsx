import { Popover, Transition } from "@headlessui/react";
import { useSelector } from "react-redux";
import More from "./more";

const Account = () => {
  //const account = store?.getState().auth?.currentAccount;
  const account = useSelector((state) => state.auth.currentAccount); //rerender eder

  return (
    <Popover className="mt-auto relative">
      <Popover.Button className="my-3 p-3 rounded-full w-full hover:bg-[#eff3f41a] flex items-center text-left outline-none">
        <img
          src={account.avatar}
          className="w-10 h-10 rounded-full"
          alt="avatar"
        />
        <div className="flex flex-col justify-center items-start mx-3">
          <span className="font-bold ">{account.fullname}</span>
          <span className="text-gray-600">@{account.username}</span>
        </div>
      </Popover.Button>
      <Transition
        className="left-[50%] bottom-full absolute"
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel className="w-[300px] left-1/2 -translate-x-1/2 bg-black shadow-box rounded-xl overflow-hidden">
          {({ close }) => <More close={close} />}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Account;
