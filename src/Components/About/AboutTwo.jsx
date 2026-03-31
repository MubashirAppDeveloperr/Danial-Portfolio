import { Link } from "react-router-dom";

const AboutTwo = () => {
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
      {/* Hero Split Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-[#1c1c1a] min-h-[340px]">
        <div className="bg-[#0d0d0b] border-r border-[#1c1c1a] flex flex-col items-center justify-center gap-2.5 min-h-[300px]">
          <div className="w-[100px] h-[100px] rounded-full bg-[#141412] border border-[#1e1e1c] flex items-center justify-center">
            <div className="text-[26px] font-black text-[#252523] tracking-[-0.02em]">
              DM
            </div>
          </div>
          <div className="text-[9px] text-[#1e1e1c] tracking-[0.14em] uppercase font-medium">
            Your photo goes here
          </div>
        </div>
        <div className="px-11 py-[52px] flex flex-col justify-center">
          <div className="text-[10px] text-[#333] tracking-[0.18em] uppercase font-medium mb-4">
            About me
          </div>
          <div className="text-[42px] font-black text-[#e8e8e2] tracking-[-0.02em] leading-[1.0] mb-4">
            Danial Malik
          </div>
          <p className="text-sm text-[#555] leading-[1.85] font-light mb-6">
            Writer. Creator.{" "}
            <strong className="text-[#888] font-semibold">
              Figuring it out — and writing about it.
            </strong>
            <br />
            <br />
            Based in Busan, South Korea. Covering finance, self-development,
            world events, and what it actually looks like to build something
            from scratch.
          </p>
          <div className="flex gap-2.5 flex-wrap">
            {["Twitter / X", "YouTube", "Instagram", "LinkedIn"].map(
              (social, idx) => (
                <button
                  key={idx}
                  onClick={() =>
                    handleSendPrompt(
                      `What social platforms should Danial Malik be active on?`
                    )
                  }
                  className="text-[10px] text-[#333] tracking-[0.08em] uppercase font-semibold border border-[#1e1e1c] py-[7px] px-4 cursor-pointer rounded-sm bg-transparent hover:border-[#444] hover:text-[#888] transition-all duration-150"
                >
                  {social}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] border-b border-[#1c1c1a]">
        <div className="px-8 py-10 border-r border-[#1c1c1a]">
          <div className="text-[22px] font-black text-[#e8e8e2] tracking-[-0.01em] leading-[1.15] mb-2">
            The honest version.
          </div>
          <div className="text-[11px] text-[#2e2e2c] font-light italic leading-[1.7]">
            Not the LinkedIn bio. The real one.
          </div>
        </div>
        <div className="px-11 py-10">
          <p className="text-sm text-[#777] leading-[1.95] font-light mb-5">
            I'm not an expert. I'm not a guru. I'm someone who got obsessed with
            understanding the world —{" "}
            <strong className="text-[#aaa] font-semibold">
              money, people, news, ideas
            </strong>{" "}
            — and couldn't stop talking about it.
          </p>
          <p className="text-sm text-[#777] leading-[1.95] font-light mb-5">
            I built a YouTube channel, grew it, and then watched it get
            terminated overnight. No warning. No appeal. Just gone. Most people
            would quit. I decided to build something I actually own.
          </p>
          <div className="text-[17px] font-bold text-[#e8e8e2] leading-[1.4] italic tracking-[-0.01em] border-l-2 border-[#e8e8e2] pl-[18px] my-7">
            "The platform was never mine. I was renting space on someone else's
            land and calling it home."
          </div>
          <p className="text-sm text-[#777] leading-[1.95] font-light mb-5">
            So this site is that thing. A place for my writing, my videos, my
            thoughts — on my terms. If something I make helps you think
            differently about money, the world, or your own life, then it was
            worth building.
          </p>
          <p className="text-sm text-[#777] leading-[1.95] font-light">
            I write about{" "}
            <strong className="text-[#aaa] font-semibold">
              finance and investing
            </strong>{" "}
            the way I wish someone had explained it to me — no jargon, no
            pretending I know more than I do. I cover{" "}
            <strong className="text-[#aaa] font-semibold">world events</strong>{" "}
            not as a journalist but as someone who thinks you deserve to
            understand what's actually happening. And I write about{" "}
            <strong className="text-[#aaa] font-semibold">
              self-development and creator life
            </strong>{" "}
            from the trenches, not from a place of having it all figured out.
          </p>
        </div>
      </div>

      {/* Topics Section */}
      <div className="px-9 py-11 border-b border-[#1c1c1a]">
        <div className="text-[10px] text-[#333] tracking-[0.18em] uppercase font-medium mb-2">
          What I cover
        </div>
        <div className="text-[26px] font-black text-[#e8e8e2] tracking-[-0.01em] mb-7">
          Five things I can't stop thinking about
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#1c1c1a] border border-[#1c1c1a]">
          {[
            {
              num: "01",
              name: "Finance & investing",
              desc: "Money basics, investing principles, and how to think about wealth when you're young and starting from nothing.",
            },
            {
              num: "02",
              name: "Self-development",
              desc: "Not the toxic hustle version. The real kind — habits, mindset, and figuring out who you actually want to become.",
            },
            {
              num: "03",
              name: "World events",
              desc: "What's happening globally, why it matters, and what it actually means for ordinary people like us.",
            },
            {
              num: "04",
              name: "Creator life",
              desc: "The honest side of building a personal brand — what works, what doesn't, and what nobody tells you upfront.",
            },
            {
              num: "05",
              name: "Personal stories",
              desc: "Daily lessons, life updates, and the small things I learned that changed how I think about everything.",
            },
            {
              num: "06",
              name: "Video editing",
              desc: "Years of editing experience — I know what makes content work visually and why most videos lose people in the first 10 seconds.",
            },
          ].map((topic, idx) => (
            <div key={idx} className="bg-[#0a0a09] p-6 px-[22px]">
              <div className="text-[28px] font-black text-[#141412] mb-2.5">
                {topic.num}
              </div>
              <div className="text-[15px] font-extrabold text-[#e8e8e2] mb-1.5 tracking-[-0.01em]">
                {topic.name}
              </div>
              <div className="text-[11px] text-[#3a3a38] leading-[1.75] font-light">
                {topic.desc}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Now Section */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] border-b border-[#1c1c1a]">
        <div className="px-8 py-10 border-r border-[#1c1c1a]">
          <div className="text-[22px] font-black text-[#e8e8e2] tracking-[-0.01em] leading-[1.15] mb-2">
            What I'm doing now.
          </div>
          <div className="text-[11px] text-[#2e2e2c] font-light italic leading-[1.7]">
            Updated March 2026. Inspired by Derek Sivers' /now page idea.
          </div>
        </div>
        <div className="px-11 py-10 flex flex-col">
          {[
            {
              title: "Building this site",
              desc: "Designing and building danialmalik.com from scratch — writing, videos, newsletter, the whole thing.",
            },
            {
              title: "Writing consistently",
              desc: "Publishing blog posts across finance, world events, and self-development. Finding my voice and sticking to it.",
            },
            {
              title: "Growing a new YouTube channel",
              desc: "Starting fresh after the termination. Building slower this time, building smarter.",
            },
            {
              title: "Offering 1-on-1 sessions",
              desc: "Helping people with finance basics, content strategy, and video editing. A few spots available.",
            },
            {
              title: "Based in Busan, South Korea",
              desc: "Living here, writing from here. Busan is underrated and I'll die on that hill.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="py-4 border-b border-[#141412] flex gap-5 items-start last:border-b-0"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#252523] mt-1.5 flex-shrink-0"></div>
              <div>
                <div className="text-[13px] font-bold text-[#888] mb-[3px] tracking-[-0.01em]">
                  {item.title}
                </div>
                <div className="text-[12px] text-[#3a3a38] font-light leading-[1.7]">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Stats Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-[#1c1c1a] border-t border-b border-[#1c1c1a]">
        {[
          { num: "∞", label: "Still learning" },
          { num: "0→1", label: "Built from scratch" },
          { num: "100%", label: "No filter" },
          { num: "1", label: "Person behind this" },
        ].map((stat, idx) => (
          <div key={idx} className="bg-[#0a0a09] py-7 px-6 text-center">
            <div className="text-[32px] font-black text-[#e8e8e2] tracking-[-0.02em] mb-1">
              {stat.num}
            </div>
            <div className="text-[10px] text-[#2a2a28] tracking-[0.1em] uppercase font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="py-14 px-9 border-b border-[#1c1c1a] text-center flex flex-col items-center">
        <div className="text-[10px] text-[#2e2e2c] tracking-[0.18em] uppercase font-medium mb-3">
          What's next
        </div>
        <div className="text-[32px] font-black text-[#e8e8e2] tracking-[-0.02em] mb-2.5">
          Stick around.
        </div>
        <p className="text-[13px] text-[#444] font-light italic mb-7 leading-[1.7] max-w-[400px]">
          Read something, watch something, or just subscribe to the newsletter.
          If it resonates — that's enough.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <button
            onClick={() =>
              handleSendPrompt("Design the blog listing page for Danial Malik")
            }
            className="bg-[#e8e8e2] text-[#0a0a09] font-['Poppins',sans-serif] text-[11px] font-bold tracking-[0.1em] uppercase py-[13px] px-7 border-none cursor-pointer rounded-sm"
          >
            Read the blog
          </button>
          <button
            onClick={() =>
              handleSendPrompt("Design the newsletter signup for Danial Malik")
            }
            className="bg-transparent text-[#444] font-['Poppins',sans-serif] text-[11px] font-medium tracking-[0.08em] uppercase py-[13px] px-5 border-none cursor-pointer border-b border-[#2a2a28]"
          >
            Subscribe to the newsletter →
          </button>
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

export default AboutTwo;
