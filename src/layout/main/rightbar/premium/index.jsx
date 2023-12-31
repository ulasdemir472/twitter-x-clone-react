import Button from "~/components/button";

const Premium = () => {
  return (
    <section className="mb-4 px-4 py-3 bg-[color:var(--background-secondary)] rounded-2xl border border-[color:var(--background-secondary)] flex flex-col gap-2.5">
      <span className="font-extrabold text-xl leading-6">
        Subscribe to Premium
      </span>
      <span className=" font-bold leading-5">
        Subscribe to unlock new features and if eligible, receive a share of ads
        revenue.
      </span>
      <div className="self-start">
        <Button>Subscribe</Button>
      </div>
    </section>
  );
};

export default Premium;
