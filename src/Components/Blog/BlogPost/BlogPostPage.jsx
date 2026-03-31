import { useParams, Link } from "react-router-dom";

const BlogPostPage = () => {
  const { slug } = useParams();

  const handleSendPrompt = (message) => {
    console.log("Prompt:", message);
  };

  // Check if this is the featured post that has content
  const hasContent = slug === "losing-youtube-channel-starting-over";

  const featuredPostData = {
    title: '"What losing my YouTube channel taught me about starting over"',
    tag: "Self-development",
    readTime: "8 min read",
    date: "March 19, 2026",
    content: `
      It happened on a Tuesday. No warning, no email, no appeal that went anywhere. The channel was just — gone. Everything I had built, every video, every view, every subscriber. Wiped. And the worst part wasn't losing the numbers. It was losing the proof that I had ever tried.

      I spent about three days being genuinely angry. At YouTube, at the algorithm, at the idea that you could put that much of yourself into something and have it disappear without explanation. And then something shifted.

      "The platform was never mine. I was renting space on someone else's land and calling it home."

      What I actually lost

      Here is the honest answer: not as much as I thought. The videos were gone, yes. But the skills I built making them — editing, scripting, showing up consistently — those were still mine. Nobody can terminate those.

      What I actually lost was the shortcut. The existing audience, the algorithm momentum, the subscriber count that made it easier to grow. Starting over means starting from zero on the vanity metrics. But it doesn't mean starting from zero on everything.

      The decision

      I could have rebuilt the same thing on YouTube. Same format, same niche, same strategy — just hoping it wouldn't get terminated again. Some people do this. I understand why.

      What I chose instead

      Build something I actually own. A site with my name on it. Writing that lives on my terms. Videos hosted where I control them. An audience that signed up for me — not for a platform's recommendation of me.

      If you lost everything you built tomorrow — what would still be yours? That's the question worth sitting with. Because the answer tells you exactly what to build next.
    `,
  };

  if (!hasContent) {
    return (
      <div className="bg-[#0a0a09] text-[#e8e8e2] w-full font-['Poppins',sans-serif] min-h-screen">
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

        {/* Coming Soon Message */}
        <div className="max-w-[760px] mx-auto px-9 py-20 text-center">
          <div className="text-[10px] text-[#333] tracking-[0.18em] uppercase font-medium mb-4">
            Coming Soon
          </div>
          <div className="text-[48px] font-black text-[#e8e8e2] tracking-[-0.02em] leading-[1.1] mb-6">
            This blog post
            <br />
            is being prepared
          </div>
          <p className="text-[15px] text-[#555] leading-[1.8] font-light max-w-[500px] mx-auto mb-8">
            I'm working on creating valuable content for you. This post will be
            available soon. Check back later or subscribe to the newsletter to
            get notified when it's published.
          </p>
          <Link
            to="/blog"
            className="inline-block bg-[#e8e8e2] text-[#0a0a09] font-['Poppins',sans-serif] text-[11px] font-bold tracking-[0.1em] uppercase py-3 px-8 border-none cursor-pointer rounded-sm hover:opacity-85 transition-opacity duration-150"
          >
            ← Back to all posts
          </Link>
        </div>

        {/* Newsletter Strip */}
        <div className="bg-[#0d0d0b] px-9 py-10 flex justify-between items-center gap-8 border-t border-[#1c1c1a] flex-wrap mt-12">
          <div>
            <div className="text-[10px] text-[#2e2e2c] tracking-[0.16em] uppercase font-medium mb-1.5">
              Never miss a post
            </div>
            <div className="text-lg font-black text-[#e8e8e2] tracking-[-0.01em]">
              Get it in your inbox.
            </div>
            <div className="text-[11px] text-[#333] font-light italic mt-[3px]">
              Sent when something is actually worth saying.
            </div>
          </div>
          <div className="flex">
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-[#0a0a09] border border-[#1e1e1c] border-r-0 text-[#e8e8e2] font-['Poppins',sans-serif] text-[11px] py-3 px-4 outline-none font-light w-[220px] placeholder:text-[#252523]"
            />
            <button className="bg-[#e8e8e2] text-[#0a0a09] font-['Poppins',sans-serif] text-[10px] font-bold tracking-[0.1em] uppercase py-3 px-[18px] border-none cursor-pointer whitespace-nowrap">
              Subscribe free
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
  }

  // Show the actual blog post for the featured post
  return (
    <div className="bg-[#0a0a09] text-[#e8e8e2] w-full font-['Poppins',sans-serif]">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-9 py-[18px] border-b border-[#1c1c1a]">
        <div className="text-sm font-bold tracking-[0.04em] text-[#e8e8e2]">
          Danial Malik
        </div>
        <div className="flex gap-7">
          <Link
            to="/blog"
            className="text-[11px] text-[#e8e8e2] tracking-[0.08em] uppercase cursor-pointer font-medium transition-colors duration-150"
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

      {/* Post Header */}
      <div className="max-w-[760px] mx-auto px-9 pt-14 pb-0">
        <Link
          to="/blog"
          className="text-[10px] text-[#333] tracking-[0.1em] uppercase font-medium cursor-pointer inline-flex items-center gap-1.5 mb-8 border-b border-[#1e1e1c] pb-[1px] hover:text-[#888] transition-colors duration-150"
        >
          ← Back to blog
        </Link>
        <div className="flex gap-2 mb-[18px]">
          <span className="text-[9px] text-[#444] tracking-[0.14em] uppercase font-semibold border border-[#1e1e1c] px-2.5 py-1 rounded-sm">
            {featuredPostData.tag}
          </span>
          <span className="text-[9px] text-[#444] tracking-[0.14em] uppercase font-semibold border border-[#1e1e1c] px-2.5 py-1 rounded-sm">
            {featuredPostData.readTime}
          </span>
        </div>
        <div className="text-[36px] font-black text-[#e8e8e2] leading-[1.1] tracking-[-0.02em] mb-[18px]">
          {featuredPostData.title}
        </div>
        <div className="text-sm text-[#555] leading-[1.8] font-light italic mb-7 border-l-2 border-[#1e1e1c] pl-4">
          When the platform you built everything on disappears overnight, you're
          left with a choice. Rebuild the same thing — or build something
          better.
        </div>
        <div className="flex justify-between items-center py-4 border-t border-b border-[#1c1c1a]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#181816] border border-[#252523] flex items-center justify-center text-[10px] font-bold text-[#3a3a38]">
              DM
            </div>
            <div>
              <div className="text-[12px] font-semibold text-[#888]">
                Danial Malik
              </div>
              <div className="text-[11px] text-[#2e2e2c] font-light">
                {featuredPostData.date}
              </div>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <span className="text-[10px] text-[#2e2e2c] font-normal tracking-[0.04em]">
              {featuredPostData.readTime}
            </span>
            <button
              onClick={() =>
                handleSendPrompt(
                  "What social platforms should Danial Malik share his blog posts on?"
                )
              }
              className="text-[10px] text-[#333] tracking-[0.1em] uppercase font-semibold border border-[#1e1e1c] py-1.5 px-[14px] cursor-pointer rounded-sm bg-transparent hover:border-[#444] hover:text-[#888] transition-all duration-150"
            >
              Share →
            </button>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="w-full h-[280px] bg-[#0e0e0c] border-b border-[#1c1c1a] flex items-center justify-center">
        <div className="text-[9px] text-[#1e1e1c] tracking-[0.14em] uppercase font-medium">
          Post cover image
        </div>
      </div>

      {/* Post Body */}
      <div className="max-w-[640px] mx-auto px-9 py-12 pb-14">
        {featuredPostData.content.split("\n\n").map((paragraph, idx) => {
          if (paragraph.includes('"The platform was never mine')) {
            return (
              <div
                key={idx}
                className="border-l-2 border-[#e8e8e2] pl-5 py-1 my-9 text-lg font-bold text-[#e8e8e2] leading-[1.4] italic tracking-[-0.01em]"
              >
                {paragraph}
              </div>
            );
          }
          if (
            paragraph.includes("What I actually lost") ||
            paragraph.includes("The decision") ||
            paragraph.includes("What I chose instead")
          ) {
            return (
              <div key={idx}>
                <div className="text-[22px] font-extrabold text-[#e8e8e2] tracking-[-0.01em] mt-10 mb-[14px]">
                  {paragraph}
                </div>
              </div>
            );
          }
          if (idx === 0) {
            return (
              <p
                key={idx}
                className="text-[15px] text-[#888] leading-[1.9] font-light mb-6 overflow-hidden"
              >
                <span className="text-[56px] font-black text-[#e8e8e2] float-left leading-[0.85] mr-2 mt-2 tracking-[-0.02em]">
                  I
                </span>
                {paragraph.substring(1)}
              </p>
            );
          }
          return (
            <p
              key={idx}
              className="text-[15px] text-[#888] leading-[1.9] font-light mb-6"
            >
              {paragraph}
            </p>
          );
        })}
      </div>

      {/* Post Tags */}
      <div className="max-w-[640px] mx-auto px-9 pb-10 flex gap-2 flex-wrap">
        {[
          "Self-development",
          "Creator life",
          "Starting over",
          "Personal brand",
        ].map((tag) => (
          <span
            key={tag}
            className="text-[10px] text-[#333] tracking-[0.1em] uppercase font-medium border border-[#1c1c1a] px-3 py-[5px] rounded-sm cursor-pointer hover:text-[#888] hover:border-[#2e2e2c] transition-all duration-150"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Post Footer Bar */}
      <div className="border-t border-b border-[#1c1c1a] px-9 py-5 flex justify-between items-center">
        <span className="text-[10px] text-[#2e2e2c] tracking-[0.1em] uppercase font-medium">
          Found this useful? Share it.
        </span>
        <div className="flex gap-2.5">
          {["Twitter / X", "LinkedIn", "Copy link"].map((btn) => (
            <button
              key={btn}
              onClick={() =>
                handleSendPrompt(
                  `What social platforms should Danial Malik focus on for sharing content?`
                )
              }
              className="text-[10px] text-[#333] tracking-[0.08em] uppercase font-semibold border border-[#1c1c1a] py-[7px] px-4 cursor-pointer rounded-sm bg-transparent hover:border-[#333] hover:text-[#888] transition-all duration-150"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>

      {/* More Posts */}
      <div className="px-9 py-12">
        <div className="text-[10px] text-[#2e2e2c] tracking-[0.16em] uppercase font-medium mb-1.5">
          Keep reading
        </div>
        <div className="text-[22px] font-black text-[#e8e8e2] tracking-[-0.01em] mb-6">
          More from the blog
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#1c1c1a] border border-[#1c1c1a]">
          {[
            {
              title: '"The only investing rule I wish I knew at 18"',
              tag: "Finance",
              readTime: "5 min",
              date: "Feb 2026",
              slug: "investing-rule-i-wish-i-knew-at-18",
            },
            {
              title:
                '"What the last 30 days in global news actually mean for you"',
              tag: "World",
              readTime: "6 min",
              date: "Feb 2026",
              slug: "last-30-days-global-news",
            },
            {
              title:
                '"The honest cost of building a personal brand from scratch"',
              tag: "Creator life",
              readTime: "4 min",
              date: "Jan 2026",
              slug: "honest-cost-personal-brand",
            },
          ].map((post, idx) => (
            <Link
              key={idx}
              to={`/blog/${post.slug}`}
              className="bg-[#0a0a09] p-5 cursor-pointer hover:bg-[#0d0d0b] transition-colors duration-150 group"
            >
              <div className="text-[9px] text-[#333] tracking-[0.12em] uppercase font-medium mb-[7px]">
                {post.tag}
              </div>
              <div className="text-[13px] font-extrabold text-[#666] leading-[1.35] mb-2 tracking-[-0.01em] group-hover:text-[#e8e8e2] transition-colors duration-150">
                {post.title}
              </div>
              <div className="text-[10px] text-[#252523] font-light">
                {post.readTime} · {post.date}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Newsletter Strip */}
      <div className="bg-[#0d0d0b] px-9 py-10 flex justify-between items-center gap-8 border-t border-[#1c1c1a] flex-wrap">
        <div>
          <div className="text-[10px] text-[#2e2e2c] tracking-[0.16em] uppercase font-medium mb-1.5">
            Never miss a post
          </div>
          <div className="text-lg font-black text-[#e8e8e2] tracking-[-0.01em]">
            Get it in your inbox.
          </div>
          <div className="text-[11px] text-[#333] font-light italic mt-[3px]">
            Sent when something is actually worth saying.
          </div>
        </div>
        <div className="flex">
          <input
            type="email"
            placeholder="your@email.com"
            className="bg-[#0a0a09] border border-[#1e1e1c] border-r-0 text-[#e8e8e2] font-['Poppins',sans-serif] text-[11px] py-3 px-4 outline-none font-light w-[220px] placeholder:text-[#252523]"
          />
          <button className="bg-[#e8e8e2] text-[#0a0a09] font-['Poppins',sans-serif] text-[10px] font-bold tracking-[0.1em] uppercase py-3 px-[18px] border-none cursor-pointer whitespace-nowrap">
            Subscribe free
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

export default BlogPostPage;
