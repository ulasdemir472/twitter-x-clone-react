import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-4 mb-4 flex flex-wrap gap-2">
      <Link
        to="/"
        className="leading-4 text-[#71767b] text-[13px] hover:underline"
      >
        Hizmet Şartları
      </Link>
      <Link
        to="/"
        className="leading-4 text-[#71767b] text-[13px] hover:underline"
      >
        Çerez Politikası
      </Link>
      <Link
        to="/"
        className="leading-4 text-[#71767b] text-[13px] hover:underline"
      >
        Gizlilik Politikası
      </Link>
      <Link
        to="/"
        className="leading-4 text-[#71767b] text-[13px] hover:underline"
      >
        Imprint
      </Link>
      <Link
        to="/"
        className="leading-4 text-[#71767b] text-[13px] hover:underline"
      >
        Erişilebilirlik
      </Link>
      <Link
        to="/"
        className="leading-4 text-[#71767b] text-[13px] hover:underline"
      >
        Reklam Bilgisi
      </Link>
      <Link
        to="/"
        className="leading-4 text-[#71767b] text-[13px] flex items-center"
      >
        <Popover className="relative">
          <Popover.Button className="hover:underline">
            Daha fazla
          </Popover.Button>
          <Popover.Panel className="bottom-full right-0 rounded-xl w-[150px] max-w-[384px] bg-black shadow-box absolute grid z-[2] overflow-hidden">
            <span className="px-4 py-3 text-white font-bold text-[15px] leading-5 hover:bg-white/[0.07]">
              About
            </span>
            <span className="px-4 py-3 text-white font-bold text-[15px] leading-5 hover:bg-white/[0.07]">
              Download the X App
            </span>
            <span className="px-4 py-3 text-white font-bold text-[15px] leading-5 hover:bg-white/[0.07]">
              Status
            </span>
            <span className="px-4 py-3 text-white font-bold text-[15px] leading-5 hover:bg-white/[0.07]">
              X for Business
            </span>
            <span className="px-4 py-3 text-white font-bold text-[15px] leading-5 hover:bg-white/[0.07]">
              Developers
            </span>
          </Popover.Panel>
        </Popover>

        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-[19px] pt-1">
          <path
            fill="currentColor"
            d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
          ></path>
        </svg>
      </Link>

      <span className="leading-4 text-[#71767b] text-[13px]">
        © 2023 X Corp. / ulasdev
      </span>
    </footer>
  );
};

export default Footer;
