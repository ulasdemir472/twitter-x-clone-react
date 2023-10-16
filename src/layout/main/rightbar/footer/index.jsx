import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="px-4 mb-4 flex flex-wrap gap-2 text-[0.813rem]">
      <Link
        to="/"
        className="leading-4 text-[color:var(--color-baseSecondary)] hover:underline"
      >
        Hizmet Şartları
      </Link>
      <Link
        to="/"
        className="leading-4 text-[color:var(--color-baseSecondary)] hover:underline"
      >
        Çerez Politikası
      </Link>
      <Link
        to="/"
        className="leading-4 text-[color:var(--color-baseSecondary)] hover:underline"
      >
        Gizlilik Politikası
      </Link>
      <Link
        to="/"
        className="leading-4 text-[color:var(--color-baseSecondary)] hover:underline"
      >
        Imprint
      </Link>
      <Link
        to="/"
        className="leading-4 text-[color:var(--color-baseSecondary)] hover:underline"
      >
        Erişilebilirlik
      </Link>
      <Link
        to="/"
        className="leading-4 text-[color:var(--color-baseSecondary)] hover:underline"
      >
        Reklam Bilgisi
      </Link>
      <Link
        to="/"
        className="leading-4 text-[color:var(--color-baseSecondary)] flex items-center"
      >
        <Popover className="relative">
          <Popover.Button className="hover:underline">
            Daha fazla
          </Popover.Button>
          <Popover.Panel className="bottom-full right-0 rounded-xl w-[9.375rem] max-w-[24rem] bg-[color:var(--background-primary)] shadow-box absolute grid z-[2] overflow-hidden">
            <span className="px-4 py-3 text-[--color-base] font-bold leading-5 hover:bg-[--background-secondary]">
              About
            </span>
            <span className="px-4 py-3 text-[--color-base] font-bold leading-5 hover:bg-[--background-secondary]">
              Download the X App
            </span>
            <span className="px-4 py-3 text-[--color-base] font-bold leading-5 hover:bg-[--background-secondary]">
              Status
            </span>
            <span className="px-4 py-3 text-[--color-base] font-bold leading-5 hover:bg-[--background-secondary]">
              X for Business
            </span>
            <span className="px-4 py-3 text-[--color-base] font-bold leading-5 hover:bg-[--background-secondary]">
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

      <span className="leading-4 text-[color:var(--color-baseSecondary)]">
        © 2023 X Corp. / ulasdev
      </span>
    </footer>
  );
};

export default Footer;
