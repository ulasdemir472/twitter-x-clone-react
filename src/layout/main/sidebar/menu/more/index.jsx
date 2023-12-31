import { Popover, Disclosure } from "@headlessui/react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { setModal } from "~/store/modal/actions";

const More = () => {
  return (
    <Popover className="relative">
      <Popover.Button className="py-1 block group outline-none">
        <div className="p-3 rounded-full inline-flex items-center gap-5 group-hover:bg-[color:var(--background-third)] transition-colors">
          <div className="w-[26.25px] h-[26.25px] relative">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"
              ></path>
            </svg>
          </div>
          <div className="pr-4 text-xl">Daha Fazla</div>
        </div>
      </Popover.Button>
      <Popover.Panel className="w-[19.875rem] absolute bottom-0 left-0 bg-[color:var(--background-primary)] shadow-box rounded-xl overflow-hidden">
        <button className="p-3 h-[3.5rem] w-full inline-flex items-center gap-5 hover:bg-[color:var(--background-secondary)] transition-colors">
          <div className="w-[1.641rem] h-[1.641rem] relative">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"
              ></path>
            </svg>
          </div>
          <div className="pr-4 text-xl font-bold">Bağlan</div>
        </button>
        <button className="p-3 h-[3.5rem] w-full inline-flex items-center gap-5 hover:bg-[color:var(--background-secondary)] transition-colors">
          <div className="w-[1.641rem] h-[1.641rem] relative">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"
              ></path>
            </svg>
          </div>
          <div className="pr-4 text-xl font-bold">Kitaplık</div>
        </button>

        <div className="h-[0.031rem] bg-[color:var(--background-third)] w-[90%] mx-auto my-0.5" />

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="h-[3.25rem] w-full justify-between flex items-center px-4 font-bold hover:bg-[color:var(--background-secondary)] transition-colors">
                Is team pricing available?
                <svg
                  className={classNames({
                    "rotate-180 text-[color:var(--color-primary)]": open,
                  })}
                  viewBox="0 0 24 24"
                  height={18.75}
                  width={18.75}
                >
                  <path
                    fill="currentColor"
                    d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"
                  ></path>
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel>
                <Link
                  to="/"
                  className="flex items-center px-4 h-[2.75rem] gap-4 font-medium hover:bg-[color:var(--background-secondary)] transition-colors"
                >
                  <svg viewBox="0 0 24 24" width={18.75} height={18.75}>
                    <path
                      fill="currentColor"
                      d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"
                    ></path>
                  </svg>
                  İstatistikler
                </Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="h-[3.25rem] w-full justify-between flex items-center px-4 font-bold hover:bg-[color:var(--background-secondary)] transition-colors">
                Profesyonel Araçlar
                <svg
                  className={classNames({
                    "rotate-180 text-[color:var(--color-primary)]": open,
                  })}
                  viewBox="0 0 24 24"
                  height={18.75}
                  width={18.75}
                >
                  <path
                    fill="currentColor"
                    d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"
                  ></path>
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel>
                <Link
                  to="/"
                  className="flex items-center px-4 h-[2.75rem] font-medium hover:bg-[color:var(--background-secondary)] transition-colors"
                >
                  Reklamlar
                </Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="h-[3.25rem] w-full justify-between flex items-center px-4 font-bold hover:bg-[color:var(--background-secondary)] transition-colors">
                Ayarlar ve Destek
                <svg
                  className={classNames({
                    "rotate-180 text-[color:var(--color-primary)]": open,
                  })}
                  viewBox="0 0 24 24"
                  height={18.75}
                  width={18.75}
                >
                  <path
                    fill="currentColor"
                    d="M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z"
                  ></path>
                </svg>
              </Disclosure.Button>
              <Disclosure.Panel>
                <Link
                  to="/"
                  className="flex items-center px-4 h-[2.75rem] font-medium hover:bg-[color:var(--background-secondary)] transition-colors"
                >
                  Ayarlar ve Gizlilik
                </Link>
              </Disclosure.Panel>
              <Disclosure.Panel>
                <Link
                  to="/"
                  className="flex items-center px-4 h-[2.75rem] font-medium hover:bg-[color:var(--background-secondary)] transition-colors"
                >
                  Yardım Merkezi
                </Link>
              </Disclosure.Panel>
              <Disclosure.Panel>
                <button
                  onClick={() => setModal("appearance")}
                  className="flex items-center px-4 h-[2.75rem] w-full font-medium hover:bg-[color:var(--background-secondary)] transition-colors"
                >
                  Görünüm
                </button>
              </Disclosure.Panel>
              <Disclosure.Panel>
                <Link
                  to="/"
                  className="flex items-center px-4 h-[2.75rem] font-medium hover:bg-[color:var(--background-secondary)] transition-colors"
                >
                  Klavye Kısayolları
                </Link>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </Popover.Panel>
    </Popover>
  );
};

export default More;
