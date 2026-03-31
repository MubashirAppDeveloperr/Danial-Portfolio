import { Link } from "react-router-dom";

const AboutOne = () => {
  const handleSendPrompt = (message) => {
    console.log("Prompt:", message);
  };

  return (
    <div className="bg-[#0a0a09] text-[#e8e8e2] w-full font-['Poppins',sans-serif]">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-9 py-[18px] border-b border-[#1c1c1a]">
        <Link
          to="/"
          className="text-sm font-bold tracking-[0.04em] text-[#e8e8e2] hover:text-[#e8e8e2] transition-colors duration-150"
        >
          Danial Malik
        </Link>
        <div className="flex gap-7">
          <Link
            to="/blog"
            className="text-[11px] text-[#555] tracking-[0.08em] uppercase cursor-pointer font-medium hover:text-[#e8e8e2] transition-colors duration-150"
          >
            Blog
          </Link>
          <Link
            to="/watch"
            className="text-[11px] text-[#555] tracking-[0.08em] uppercase cursor-pointer font-medium hover:text-[#e8e8e2] transition-colors duration-150"
          >
            Watch
          </Link>
          <Link
            to="/services"
            className="text-[11px] text-[#555] tracking-[0.08em] uppercase cursor-pointer font-medium hover:text-[#e8e8e2] transition-colors duration-150"
          >
            Services
          </Link>
          <Link
            to="/support"
            className="text-[11px] text-[#555] tracking-[0.08em] uppercase cursor-pointer font-medium hover:text-[#e8e8e2] transition-colors duration-150"
          >
            Support Me
          </Link>
          <Link
            to="/about-one"
            className="text-[11px] text-[#555] tracking-[0.08em] uppercase cursor-pointer font-medium hover:text-[#e8e8e2] transition-colors duration-150"
          >
            About 1
          </Link>
          <Link
            to="/about-two"
            className="text-[11px] text-[#555] tracking-[0.08em] uppercase cursor-pointer font-medium hover:text-[#e8e8e2] transition-colors duration-150"
          >
            About 2
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-[720px] mx-auto px-9 pt-[72px] pb-14">
        <div className="text-[10px] text-[#333] tracking-[0.18em] uppercase font-medium mb-5">
          About me
        </div>
        <div className="text-[32px] font-black text-[#e8e8e2] leading-[1.25] tracking-[-0.02em] mb-8">
          Hey, I'm Danial. I'm a creator, writer, and someone who got obsessed
          with{" "}
          <em className="italic text-[#666] font-light">
            understanding the world
          </em>{" "}
          — and couldn't stop talking about it.
        </div>
        <div className="w-full h-[260px] bg-[#0e0e0c] border border-[#1c1c1a] flex items-center justify-center mb-12">
          <div className="text-[9px] text-[#1e1e1c] tracking-[0.14em] uppercase font-medium">
            Your photo goes here
          </div>
        </div>
      </div>

      {/* Quick Facts */}
      <div className="max-w-[720px] mx-auto px-9 pb-14">
        <div className="text-xl font-extrabold text-[#e8e8e2] tracking-[-0.01em] mb-5">
          Quick facts about me
        </div>
        <div className="flex flex-col">
          {[
            "I built a YouTube channel, grew it, and then watched it get <strong>terminated overnight</strong> — no warning, no appeal. I decided to build something I actually own instead.",
            "I cover <strong>finance and investing</strong> the way I wish someone had explained it to me — no jargon, no pretending I know more than I do.",
            "I write about <strong>world events</strong> not as a journalist, but as someone who thinks you deserve to understand what's actually happening and why it matters.",
            "I know <strong>video editing</strong> well. Years of editing experience taught me what makes content actually work — and why most videos lose people in the first 10 seconds.",
            "I'm based in <strong>Busan, South Korea</strong>. It's underrated and I'll die on that hill.",
          ].map((fact, idx) => (
            <div
              key={idx}
              className="flex gap-4 py-[14px] border-b border-[#141412] items-start first:border-t first:border-[#141412]"
            >
              <div className="w-[5px] h-[5px] rounded-full bg-[#333] mt-2 flex-shrink-0"></div>
              <div
                className="text-[13px] text-[#666] leading-[1.8] font-light"
                dangerouslySetInnerHTML={{ __html: fact }}
              />
            </div>
          ))}
        </div>
      </div>

      <hr className="border-t border-[#1c1c1a] mx-9" />

      {/* Story Section */}
      <div className="max-w-[720px] mx-auto px-9 py-14">
        <div className="text-2xl font-black text-[#e8e8e2] tracking-[-0.01em] mb-6">
          My story
        </div>
        <p className="text-sm text-[#666] leading-[1.95] font-light mb-5">
          I'm not an expert. I'm not a guru. I'm someone who got obsessed with
          understanding the world —{" "}
          <strong className="text-[#aaa] font-semibold">
            money, people, news, ideas
          </strong>{" "}
          — and couldn't stop talking about it.
        </p>
        <p className="text-sm text-[#666] leading-[1.95] font-light mb-5">
          The honest version is this: I started making content because I had
          things to say and nowhere to say them. I built a YouTube channel
          around playlists, vlogs, and topics I genuinely cared about — finance,
          self-development, what's happening in the world, and what it feels
          like to be young and trying to figure it all out.
        </p>
        <p className="text-sm text-[#666] leading-[1.95] font-light mb-5">
          Then the channel got terminated. No warning. No explanation that made
          sense. Just gone.{" "}
          <strong className="text-[#aaa] font-semibold">
            Everything I built — wiped.
          </strong>
        </p>
        <p className="text-sm text-[#666] leading-[1.95] font-light mb-5">
          Most people would quit. I took it as a sign to build something I
          actually own. A site with my name on it. Writing that lives on my
          terms. An audience that signed up for{" "}
          <em className="italic text-[#777]">me</em> — not a platform's
          recommendation of me. That's what this is.
        </p>
      </div>

      <hr className="border-t border-[#1c1c1a] mx-9" />

      {/* Timeline Section */}
      <div className="max-w-[720px] mx-auto px-9 py-14">
        <div className="text-2xl font-black text-[#e8e8e2] tracking-[-0.01em] mb-9">
          How I got here
        </div>

        <div className="grid grid-cols-[80px_1fr] gap-6 mb-10 pb-10 border-b border-[#141412]">
          <div className="text-[11px] font-bold text-[#2a2a28] tracking-[0.06em] pt-[3px]">
            Early on
          </div>
          <div>
            <div className="text-[15px] font-extrabold text-[#888] tracking-[-0.01em] mb-2.5">
              Curiosity before content
            </div>
            <p className="text-[13px] text-[#555] leading-[1.9] font-light">
              Before I ever thought about making content, I was just someone who
              read too much and asked too many questions.{" "}
              <strong className="text-[#888] font-semibold">
                Finance, geopolitics, human psychology
              </strong>{" "}
              — the kind of things most people around me weren't talking about.
              That became the foundation for everything.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-[80px_1fr] gap-6 mb-10 pb-10 border-b border-[#141412]">
          <div className="text-[11px] font-bold text-[#2a2a28] tracking-[0.06em] pt-[3px]">
            The channel
          </div>
          <div>
            <div className="text-[15px] font-extrabold text-[#888] tracking-[-0.01em] mb-2.5">
              Building on borrowed land
            </div>
            <p className="text-[13px] text-[#555] leading-[1.9] font-light mb-[14px]">
              I started making videos and playlists on YouTube. It grew. People
              watched. It felt real. I put genuine time and care into the
              editing, the topics, the style — and the numbers started to
              reflect that. For a while, it felt like{" "}
              <strong className="text-[#888] font-semibold">
                I was building something
              </strong>
              .
            </p>
            <div className="w-full h-[100px] bg-[#0d0d0b] border border-[#141412] flex items-center justify-center">
              <div className="text-[9px] text-[#1a1a18] tracking-[0.12em] uppercase font-medium">
                Video thumbnail placeholder
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[80px_1fr] gap-6 mb-10 pb-10 border-b border-[#141412]">
          <div className="text-[11px] font-bold text-[#2a2a28] tracking-[0.06em] pt-[3px]">
            The loss
          </div>
          <div>
            <div className="text-[15px] font-extrabold text-[#888] tracking-[-0.01em] mb-2.5">
              Gone overnight
            </div>
            <p className="text-[13px] text-[#555] leading-[1.9] font-light">
              Then it was gone. Terminated without warning. The appeal process
              went nowhere. All those videos, that subscriber count, that
              momentum — wiped. It was genuinely painful. But it taught me
              something I couldn't have learned any other way:{" "}
              <strong className="text-[#888] font-semibold">
                the platform was never mine.
              </strong>{" "}
              I was renting space on someone else's land and calling it home.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-[80px_1fr] gap-6">
          <div className="text-[11px] font-bold text-[#2a2a28] tracking-[0.06em] pt-[3px]">
            Now
          </div>
          <div>
            <div className="text-[15px] font-extrabold text-[#888] tracking-[-0.01em] mb-2.5">
              Building something real
            </div>
            <p className="text-[13px] text-[#555] leading-[1.9] font-light">
              This site is the answer to that. I'm writing, I'm making videos
              again — on a new channel — and I'm doing it from a place I own.{" "}
              <strong className="text-[#888] font-semibold">
                Danialmalik.com
              </strong>{" "}
              is my home base. Not YouTube's, not Instagram's. Mine. If
              something I make helps you think differently about money, the
              world, or your own life — that's the whole point.
            </p>
          </div>
        </div>
      </div>

      <hr className="border-t border-[#1c1c1a] mx-9" />

      {/* Topics Section */}
      <div className="max-w-[720px] mx-auto px-9 py-14">
        <div className="text-2xl font-black text-[#e8e8e2] tracking-[-0.01em] mb-5">
          What I write and talk about
        </div>
        <p className="text-[13px] text-[#555] leading-[1.85] font-light mb-7">
          Five areas I keep coming back to — not because I'm an expert in all of
          them, but because I can't stop thinking about them.
        </p>
        <div className="flex flex-col">
          {[
            {
              name: "Finance & investing",
              desc: "Money basics, investing principles, and how to think about wealth when you're young and starting from nothing. No jargon, no pretending.",
            },
            {
              name: "Self-development",
              desc: "Not the toxic hustle version. The real kind — habits, mindset, and what it actually looks like to work on yourself without burning out.",
            },
            {
              name: "World events",
              desc: "What's happening globally, why it matters, and what it means for ordinary people. Written by someone who's learning alongside you.",
            },
            {
              name: "Creator life",
              desc: "The honest side of building a personal brand — what works, what doesn't, and what nobody tells you upfront about putting yourself out there.",
            },
            {
              name: "Personal stories",
              desc: "Daily lessons, life updates, things I learned that changed how I think. Short, honest, and written like I'm talking to a friend.",
            },
          ].map((topic, idx) => (
            <div
              key={idx}
              className="flex justify-between items-start py-4 border-b border-[#141412] gap-6 first:border-t first:border-[#141412]"
            >
              <div className="text-[13px] font-bold text-[#aaa] min-w-[160px]">
                {topic.name}
              </div>
              <div className="text-[12px] text-[#444] leading-[1.75] font-light flex-1">
                {topic.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-t border-[#1c1c1a] mx-9" />

      {/* Now Section */}
      <div className="max-w-[720px] mx-auto px-9 py-14">
        <div className="text-2xl font-black text-[#e8e8e2] tracking-[-0.01em] mb-2">
          What I'm doing now
        </div>
        <div className="text-[12px] text-[#2e2e2c] font-light italic mb-6">
          Updated March 2026 — inspired by Derek Sivers' /now page idea.
        </div>
        <div className="flex flex-col">
          {[
            "<strong>Building this site</strong> — writing, designing, and publishing danialmalik.com from scratch.",
            "<strong>Writing consistently</strong> — publishing across finance, world events, and self-development. Finding my voice and sticking to it.",
            "<strong>Growing a new YouTube channel</strong> — starting fresh after the termination. Slower this time, smarter this time.",
            "<strong>Offering 1-on-1 sessions</strong> — finance basics, content strategy, video editing. A few spots open.",
            "<strong>Living in Busan, South Korea</strong> — writing from here, thinking from here. It's a great city.",
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex gap-4 py-[14px] border-b border-[#141412] items-start first:border-t first:border-[#141412]"
            >
              <div className="w-[5px] h-[5px] rounded-full bg-[#252523] mt-2 flex-shrink-0"></div>
              <div
                className="text-[13px] text-[#555] leading-[1.8] font-light"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-[#0d0d0b] border-t border-[#1c1c1a] py-14 px-9 text-center flex flex-col items-center">
        <div className="text-[10px] text-[#2e2e2c] tracking-[0.18em] uppercase font-medium mb-3">
          Stay in the loop
        </div>
        <div className="text-[28px] font-black text-[#e8e8e2] tracking-[-0.01em] mb-2">
          Join the newsletter.
        </div>
        <p className="text-[13px] text-[#444] font-light italic leading-[1.75] max-w-[400px] mb-7">
          Thoughts on finance, the world, and being a human being — sent when
          something is actually worth saying.
        </p>
        <div className="flex max-w-[440px] w-full">
          <input
            type="email"
            placeholder="your@email.com"
            className="bg-[#0a0a09] border border-[#1e1e1c] border-r-0 text-[#e8e8e2] font-['Poppins',sans-serif] text-[12px] py-[13px] px-4 outline-none font-light flex-1 placeholder:text-[#252523]"
          />
          <button
            onClick={() =>
              handleSendPrompt(
                "What should the Danial Malik newsletter welcome email say?"
              )
            }
            className="bg-[#e8e8e2] text-[#0a0a09] font-['Poppins',sans-serif] text-[10px] font-bold tracking-[0.1em] uppercase py-[13px] px-5 border-none cursor-pointer whitespace-nowrap"
          >
            Subscribe free
          </button>
        </div>
        <div className="text-[10px] text-[#252523] font-light mt-3">
          No spam. Unsubscribe any time. Always free.
        </div>
      </div>

      {/* Footer */}
      <footer className="px-9 py-6 flex justify-between items-center border-t border-[#1c1c1a]">
        <div className="text-[11px] font-semibold text-[#252523] tracking-[0.04em]">
          © 2026 Danial Malik
        </div>
        <div className="flex gap-5">
          <Link
            to="/blog"
            className="text-[10px] text-[#252523] tracking-[0.08em] uppercase cursor-pointer font-medium"
          >
            Blog
          </Link>
          <Link
            to="/watch"
            className="text-[10px] text-[#252523] tracking-[0.08em] uppercase cursor-pointer font-medium"
          >
            Watch
          </Link>
          <Link
            to="/about-one"
            className="text-[10px] text-[#252523] tracking-[0.08em] uppercase cursor-pointer font-medium"
          >
            About 1
          </Link>
          <Link
            to="/about-two"
            className="text-[10px] text-[#252523] tracking-[0.08em] uppercase cursor-pointer font-medium"
          >
            About 2
          </Link>
          <Link
            to="/contact"
            className="text-[10px] text-[#252523] tracking-[0.08em] uppercase cursor-pointer font-medium"
          >
            Contact
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default AboutOne;
