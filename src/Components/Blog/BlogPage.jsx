import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const BlogPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const navigate = useNavigate();

  const handleSendPrompt = (message) => {
    console.log("Prompt:", message);
  };

  const handlePostClick = (slug) => {
    // Always navigate to the blog post page
    navigate(`/blog/${slug}`);
  };

  const filters = [
    "All",
    "Finance",
    "Self-dev",
    "World",
    "Creator life",
    "Personal",
  ];

  const posts = [
    {
      id: 1,
      title: '"What losing my YouTube channel taught me about starting over"',
      excerpt:
        "When the platform you built everything on disappears overnight, you're left with a choice. Rebuild the same thing — or build something better. Here's what I chose, and why it changed how I think about everything.",
      tag: "Self-development",
      date: "March 2026",
      readTime: "8 min read",
      featured: true,
      slug: "losing-youtube-channel-and-starting-over",
      hasContent: true,
    },
    {
      id: 2,
      title: '"The only investing rule I wish I knew at 18"',
      excerpt:
        "Most people overcomplicate money. This one principle changed everything for me.",
      tag: "Finance",
      date: "Feb 2026",
      readTime: "5 min",
      featured: false,
      slug: "investing-rule-i-wish-i-knew-at-18",
      hasContent: false,
    },
    {
      id: 3,
      title: '"What the last 30 days in global news actually mean for you"',
      excerpt:
        "Not just what happened — but why it matters for ordinary people.",
      tag: "World",
      date: "Feb 2026",
      readTime: "6 min",
      featured: false,
      slug: "last-30-days-global-news",
      hasContent: false,
    },
    {
      id: 4,
      title: '"The honest cost of building a personal brand from scratch"',
      excerpt:
        "Time, money, ego — nobody tells you what you're actually signing up for.",
      tag: "Creator life",
      date: "Jan 2026",
      readTime: "4 min",
      featured: false,
      slug: "honest-cost-personal-brand",
      hasContent: false,
    },
    {
      id: 5,
      title: '"Why discipline is overrated and systems actually win"',
      excerpt: "Willpower runs out. A good system doesn't.",
      tag: "Self-dev",
      date: "Jan 2026",
      readTime: "5 min",
      featured: false,
      slug: "discipline-overrated-systems-win",
      hasContent: false,
    },
    {
      id: 6,
      title: '"A good thing I learned today — and why I\'m writing it down"',
      excerpt: "Small wins, daily lessons, and why logging them changes you.",
      tag: "Personal",
      date: "Dec 2025",
      readTime: "3 min",
      featured: false,
      slug: "good-thing-learned-today",
      hasContent: false,
    },
    {
      id: 7,
      title: '"The quiet wealth habits nobody talks about in your 20s"',
      excerpt:
        "Not crypto. Not get-rich schemes. The boring stuff that actually compounds.",
      tag: "Finance",
      date: "Dec 2025",
      readTime: "6 min",
      featured: false,
      slug: "quiet-wealth-habits-20s",
      hasContent: false,
    },
  ];

  const filteredPosts =
    activeFilter === "All"
      ? posts
      : posts.filter((post) => post.tag === activeFilter);

  const featuredPost = posts.find((post) => post.featured);

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

      {/* Page Header */}
      <div className="px-9 pt-[52px] pb-10 border-b border-[#1c1c1a]">
        <div className="text-[10px] text-[#333] tracking-[0.18em] uppercase font-medium mb-2">
          All writing
        </div>
        <div className="text-[44px] font-black text-[#e8e8e2] tracking-[-0.02em] leading-[1.0] mb-2.5">
          The Blog
        </div>
        <div className="text-[12px] text-[#3a3a38] font-light italic">
          Finance · Self-development · World events · Creator life · Personal
          stories
        </div>
      </div>

      {/* Filter Bar */}
      <div className="px-9 py-4 border-b border-[#1c1c1a] flex gap-5 items-center flex-wrap">
        <span className="text-[10px] text-[#2e2e2c] tracking-[0.1em] uppercase font-medium mr-1">
          Filter
        </span>
        {filters.map((filter) => (
          <span
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`text-[10px] tracking-[0.08em] uppercase cursor-pointer px-[14px] py-[5px] border rounded-sm font-medium transition-all duration-150 ${
              activeFilter === filter
                ? "text-[#e8e8e2] border-[#444]"
                : "text-[#3a3a38] border-[#1c1c1a] hover:text-[#aaa] hover:border-[#333]"
            }`}
          >
            {filter}
          </span>
        ))}
      </div>

      {/* Featured Post */}
      {featuredPost && (
        <div className="px-9 border-b border-[#1c1c1a]">
          <div
            onClick={() => handlePostClick(featuredPost.slug)}
            className="grid grid-cols-1 md:grid-cols-2 border-l border-r border-[#1c1c1a] cursor-pointer group"
          >
            <div className="bg-[#111110] min-h-[260px] flex items-center justify-center border-r border-[#1c1c1a]">
              <div className="flex flex-col items-center gap-2">
                <div className="w-0 h-0 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent border-l-[22px] border-l-[#1e1e1c]"></div>
                <div className="text-[9px] text-[#252523] tracking-[0.12em] uppercase font-medium">
                  Featured post image
                </div>
              </div>
            </div>
            <div className="p-9 px-8 flex flex-col justify-between">
              <div>
                <div className="inline-block text-[9px] text-[#444] tracking-[0.14em] uppercase font-semibold border border-[#1e1e1c] px-2.5 py-1 rounded-sm mb-5">
                  Featured · {featuredPost.tag}
                </div>
                <div className="text-2xl font-black text-[#e8e8e2] leading-[1.15] tracking-[-0.01em] mb-[14px] group-hover:text-[#888] transition-colors duration-150">
                  {featuredPost.title}
                </div>
                <p className="text-[12px] text-[#555] leading-[1.85] font-light mb-6">
                  {featuredPost.excerpt}
                </p>
              </div>
              <div className="flex justify-between items-center">
                <div className="text-[10px] text-[#2e2e2c] flex gap-[14px] font-normal">
                  <span>{featuredPost.date}</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <span className="text-[10px] text-[#444] tracking-[0.08em] uppercase border-b border-[#2a2a28] pb-[1px] font-semibold">
                  Read post →
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#1c1c1a] border-x border-b border-[#1c1c1a]">
        {filteredPosts
          .filter((post) => !post.featured)
          .map((post, index) => (
            <div
              key={post.id}
              onClick={() => handlePostClick(post.slug)}
              className="bg-[#0a0a09] cursor-pointer hover:bg-[#0d0d0b] transition-colors duration-150 group"
            >
              <div className="h-[140px] bg-[#0e0e0c] border-b border-[#1c1c1a] flex items-center justify-center">
                <div className="w-7 h-7 border border-[#1c1c1a] flex items-center justify-center">
                  <span className="text-[10px] text-[#222] font-bold">
                    {String(index + 2).padStart(2, "0")}
                  </span>
                </div>
              </div>
              <div className="p-5 pb-6">
                <div className="text-[9px] text-[#333] tracking-[0.14em] uppercase font-medium mb-2">
                  {post.tag}
                </div>
                <div className="text-sm font-extrabold text-[#888] leading-[1.3] mb-2.5 tracking-[-0.01em] group-hover:text-[#e8e8e2] transition-colors duration-150">
                  {post.title}
                </div>
                <p className="text-[11px] text-[#3a3a38] leading-[1.75] font-light mb-[14px]">
                  {post.excerpt}
                </p>
                <div className="text-[10px] text-[#252523] flex justify-between font-normal">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* Load More Button */}
      <div className="px-9 py-8 text-center border-t border-[#1c1c1a]">
        <button
          onClick={() =>
            handleSendPrompt(
              "How many blog posts should Danial Malik publish before launching his site?"
            )
          }
          className="bg-transparent border border-[#1e1e1c] text-[#444] font-['Poppins',sans-serif] text-[10px] font-semibold tracking-[0.12em] uppercase py-3 px-8 cursor-pointer rounded-sm hover:border-[#333] hover:text-[#888] transition-all duration-150"
        >
          Load more posts
        </button>
      </div>

      {/* Newsletter Strip */}
      <div className="bg-[#0d0d0b] px-9 py-10 flex justify-between items-center gap-8 border-t border-[#1c1c1a] flex-wrap">
        <div>
          <div className="text-[10px] text-[#2e2e2c] tracking-[0.16em] uppercase font-medium mb-1.5">
            Never miss a post
          </div>
          <div className="text-xl font-black text-[#e8e8e2] tracking-[-0.01em]">
            Get it in your inbox.
          </div>
          <div className="text-[11px] text-[#3a3a38] font-light italic mt-1">
            Sent when something is actually worth saying.
          </div>
        </div>
        <div className="flex flex-shrink-0">
          <input
            type="email"
            placeholder="your@email.com"
            className="bg-[#0a0a09] border border-[#1e1e1c] border-r-0 text-[#e8e8e2] font-['Poppins',sans-serif] text-[11px] py-3 px-4 outline-none font-light w-[220px] placeholder:text-[#252523]"
          />
          <button
            onClick={() =>
              handleSendPrompt(
                "What should the newsletter welcome email say for Danial Malik?"
              )
            }
            className="bg-[#e8e8e2] text-[#0a0a09] font-['Poppins',sans-serif] text-[10px] font-bold tracking-[0.1em] uppercase py-3 px-[18px] border-none cursor-pointer whitespace-nowrap"
          >
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

export default BlogPage;
