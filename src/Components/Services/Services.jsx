import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ServicesPage = () => {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqItems = [
    {
      q: "How do I know if a session is right for me?",
      a: "If you have a specific question or decision you're sitting with — about money, content, career, or direction — a session is a good fit. It's not therapy and it's not coaching in the formal sense. It's a focused conversation with someone who's thinking about the same things you are.",
    },
    {
      q: "What kinds of videos do you edit?",
      a: "Mostly YouTube — vlogs, talking-head videos, essay-style content, finance explainers. I can also handle short-form for Reels or TikTok. If you're unsure whether your project is a fit, just get in touch and I'll be straight with you.",
    },
    {
      q: "Do you offer ongoing work or retainers?",
      a: "Not yet — right now everything is project-by-project or session-by-session. As the site and workload grow, I'll add ongoing options. If you need something regular, get in touch anyway and we can figure out what makes sense.",
    },
    {
      q: "How do I pay and what's the refund policy?",
      a: "Payment is taken upfront via the booking page. If I have to cancel or reschedule for any reason on my end, you get a full refund or a free reschedule. If you cancel more than 24 hours before, same deal. Less than 24 hours — no refund, but we can reschedule once.",
    },
    {
      q: "I have a different request — can I still reach out?",
      a: "Yes. Use the contact page or email me directly. I read everything. I might not always have time to respond, but if something sounds interesting or a good fit, I will.",
    },
  ];

  const handleSendPrompt = (message) => {
    // This function can be connected to your AI prompt system later
    console.log("Prompt:", message);
  };

  return (
    <div className="bg-[hsl(60,5%,4%)] text-[#e8e8e2] w-full font-['Poppins',sans-serif]">
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
      <div className="max-w-[720px] mx-auto px-9 py-[68px] pb-[52px]">
        <div className="text-[10px] text-[#333] tracking-[0.18em] uppercase font-medium mb-4">
          Work with me
        </div>
        <div className="text-[40px] font-black text-[#e8e8e2] tracking-[-0.02em] leading-[1.05] mb-4">
          Real help.
          <br />
          Not generic advice.
        </div>
        <p className="text-[13px] text-[#555] leading-[1.9] font-light max-w-[540px]">
          I'm not a consultant with a deck. I'm someone who's{" "}
          <strong className="text-[#888] font-semibold">actually in it</strong>{" "}
          — building, learning, making mistakes, and figuring things out in real
          time. If that's the kind of person you want in your corner, here's how
          we can work together.
        </p>
      </div>

      <hr className="border-t border-[#1c1c1a]" />

      {/* Services Section */}
      <div className="max-w-[720px] mx-auto px-9 pb-16">
        {/* Service 1 - Private Session */}
        <div className="pt-10 pb-11 border-b border-[#1c1c1a] grid grid-cols-[200px_1fr] gap-10">
          <div>
            <div className="text-[40px] font-black text-[#141412] leading-none mb-3">
              01
            </div>
            <div className="text-[9px] text-[#333] tracking-[0.14em] uppercase font-semibold border border-[#1c1c1a] px-2.5 py-1 inline-block rounded-sm mb-[14px]">
              1-on-1
            </div>
            <div className="text-[10px] font-medium tracking-[0.06em] text-[#3a6642]">
              ● Spots available
            </div>
          </div>
          <div>
            <div className="text-2xl font-black text-[#e8e8e2] tracking-[-0.01em] mb-2.5">
              Private session
            </div>
            <p className="text-[13px] text-[#555] leading-[1.9] font-light mb-6">
              A focused 60-minute call where we work through whatever's on your
              mind —{" "}
              <strong className="text-[#888] font-semibold">
                finance basics, career direction, content strategy, or just
                figuring out what to do next.
              </strong>{" "}
              No scripts, no templates. Just a real conversation.
            </p>
            <div className="mb-6">
              <div className="text-[10px] text-[#2e2e2c] tracking-[0.12em] uppercase font-semibold mb-2.5">
                What's included
              </div>
              <div className="flex flex-col">
                {[
                  "<strong>60-minute video call</strong> — we go wherever the conversation needs to go",
                  "<strong>Pre-call questionnaire</strong> so I come prepared with relevant thoughts",
                  "<strong>Written follow-up</strong> — key takeaways and next steps sent after the call",
                  "<strong>Good for:</strong> finance questions, career decisions, starting a channel, building in public",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-3 items-start py-[9px] border-b border-[#0e0e0c] first:border-t first:border-[#0e0e0c]"
                  >
                    <div className="w-1 h-1 rounded-full bg-[#2a2a28] mt-[7px] flex-shrink-0"></div>
                    <div
                      className="text-[12px] text-[#444] leading-[1.7] font-light"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center mt-2 pt-5 border-t border-[#141412]">
              <div>
                <div className="text-[22px] font-black text-[#e8e8e2] tracking-[-0.01em]">
                  $75{" "}
                  <span className="text-sm text-[#2e2e2c] font-light">
                    / session
                  </span>
                </div>
                <div className="text-[10px] text-[#2e2e2c] font-light mt-0.5">
                  Price in placeholder — set your own
                </div>
              </div>
              <button
                onClick={() =>
                  handleSendPrompt(
                    "What booking tool should Danial Malik use for 1-on-1 sessions on his website?"
                  )
                }
                className="bg-[#e8e8e2] text-[#0a0a09] font-['Poppins',sans-serif] text-[11px] font-bold tracking-[0.1em] uppercase py-3 px-7 border-none cursor-pointer rounded-sm hover:opacity-85 transition-opacity duration-150"
              >
                Book a session →
              </button>
            </div>
          </div>
        </div>

        {/* Service 2 - Video Editing */}
        <div className="py-11 border-b border-[#1c1c1a] grid grid-cols-[200px_1fr] gap-10">
          <div>
            <div className="text-[40px] font-black text-[#141412] leading-none mb-3">
              02
            </div>
            <div className="text-[9px] text-[#333] tracking-[0.14em] uppercase font-semibold border border-[#1c1c1a] px-2.5 py-1 inline-block rounded-sm mb-[14px]">
              Editing
            </div>
            <div className="text-[10px] font-medium tracking-[0.06em] text-[#3a6642]">
              ● Taking projects
            </div>
          </div>
          <div>
            <div className="text-2xl font-black text-[#e8e8e2] tracking-[-0.01em] mb-2.5">
              Video editing
            </div>
            <p className="text-[13px] text-[#555] leading-[1.9] font-light mb-6">
              I've spent years editing video and I know what makes content{" "}
              <strong className="text-[#888] font-semibold">
                actually work
              </strong>{" "}
              — pacing, cuts, hooks, why most videos lose people in the first 10
              seconds and how to fix it. Send me your footage and I'll make it
              something worth watching.
            </p>
            <div className="mb-6">
              <div className="text-[10px] text-[#2e2e2c] tracking-[0.12em] uppercase font-semibold mb-2.5">
                What's included
              </div>
              <div className="flex flex-col">
                {[
                  "<strong>Full edit</strong> — colour, audio, pacing, captions, transitions",
                  "<strong>One revision round</strong> included, additional rounds available",
                  "<strong>Delivery in 5–7 business days</strong> depending on length and complexity",
                  "<strong>Good for:</strong> YouTube videos, vlogs, short-form content, brand videos",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-3 items-start py-[9px] border-b border-[#0e0e0c] first:border-t first:border-[#0e0e0c]"
                  >
                    <div className="w-1 h-1 rounded-full bg-[#2a2a28] mt-[7px] flex-shrink-0"></div>
                    <div
                      className="text-[12px] text-[#444] leading-[1.7] font-light"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center mt-2 pt-5 border-t border-[#141412]">
              <div>
                <div className="text-[22px] font-black text-[#e8e8e2] tracking-[-0.01em]">
                  Custom{" "}
                  <span className="text-sm text-[#2e2e2c] font-light">
                    / project
                  </span>
                </div>
                <div className="text-[10px] text-[#2e2e2c] font-light mt-0.5">
                  Quoted after a brief intro call
                </div>
              </div>
              <button
                onClick={() =>
                  handleSendPrompt(
                    "What should the video editing inquiry form look like for Danial Malik?"
                  )
                }
                className="bg-[#e8e8e2] text-[#0a0a09] font-['Poppins',sans-serif] text-[11px] font-bold tracking-[0.1em] uppercase py-3 px-7 border-none cursor-pointer rounded-sm hover:opacity-85 transition-opacity duration-150"
              >
                Get in touch →
              </button>
            </div>
          </div>
        </div>

        {/* Service 3 - Content Audit */}
        <div className="py-11 border-b border-[#1c1c1a] grid grid-cols-[200px_1fr] gap-10">
          <div>
            <div className="text-[40px] font-black text-[#141412] leading-none mb-3">
              03
            </div>
            <div className="text-[9px] text-[#333] tracking-[0.14em] uppercase font-semibold border border-[#1c1c1a] px-2.5 py-1 inline-block rounded-sm mb-[14px]">
              Audit
            </div>
            <div className="text-[10px] font-medium tracking-[0.06em] text-[#2e2e2c]">
              ○ Coming soon
            </div>
          </div>
          <div>
            <div className="text-2xl font-black text-[#e8e8e2] tracking-[-0.01em] mb-2.5">
              Content audit
            </div>
            <p className="text-[13px] text-[#555] leading-[1.9] font-light mb-6">
              Send me your channel, feed, or site. I'll go through it and give
              you a{" "}
              <strong className="text-[#888] font-semibold">
                written breakdown
              </strong>{" "}
              of what's working, what's hurting you, and exactly what to change.
              No call needed — just a clear, honest report you can act on
              immediately.
            </p>
            <div className="mb-6">
              <div className="text-[10px] text-[#2e2e2c] tracking-[0.12em] uppercase font-semibold mb-2.5">
                What's included
              </div>
              <div className="flex flex-col">
                {[
                  "<strong>Full written audit</strong> — thumbnails, titles, structure, hooks, consistency",
                  "<strong>Prioritised action list</strong> — what to fix first for the biggest impact",
                  "<strong>Delivered in 3–5 days</strong> as a clean PDF or Notion doc",
                  "<strong>Good for:</strong> creators who are stuck, channels that aren't growing, new starters",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-3 items-start py-[9px] border-b border-[#0e0e0c] first:border-t first:border-[#0e0e0c]"
                  >
                    <div className="w-1 h-1 rounded-full bg-[#2a2a28] mt-[7px] flex-shrink-0"></div>
                    <div
                      className="text-[12px] text-[#444] leading-[1.7] font-light"
                      dangerouslySetInnerHTML={{ __html: item }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-between items-center mt-2 pt-5 border-t border-[#141412]">
              <div>
                <div className="text-[22px] font-black text-[#e8e8e2] tracking-[-0.01em]">
                  TBD
                </div>
                <div className="text-[10px] text-[#2e2e2c] font-light mt-0.5">
                  Join the waitlist to be notified first
                </div>
              </div>
              <button
                onClick={() =>
                  handleSendPrompt(
                    "How should Danial Malik collect waitlist signups for his content audit service?"
                  )
                }
                className="bg-transparent text-[#333] font-['Poppins',sans-serif] text-[11px] font-bold tracking-[0.1em] uppercase py-3 px-7 border border-[#1e1e1c] cursor-pointer rounded-sm hover:border-[#333] hover:text-[#666] transition-all duration-150"
              >
                Join waitlist →
              </button>
            </div>
          </div>
        </div>
      </div>

      <hr className="border-t border-[#1c1c1a]" />

      {/* FAQ Section */}
      <div className="max-w-[720px] mx-auto px-9 pt-12 pb-16">
        <div className="text-2xl font-black text-[#e8e8e2] tracking-[-0.01em] mb-6">
          Common questions
        </div>
        {faqItems.map((item, index) => (
          <div
            key={index}
            className={`py-[18px] border-b border-[#141412] cursor-pointer ${
              index === 0 ? "border-t border-[#141412]" : ""
            }`}
            onClick={() => toggleFaq(index)}
          >
            <div className="flex justify-between items-center gap-4 text-[13px] font-bold text-[#888]">
              {item.q}
              <span
                className={`text-base text-[#2a2a28] font-light flex-shrink-0 transition-transform duration-200 ${
                  openFaq === index ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </div>
            {openFaq === index && (
              <div className="text-[12px] text-[#444] leading-[1.8] font-light mt-2.5">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Not Sure Section */}
      <div className="max-w-[720px] mx-auto px-9 pb-16">
        <div className="bg-[#0d0d0b] border border-[#1c1c1a] p-9 px-8 flex justify-between items-center gap-8">
          <div>
            <div className="text-lg font-extrabold text-[#e8e8e2] tracking-[-0.01em] mb-1.5">
              Not sure which to pick?
            </div>
            <p className="text-[12px] text-[#444] font-light leading-[1.75] max-w-[380px]">
              Send me a message and tell me what you're working on. I'll point
              you in the right direction — or tell you honestly if I'm not the
              right fit.
            </p>
          </div>
          <button
            onClick={() =>
              handleSendPrompt("Design the Contact page for Danial Malik")
            }
            className="bg-transparent border border-[#222] text-[#444] font-['Poppins',sans-serif] text-[10px] font-semibold tracking-[0.1em] uppercase py-[11px] px-6 cursor-pointer rounded-sm whitespace-nowrap hover:border-[#444] hover:text-[#888] transition-all duration-150"
          >
            Get in touch →
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

export default ServicesPage;
