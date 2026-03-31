import { Link } from "react-router-dom";

const HomePage = () => {
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
      <section className="px-9 py-20 pb-[72px] border-b border-[#1c1c1a] text-center flex flex-col items-center">
        <div className="text-[10px] text-[#3a3a38] tracking-[0.2em] uppercase mb-7 font-normal">
          Busan, South Korea — Est. 2024
        </div>
        <div className="font-['Poppins',sans-serif] text-[58px] font-black leading-[1.0] text-[#e8e8e2] tracking-[-0.02em] mb-5 max-w-[640px]">
          Ideas that cut through
          <br />
          <span className="text-[#252523]">the noise.</span>
        </div>
        <p className="text-[13px] text-[#555] leading-[1.8] max-w-[400px] mb-9 font-light">
          Finance. Self-development. World events. Creator life.
          <br />
          <strong className="text-[#777] font-semibold">
            One person. No filter. No BS.
          </strong>
        </p>
        <div className="flex gap-[14px] items-center justify-center">
          <button className="bg-[#e8e8e2] text-[#0a0a09] font-['Poppins',sans-serif] text-[11px] font-bold tracking-[0.1em] uppercase py-[13px] px-7 border-none cursor-pointer rounded-sm">
            Read the blog
          </button>
          <button className="bg-transparent text-[#444] font-['Poppins',sans-serif] text-[11px] font-medium tracking-[0.08em] py-[13px] px-0 border-none cursor-pointer border-b border-[#2a2a28] uppercase">
            Who is Danial? →
          </button>
        </div>
      </section>

      {/* Latest Writing Section */}
      <section className="px-9 py-[52px] border-b border-[#1c1c1a]">
        <div className="flex justify-between items-end mb-8">
          <div>
            <div className="text-[10px] text-[#333] tracking-[0.18em] uppercase mb-1.5 font-medium">
              Latest writing
            </div>
            <div className="font-['Poppins',sans-serif] text-[30px] font-extrabold text-[#e8e8e2] tracking-[-0.01em] mb-1">
              From the blog
            </div>
            <div className="text-[12px] text-[#3a3a38] mb-8 font-light italic">
              Long reads, short takes, honest opinions.
            </div>
          </div>
          <span className="text-[10px] text-[#333] tracking-[0.08em] uppercase cursor-pointer border-b border-[#222] pb-[1px] font-medium">
            All posts →
          </span>
        </div>
        <div className="grid grid-cols-[3fr_2fr] border border-[#1c1c1a]">
          <div className="p-7 border-r border-[#1c1c1a] cursor-pointer hover:bg-[#0d0d0b] transition-colors duration-150">
            <div className="text-[9px] text-[#444] tracking-[0.14em] uppercase mb-3 font-medium">
              Self-development
            </div>
            <div className="font-['Poppins',sans-serif] text-xl font-extrabold leading-[1.15] text-[#e8e8e2] mb-3 tracking-[-0.01em] transition-colors duration-150">
              "What losing my YouTube channel taught me about starting over"
            </div>
            <p className="text-[12px] text-[#555] leading-[1.8] mb-5 font-light">
              When the platform you built everything on disappears overnight,
              you're left with a choice. Rebuild the same thing — or build
              something better. Here's what I chose.
            </p>
            <div className="text-[10px] text-[#2e2e2c] flex gap-4 tracking-[0.04em] font-normal">
              <span>8 min read</span>
              <span>March 2026</span>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="py-[18px] px-[22px] border-b border-[#1c1c1a] cursor-pointer hover:bg-[#0d0d0b] transition-colors duration-150">
              <div className="text-[9px] text-[#333] tracking-[0.12em] uppercase mb-1.5 font-medium">
                Finance
              </div>
              <div className="font-['Poppins',sans-serif] text-[13px] font-bold text-[#888] leading-[1.3] mb-1 transition-colors duration-150">
                "The only investing rule I wish I knew at 18"
              </div>
              <div className="text-[10px] text-[#2a2a28] font-light">
                5 min · Feb 2026
              </div>
            </div>
            <div className="py-[18px] px-[22px] border-b border-[#1c1c1a] cursor-pointer hover:bg-[#0d0d0b] transition-colors duration-150">
              <div className="text-[9px] text-[#333] tracking-[0.12em] uppercase mb-1.5 font-medium">
                World
              </div>
              <div className="font-['Poppins',sans-serif] text-[13px] font-bold text-[#888] leading-[1.3] mb-1 transition-colors duration-150">
                "What the last 30 days in global news actually mean for you"
              </div>
              <div className="text-[10px] text-[#2a2a28] font-light">
                6 min · Feb 2026
              </div>
            </div>
            <div className="py-[18px] px-[22px] cursor-pointer hover:bg-[#0d0d0b] transition-colors duration-150">
              <div className="text-[9px] text-[#333] tracking-[0.12em] uppercase mb-1.5 font-medium">
                Creator life
              </div>
              <div className="font-['Poppins',sans-serif] text-[13px] font-bold text-[#888] leading-[1.3] mb-1 transition-colors duration-150">
                "The honest cost of building a personal brand from scratch"
              </div>
              <div className="text-[10px] text-[#2a2a28] font-light">
                4 min · Jan 2026
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="px-9 py-[52px] border-b border-[#1c1c1a]">
        <div className="flex justify-between items-end mb-8">
          <div>
            <div className="text-[10px] text-[#333] tracking-[0.18em] uppercase mb-1.5 font-medium">
              Videos
            </div>
            <div className="font-['Poppins',sans-serif] text-[30px] font-extrabold text-[#e8e8e2] tracking-[-0.01em] mb-1">
              Watch
            </div>
            <div className="text-[12px] text-[#3a3a38] mb-8 font-light italic">
              Vlogs, breakdowns, life unfiltered.
            </div>
          </div>
          <span className="text-[10px] text-[#333] tracking-[0.08em] uppercase cursor-pointer border-b border-[#222] pb-[1px] font-medium">
            All videos →
          </span>
        </div>
        <div className="grid grid-cols-3 gap-[1px] bg-[#1c1c1a] border border-[#1c1c1a]">
          {[1, 2, 3].map((_, idx) => (
            <div
              key={idx}
              className="bg-[#0a0a09] cursor-pointer hover:bg-[#0e0e0c] transition-colors duration-150"
            >
              <div className="h-24 bg-[#111110] flex items-center justify-center">
                <div className="w-0 h-0 border-t-[9px] border-t-transparent border-b-[9px] border-b-transparent border-l-[15px] border-l-[#252523] transition-colors duration-150"></div>
              </div>
              <div className="px-[14px] py-3 pb-4">
                <div className="text-[9px] text-[#333] tracking-[0.12em] uppercase mb-[5px] font-medium">
                  {idx === 0 ? "Vlog" : idx === 1 ? "Finance" : "Self-dev"}
                </div>
                <div className="font-['Poppins',sans-serif] text-[12px] font-bold text-[#555] leading-[1.3] transition-colors duration-150">
                  {idx === 0
                    ? "A week in my life — building in public"
                    : idx === 1
                    ? "How I think about money at 20-something"
                    : "The habits that actually changed my life"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <div className="bg-[#0d0d0b] px-9 py-16 grid grid-cols-2 gap-14 items-center border-b border-[#1c1c1a]">
        <div>
          <div className="text-[10px] text-[#333] tracking-[0.18em] uppercase mb-2.5 font-medium">
            The newsletter
          </div>
          <div className="font-['Poppins',sans-serif] text-[36px] font-black text-[#e8e8e2] leading-[1.05] mb-[14px] tracking-[-0.01em]">
            One email.
            <br />
            Worth your
            <br />
            time.
          </div>
          <p className="text-[12px] text-[#444] leading-[1.8] font-light italic">
            Thoughts on finance, the world, and being a human being — sent when
            something is actually worth saying. No spam, ever.
          </p>
        </div>
        <div className="flex flex-col gap-2.5">
          <input
            type="email"
            placeholder="your@email.com"
            className="bg-[#0a0a09] border border-[#1e1e1c] text-[#e8e8e2] font-['Poppins',sans-serif] text-[12px] py-[14px] px-4 outline-none font-light placeholder:text-[#2e2e2c]"
          />
          <button className="bg-[#e8e8e2] text-[#0a0a09] font-['Poppins',sans-serif] text-[11px] font-bold tracking-[0.1em] uppercase py-[14px] border-none cursor-pointer">
            Subscribe — it is free
          </button>
          <div className="text-[10px] text-[#252523] tracking-[0.04em] font-light">
            No spam. Unsubscribe any time.
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="px-9 py-[52px] border-b border-[#1c1c1a]">
        <div className="mb-8">
          <div className="text-[10px] text-[#333] tracking-[0.18em] uppercase mb-1.5 font-medium">
            Work with me
          </div>
          <div className="font-['Poppins',sans-serif] text-[30px] font-extrabold text-[#e8e8e2] tracking-[-0.01em] mb-1">
            Services
          </div>
          <div className="text-[12px] text-[#3a3a38] mb-8 font-light italic">
            Real help. Not generic advice.
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[1px] bg-[#1c1c1a] border border-[#1c1c1a]">
          {[
            {
              num: "01",
              name: "1-on-1 session",
              desc: "Finance, career, content, or figuring out what to do next. Book a private session and let's get into it.",
              cta: "Book a session →",
              link: "/services",
            },
            {
              num: "02",
              name: "Video editing",
              desc: "I know what makes videos work. Send me your footage — I'll make it something worth watching.",
              cta: "Get in touch →",
              link: "/services",
            },
            {
              num: "03",
              name: "Content audit",
              desc: "Send me your channel or feed. I'll give you a written breakdown of what to fix and where to focus.",
              cta: "Coming soon →",
              link: "/services",
            },
          ].map((service, idx) => (
            <Link
              to={service.link}
              key={idx}
              className="bg-[#0a0a09] p-7 cursor-pointer hover:bg-[#0e0e0c] transition-colors duration-150"
            >
              <div className="font-['Poppins',sans-serif] text-[32px] font-black text-[#181816] mb-3">
                {service.num}
              </div>
              <div className="font-['Poppins',sans-serif] text-base font-extrabold text-[#e8e8e2] mb-2">
                {service.name}
              </div>
              <p className="text-[11px] text-[#444] leading-[1.8] mb-[18px] font-light">
                {service.desc}
              </p>
              <span className="text-[10px] text-[#333] tracking-[0.08em] uppercase border-b border-[#222] inline-block pb-[1px] font-medium">
                {service.cta}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Support Section */}
      <section className="px-9 py-[52px] border-b border-[#1c1c1a] flex justify-between items-center gap-8">
        <div>
          <div className="font-['Poppins',sans-serif] text-[22px] font-extrabold text-[#e8e8e2] tracking-[-0.01em] mb-1.5">
            If this meant something to you
          </div>
          <p className="text-[12px] text-[#444] font-light italic max-w-[400px] leading-[1.75]">
            This site runs on time, not ad money. If something I wrote or made
            helped you think differently — consider supporting it directly.
          </p>
        </div>
        <button className="bg-transparent border border-[#222] text-[#555] font-['Poppins',sans-serif] text-[10px] font-semibold tracking-[0.1em] uppercase py-[13px] px-7 cursor-pointer whitespace-nowrap transition-all duration-150 hover:border-[#444] hover:text-[#aaa] rounded-sm">
          Support Danial →
        </button>
      </section>

      {/* Footer */}
      <footer className="px-9 py-6 flex justify-between items-center border-t border-[#1c1c1a]">
        <div className="font-['Poppins',sans-serif] text-[11px] font-semibold text-[#252523] tracking-[0.04em]">
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

export default HomePage;
