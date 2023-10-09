import { topics } from "~/utils/consts";
import Topic from "./topic";

const Topics = () => {
  return (
    <section className="bg-[#16181c] rounded-2xl  border border-[#16181c]">
      <h5 className="flex items-center py-3 px-4 text-xl font-extrabold leading-6 text-[#e7e9ea]">
        İlgini Çekebilecek Gündemler
      </h5>
      <div className="grid">
        {topics.map((topic, index) => (
          <Topic item={topic} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Topics;
