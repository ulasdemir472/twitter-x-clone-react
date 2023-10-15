import { useRef, useState } from "react";
import { useClickAway } from "react-use";

const Search = () => {
  const [query, setQuery] = useState("");
  const [focus, setFocus] = useState(false);

  const ref = useRef();
  useClickAway(ref, () => {
    setFocus(false);
  });

  return (
    <div
      ref={ref}
      className="min-h-[2rem] h-[3.313rem] mb-3 flex items-center sticky top-0 z-[3] bg-[color:var(--background-primary)]"
    >
      <label
        htmlFor=""
        className="h-[2.688rem] w-full bg-[color:var(--background-third)] rounded-full relative border border-transparent group focus-within:bg-[color:var(--background-primary)] focus-within:border-[#1d9bf0]"
      >
        <div className="h-full w-[3.5rem] flex justify-center items-center absolute top-0 left-0 pointer-events-none">
          <svg
            viewBox="0 0 24 24"
            className="min-w-[2rem] h-[1.172rem] text-[color:var(--color-baseSecondary)] group-focus-within:text-[--color-primary]"
          >
            <path
              fill="currentColor"
              d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search"
          value={query}
          onFocus={() => setFocus(true)}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-transparent w-full h-full rounded-full outline-none pl-[3.5rem] placeholder-[color:var(--color-baseSecondary)] text-[0.938rem]"
        />
        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery("");
            }}
            className="rounded-full bg-blue-500 w-[22px] h-[22px] flex items-center justify-center text-black min-w-[22] absolute right-3 top-1/2 -translate-y-1/2"
          >
            <svg viewBox="0 0 15 15" width={10} height={10}>
              <path
                fill="currentColor"
                d="M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z"
              ></path>
            </svg>
          </button>
        )}
        {focus && (
          <div className="absolute w-[350px] top-full -left-px translate-y-px bg-[color:var(--background-primary)] shadow-box max-h-[calc(80vh-53px)] rounded-lg text-center min-h-[100px]">
            <p className="p-3 pt-5 text-[color:var(--color-baseSecondary)] leading-5">
              Kişileri, listeleri veya anahtar kelimeleri aramayı dene
            </p>
          </div>
        )}
      </label>
    </div>
  );
};

export default Search;
