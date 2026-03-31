import { useState } from "react";
import { Link } from "react-router-dom";

const SupportPage = () => {
  const [selectedAmount, setSelectedAmount] = useState("$3");

  const handleSendPrompt = (message) => {
    console.log("Prompt:", message);
  };

  const amounts = ["$3", "$5", "$10", "$20", "Custom"];

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
      <div className="max-w-[640px] mx-auto px-9 pt-[72px] pb-14 text-center flex flex-col items-center">
        <div className="text-[10px] text-[#333] tracking-[0.18em] uppercase font-medium mb-[18px]">
          Support the work
        </div>
        <div className="text-[38px] font-black text-[#e8e8e2] tracking-[-0.02em] leading-[1.1] mb-[18px]">
          If this meant
          <br />
          <em className="italic text-[#444] font-light">something</em> to you.
        </div>
        <p className="text-[13px] text-[#555] leading-[1.95] font-light max-w-[480px]">
          This site runs on time, not ad money. No sponsors, no brand deals, no
          algorithm to please. Just one person writing and making videos about
          things that{" "}
          <strong className="text-[#888] font-semibold">
            actually matter.
          </strong>{" "}
          If something here helped you think differently — this is how you say
          thanks.
        </p>
      </div>

      <hr className="border-t border-[#1c1c1a]" />

      {/* Honest Note Section */}
      <div className="max-w-[640px] mx-auto px-9 py-11 border-b border-[#1c1c1a]">
        <div className="border-l-2 border-[#1c1c1a] pl-5">
          <p className="text-sm text-[#555] leading-[1.95] font-light italic">
            I want to be honest about this page. I didn't build this site to
            make money from donations. I built it because I needed a home base
            that I actually own.{" "}
            <strong className="text-[#888] font-semibold italic">
              Support is never expected and never required.
            </strong>{" "}
            Everything on this site — every post, every video, the newsletter —
            is free and always will be. But if something I made genuinely helped
            you, and you want to contribute, it means more than you'd think.
          </p>
          <div className="text-[12px] text-[#2e2e2c] mt-[14px] font-medium">
            — Danial
          </div>
        </div>
      </div>

      {/* Ways to Support Section */}
      <div className="max-w-[640px] mx-auto px-9 py-12">
        <div className="text-[22px] font-black text-[#e8e8e2] tracking-[-0.01em] mb-2">
          Ways to support
        </div>
        <div className="text-[12px] text-[#2e2e2c] font-light italic mb-8">
          Pick whatever feels right. Or none of them. Genuinely.
        </div>

        {/* Way 1 - Buy me a coffee */}
        <div className="py-8 border-b border-[#141412] grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start first:border-t first:border-[#141412]">
          <div>
            <div className="text-[10px] text-[#252523] font-bold tracking-[0.1em] mb-2.5">
              01
            </div>
            <div className="text-lg font-extrabold text-[#e8e8e2] tracking-[-0.01em] mb-2">
              Buy me a coffee
            </div>
            <p className="text-[12px] text-[#444] leading-[1.85] font-light max-w-[380px]">
              A one-time contribution — whatever amount feels right to you. No
              account needed, no subscription, no strings.{" "}
              <strong className="text-[#777] font-medium">
                Just a small gesture
              </strong>{" "}
              that keeps the site alive and the writing coming.
            </p>
            <div className="flex gap-2 mt-4 flex-wrap">
              {amounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => setSelectedAmount(amount)}
                  className={`bg-[#0e0e0c] border text-[11px] font-semibold py-2 px-4 rounded-sm font-['Poppins',sans-serif] transition-all duration-150 ${
                    selectedAmount === amount
                      ? "border-[#555] text-[#aaa] bg-[#111110]"
                      : "border-[#1c1c1a] text-[#333] hover:border-[#333] hover:text-[#777]"
                  }`}
                >
                  {amount}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-end gap-2.5 pt-1">
            <button
              onClick={() =>
                handleSendPrompt(
                  "What platform should Danial Malik use for donations — Buy Me a Coffee, Ko-fi, or Stripe?"
                )
              }
              className="bg-[#e8e8e2] text-[#0a0a09] font-['Poppins',sans-serif] text-[10px] font-bold tracking-[0.1em] uppercase py-[11px] px-[22px] border-none cursor-pointer rounded-sm whitespace-nowrap hover:opacity-85 transition-opacity duration-150"
            >
              Contribute →
            </button>
            <div className="text-[10px] text-[#1e1e1c] font-light text-right">
              One-time · No account needed
            </div>
          </div>
        </div>

        {/* Way 2 - Subscribe to newsletter */}
        <div className="py-8 border-b border-[#141412] grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start">
          <div>
            <div className="text-[10px] text-[#252523] font-bold tracking-[0.1em] mb-2.5">
              02
            </div>
            <div className="text-lg font-extrabold text-[#e8e8e2] tracking-[-0.01em] mb-2">
              Subscribe to the newsletter
            </div>
            <p className="text-[12px] text-[#444] leading-[1.85] font-light max-w-[380px]">
              It's free — but subscribing and actually reading it is one of the{" "}
              <strong className="text-[#777] font-medium">
                best things you can do
              </strong>{" "}
              to support this work. It tells me someone's out there and what I'm
              making is worth continuing.
            </p>
          </div>
          <div className="flex flex-col items-end gap-2.5 pt-1">
            <button
              onClick={() =>
                handleSendPrompt(
                  "Design the newsletter signup page for Danial Malik"
                )
              }
              className="bg-transparent text-[#333] font-['Poppins',sans-serif] text-[10px] font-semibold tracking-[0.1em] uppercase py-[11px] px-[22px] border border-[#1e1e1c] cursor-pointer rounded-sm whitespace-nowrap hover:border-[#333] hover:text-[#777] transition-all duration-150"
            >
              Subscribe free →
            </button>
            <div className="text-[10px] text-[#1e1e1c] font-light text-right">
              Always free · No spam
            </div>
          </div>
        </div>

        {/* Way 3 - Share something */}
        <div className="py-8 border-b border-[#141412] grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start">
          <div>
            <div className="text-[10px] text-[#252523] font-bold tracking-[0.1em] mb-2.5">
              03
            </div>
            <div className="text-lg font-extrabold text-[#e8e8e2] tracking-[-0.01em] mb-2">
              Share something
            </div>
            <p className="text-[12px] text-[#444] leading-[1.85] font-light max-w-[380px]">
              If a post or video resonated with you — send it to one person
              who'd get something from it.{" "}
              <strong className="text-[#777] font-medium">
                Word of mouth is worth more
              </strong>{" "}
              than any ad I could run. It's also free, which I appreciate.
            </p>
          </div>
          <div className="flex flex-col items-end gap-2.5 pt-1">
            <button
              onClick={() =>
                handleSendPrompt(
                  "What are the best posts on Danial Malik site to share on social media?"
                )
              }
              className="bg-transparent text-[#333] font-['Poppins',sans-serif] text-[10px] font-semibold tracking-[0.1em] uppercase py-[11px] px-[22px] border border-[#1e1e1c] cursor-pointer rounded-sm whitespace-nowrap hover:border-[#333] hover:text-[#777] transition-all duration-150"
            >
              Browse posts →
            </button>
            <div className="text-[10px] text-[#1e1e1c] font-light text-right">
              Costs nothing · Means everything
            </div>
          </div>
        </div>

        {/* Way 4 - Book a session */}
        <div className="py-8 border-b border-[#141412] grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start">
          <div>
            <div className="text-[10px] text-[#252523] font-bold tracking-[0.1em] mb-2.5">
              04
            </div>
            <div className="text-lg font-extrabold text-[#e8e8e2] tracking-[-0.01em] mb-2">
              Book a session
            </div>
            <p className="text-[12px] text-[#444] leading-[1.85] font-light max-w-[380px]">
              If you want something more direct — book a 1-on-1 session. It
              supports the work{" "}
              <strong className="text-[#777] font-medium">and</strong> you get
              something useful out of it. Finance, content, career, figuring out
              what's next.
            </p>
          </div>
          <div className="flex flex-col items-end gap-2.5 pt-1">
            <Link to="/services">
              <button className="bg-transparent text-[#333] font-['Poppins',sans-serif] text-[10px] font-semibold tracking-[0.1em] uppercase py-[11px] px-[22px] border border-[#1e1e1c] cursor-pointer rounded-sm whitespace-nowrap hover:border-[#333] hover:text-[#777] transition-all duration-150">
                See services →
              </button>
            </Link>
            <div className="text-[10px] text-[#1e1e1c] font-light text-right">
              Paid · You get real value back
            </div>
          </div>
        </div>
      </div>

      <hr className="border-t border-[#1c1c1a]" />

      {/* What It Does Section */}
      <div className="max-w-[640px] mx-auto px-9 pt-11 pb-14">
        <div className="text-lg font-extrabold text-[#e8e8e2] tracking-[-0.01em] mb-5">
          What your support actually goes toward
        </div>
        <div className="flex flex-col">
          {[
            "<strong>Hosting and domain</strong> — keeping danialmalik.com live and fast",
            "<strong>Tools and software</strong> — editing software, newsletter platform, design tools",
            "<strong>Time</strong> — the honest answer. Every hour spent writing or editing is an hour not spent elsewhere. Support buys more of those hours.",
            "<strong>Better equipment over time</strong> — microphone, lighting, camera. The basics that make the content better.",
            "<strong>No ads, ever</strong> — your support is what makes it possible to keep this site completely ad-free.",
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex gap-[14px] py-[13px] border-b border-[#0e0e0c] items-start first:border-t first:border-[#0e0e0c]"
            >
              <div className="w-1 h-1 rounded-full bg-[#252523] mt-2 flex-shrink-0"></div>
              <div
                className="text-[12px] text-[#3a3a38] leading-[1.8] font-light"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* No Pressure Section */}
      <div className="max-w-[640px] mx-auto px-9 pb-16">
        <div className="bg-[#0d0d0b] border border-[#141412] p-8 px-7 text-center">
          <div className="text-base font-extrabold text-[#888] tracking-[-0.01em] mb-2">
            No pressure. Seriously.
          </div>
          <p className="text-[12px] text-[#333] leading-[1.85] font-light max-w-[420px] mx-auto mb-5">
            The best thing you can do is read something, watch something, and
            come back. That's enough. If you want to go deeper, the blog and
            newsletter are right there.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/blog"
              className="text-[11px] text-[#2a2a28] tracking-[0.08em] uppercase font-semibold border-b border-[#1c1c1a] pb-[1px] cursor-pointer hover:text-[#666] transition-colors duration-150"
            >
              Read the blog →
            </Link>
            <Link
              to="/watch"
              className="text-[11px] text-[#2a2a28] tracking-[0.08em] uppercase font-semibold border-b border-[#1c1c1a] pb-[1px] cursor-pointer hover:text-[#666] transition-colors duration-150"
            >
              Watch videos →
            </Link>
            <Link
              to="/about-one"
              className="text-[11px] text-[#2a2a28] tracking-[0.08em] uppercase font-semibold border-b border-[#1c1c1a] pb-[1px] cursor-pointer hover:text-[#666] transition-colors duration-150"
            >
              About Danial →
            </Link>
          </div>
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

export default SupportPage;
