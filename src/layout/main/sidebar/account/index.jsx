import { Popover, Transition } from "@headlessui/react";
import { useSelector } from "react-redux";
import More from "./more";

const Account = () => {
  //const account = store?.getState().auth?.currentAccount;
  const account = useSelector((state) => state.auth.currentAccount); //rerender eder

  return (
    <Popover className="mt-auto relative">
      <Popover.Button className="my-3 p-3 rounded-full w-full hover:bg-[--background-third] flex items-center text-left outline-none relative">
        <img
          src={account.avatar}
          className="w-10 h-10 rounded-full"
          alt="avatar"
        />
        <div className="flex flex-col justify-center items-start mx-3">
          <span className="font-bold ">{account.fullname}</span>
          <span className="text-[color:var(--color-baseSecondary)]">
            @{account.username}
          </span>
        </div>

        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          width={18.75}
          height={18.75}
          className="absolute right-2.5"
        >
          <path
            fill="currentColor"
            d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
          ></path>
        </svg>
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
        <Popover.Panel className="w-[300px] left-1/2 -translate-x-1/2 bg-[color:var(--background-primary)] shadow-box rounded-xl overflow-hidden">
          {({ close }) => <More close={close} />}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Account;
