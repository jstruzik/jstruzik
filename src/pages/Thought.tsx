import { Link, useParams } from "react-router-dom";
import { thoughts } from "@/data/thoughts";

const Thought = () => {
  const { slug } = useParams();
  const thought = thoughts.find((item) => item.slug === slug);

  if (!thought) {
    return (
      <main className="min-h-screen bg-[#f7f2e8] px-4 py-10 text-[#151515]">
        <div className="mx-auto max-w-3xl">
          <Link to="/" className="font-mono text-sm uppercase underline">
            Back home
          </Link>
          <h1 className="mt-8 font-serif text-5xl font-black leading-none">
            Thought not found.
          </h1>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#f7f2e8] text-[#151515]">
      <article className="mx-auto max-w-3xl px-4 py-10 md:py-14">
        <Link to="/" className="font-mono text-sm uppercase underline">
          Back home
        </Link>
        <p className="mt-10 font-mono text-sm uppercase text-[#42526b]">
          Current thought
        </p>
        <h1 className="mt-3 font-serif text-5xl font-black leading-[0.95] md:text-7xl">
          {thought.title}
        </h1>
        <p className="mt-6 border-l-4 border-[#151515] bg-white px-4 py-3 text-xl leading-snug">
          {thought.summary}
        </p>
        <div className="mt-8 space-y-5 text-xl leading-snug">
          {thought.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
};

export default Thought;
