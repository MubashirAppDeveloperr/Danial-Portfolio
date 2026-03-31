import { useState } from "react";
import { Link } from "react-router-dom";

const WatchPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleSendPrompt = (message) => {
    console.log("Prompt:", message);
  };

  const categories = [
    "All",
    "Vlogs",
    "Finance",
    "Self-dev",
    "World",
    "Creator life",
  ];

  const featuredVideos = [
    {
      title: "A week in my life — building in public from scratch",
      date: "March 2026",
      duration: "14:22",
      category: "Vlogs",
    },
    {
      title: "How I think about money at 20-something",
      date: "Feb 2026",
      duration: "16:10",
      category: "Finance",
    },
    {
      title: "Investing basics — what I wish I knew earlier",
      date: "Jan 2026",
      duration: "12:44",
      category: "Finance",
    },
    {
      title: "Day in the life — Busan, South Korea",
      date: "Feb 2026",
      duration: "9:47",
      category: "Vlogs",
    },
    {
      title: "The habits that actually changed my life",
      date: "Jan 2026",
      duration: "11:05",
      category: "Self-dev",
    },
    {
      title: "Honest update — where I'm at right now",
      date: "Jan 2026",
      duration: "8:31",
      category: "Self-dev",
    },
  ];

  const videoPlaylists = {
    Vlogs: [
      {
        title: "A week in my life — building in public",
        date: "Mar 2026",
        duration: "14:22",
        category: "Vlogs",
      },
      {
        title: "Day in the life — Busan, South Korea",
        date: "Feb 2026",
        duration: "9:47",
        category: "Vlogs",
      },
      {
        title: "What my mornings look like now",
        date: "Jan 2026",
        duration: "11:05",
        category: "Vlogs",
      },
      {
        title: "Honest update — where I'm at right now",
        date: "Jan 2026",
        duration: "8:31",
        category: "Vlogs",
      },
    ],
    Finance: [
      {
        title: "How I think about money at 20-something",
        date: "Feb 2026",
        duration: "16:10",
        category: "Finance",
      },
      {
        title: "Investing basics — what I wish I knew earlier",
        date: "Jan 2026",
        duration: "12:44",
        category: "Finance",
      },
      {
        title: "The money habits nobody talks about in your 20s",
        date: "Dec 2025",
        duration: "10:18",
        category: "Finance",
      },
      {
        title: "Breaking down what's happening in markets right now",
        date: "Dec 2025",
        duration: "7:52",
        category: "Finance",
      },
    ],
    "Self-dev": [
      {
        title: "The habits that actually changed my life",
        date: "Feb 2026",
        duration: "13:20",
        category: "Self-dev",
      },
      {
        title: "Why discipline is overrated and systems win",
        date: "Jan 2026",
        duration: "9:14",
        category: "Self-dev",
      },
      {
        title: "How I structure my day when I have no motivation",
        date: "Dec 2025",
        duration: "11:33",
        category: "Self-dev",
      },
      {
        title: "What I learned from reading 20 books this year",
        date: "Nov 2025",
        duration: "8:02",
        category: "Self-dev",
      },
    ],
    World: [
      {
        title: "What's actually happening in global markets right now",
        date: "Mar 2026",
        duration: "15:44",
        category: "World",
      },
      {
        title: "30 days of global news — what it means for you",
        date: "Feb 2026",
        duration: "12:19",
        category: "World",
      },
      {
        title: "Why most people misunderstand geopolitics",
        date: "Jan 2026",
        duration: "10:55",
        category: "World",
      },
      {
        title: "The news stories that will define the next decade",
        date: "Dec 2025",
        duration: "9:30",
        category: "World",
      },
    ],
    "Creator life": [
      {
        title: "What losing my YouTube channel actually taught me",
        date: "Feb 2026",
        duration: "17:02",
        category: "Creator life",
      },
      {
        title: "The honest cost of building a personal brand",
        date: "Jan 2026",
        duration: "11:48",
        category: "Creator life",
      },
      {
        title: "How I edit my videos — my full workflow",
        date: "Dec 2025",
        duration: "9:22",
        category: "Creator life",
      },
      {
        title: "What I'd do differently if I was starting over",
        date: "Nov 2025",
        duration: "8:14",
        category: "Creator life",
      },
    ],
  };

  const handleVideoClick = () => {
    alert("Video coming soon! I'm working on uploading content.");
  };

  return (
    <div className="bg-[#0a0a09] text-[#e8e8e2] w-full font-['Poppins',sans-serif]">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-9 py-[18px] border-b border-[#1c1c1a]">
        <Link
          to="/"
          className="text-sm font-bold tracking-[0.04em] text-[#e8e8e2] hover:text-[#e8e8e2] transition-colors duration-150 cursor-pointer"
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
            className="text-[11px] text-[#e8e8e2] tracking-[0.08em] uppercase cursor-pointer font-medium transition-colors duration-150"
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
      <div className="max-w-[760px] mx-auto px-9 pt-16 pb-12 grid grid-cols-1 md:grid-cols-[1fr_180px] gap-10 items-start">
        <div>
          <div className="text-[10px] text-[#333] tracking-[0.18em] uppercase font-medium mb-4">
            All videos
          </div>
          <div className="text-[36px] font-black text-[#e8e8e2] tracking-[-0.02em] leading-[1.1] mb-4">
            My Videos
          </div>
          <p className="text-[13px] text-[#555] leading-[1.9] font-light mb-5">
            I started making videos because I had things to say and nowhere to
            say them. Finance, life, what's happening in the world, what it
            feels like to build something from scratch — all of it. Below are my
            videos, organized by topic. Take a look and let me know what you
            think.
          </p>
          <button
            onClick={() =>
              handleSendPrompt(
                "How should Danial Malik grow a new YouTube channel after termination?"
              )
            }
            className="inline-flex items-center gap-2 bg-transparent border border-[#1e1e1c] text-[#555] font-['Poppins',sans-serif] text-[10px] font-semibold tracking-[0.1em] uppercase py-[9px] px-[18px] cursor-pointer rounded-sm hover:border-[#444] hover:text-[#aaa] transition-all duration-150"
          >
            <div className="w-3 h-3 bg-[#333] rounded-sm"></div>
            Subscribe on YouTube
          </button>
        </div>
        <div className="bg-[#0e0e0c] border border-[#1c1c1a] h-[220px] flex items-center justify-center">
          <div className="text-[9px] text-[#1a1a18] tracking-[0.12em] uppercase font-medium">
            Your photo
          </div>
        </div>
      </div>

      <hr className="border-t border-[#1c1c1a]" />

      {/* Categories */}
      <div className="max-w-[760px] mx-auto px-9 py-6 flex items-center gap-0 flex-wrap">
        <span className="text-[11px] text-[#2e2e2c] font-medium mr-4 whitespace-nowrap">
          Browse by topic:
        </span>
        {categories.map((cat) => (
          <span
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-[12px] font-medium cursor-pointer px-[14px] py-1 rounded-sm transition-all duration-150 ${
              activeCategory === cat
                ? "text-[#e8e8e2] border border-[#252523]"
                : "text-[#3a3a38] border border-transparent hover:text-[#aaa]"
            }`}
          >
            {cat}
          </span>
        ))}
      </div>

      <hr className="border-t border-[#1c1c1a]" />

      <div className="max-w-[760px] mx-auto px-9 pb-16">
        {/* Featured Videos Section */}
        <div className="mb-[52px] mt-10">
          <div className="flex justify-between items-baseline mb-5 pb-3 border-b border-[#141412]">
            <div className="text-xl font-black text-[#e8e8e2] tracking-[-0.01em]">
              Featured videos
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#1a1a18] border border-[#1a1a18]">
            {featuredVideos.map((video, idx) => (
              <div
                key={idx}
                onClick={handleVideoClick}
                className="bg-[#0a0a09] cursor-pointer hover:bg-[#0d0d0b] transition-colors duration-150 group"
              >
                <div className="h-[120px] bg-[#0d0d0b] border-b border-[#141412] flex items-center justify-center relative">
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-[#1e1e1c] group-hover:border-l-[#555] transition-colors duration-150"></div>
                  <div className="absolute bottom-[7px] right-[9px] text-[9px] text-[#252523] font-medium tracking-[0.04em]">
                    {video.duration}
                  </div>
                </div>
                <div className="p-[14px] pb-[18px]">
                  <div className="text-[9px] text-[#252523] font-normal mb-1.5 tracking-[0.04em]">
                    {video.date}
                  </div>
                  <div className="text-[12px] font-bold text-[#666] leading-[1.4] tracking-[-0.01em] group-hover:text-[#e8e8e2] transition-colors duration-150">
                    {video.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Playlist Sections */}
        {Object.keys(videoPlaylists).map((category) => (
          <div key={category} className="mb-[52px]">
            <div className="flex justify-between items-baseline mb-5 pb-3 border-b border-[#141412]">
              <div className="text-xl font-black text-[#e8e8e2] tracking-[-0.01em]">
                {category}
              </div>
              <span
                onClick={() =>
                  handleSendPrompt(
                    `Design the ${category} playlist page for Danial Malik`
                  )
                }
                className="text-[10px] text-[#2e2e2c] tracking-[0.08em] uppercase font-semibold cursor-pointer border-b border-[#1c1c1a] pb-[1px] hover:text-[#666] transition-colors duration-150"
              >
                All {category.toLowerCase()} videos →
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-[1px] bg-[#1a1a18] border border-[#1a1a18]">
              {videoPlaylists[category].map((video, idx) => (
                <div
                  key={idx}
                  onClick={handleVideoClick}
                  className="bg-[#0a0a09] cursor-pointer hover:bg-[#0d0d0b] transition-colors duration-150 group"
                >
                  <div className="h-[96px] bg-[#0c0c0b] border-b border-[#141412] flex items-center justify-center relative">
                    <div className="w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[12px] border-l-[#1c1c1a] group-hover:border-l-[#444] transition-colors duration-150"></div>
                    <div className="absolute bottom-[6px] right-[8px] text-[9px] text-[#1e1e1c] font-medium">
                      {video.duration}
                    </div>
                  </div>
                  <div className="p-[11px] pb-[14px]">
                    <div className="text-[9px] text-[#1e1e1c] font-normal mb-[5px]">
                      {video.date}
                    </div>
                    <div className="text-[11px] font-bold text-[#444] leading-[1.35] tracking-[-0.01em] group-hover:text-[#e8e8e2] transition-colors duration-150">
                      {video.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Newsletter Section */}
      <div className="bg-[#0d0d0b] border-t border-[#1c1c1a] px-9 py-[52px] text-center flex flex-col items-center">
        <div className="text-[10px] text-[#2e2e2c] tracking-[0.18em] uppercase font-medium mb-2.5">
          Never miss a video
        </div>
        <div className="text-[26px] font-black text-[#e8e8e2] tracking-[-0.01em] mb-2">
          Get it in your inbox.
        </div>
        <p className="text-[12px] text-[#444] font-light italic leading-[1.75] max-w-[400px] mb-6">
          New videos, posts, and updates — sent when they're actually worth it.
        </p>
        <div className="flex max-w-[420px] w-full">
          <input
            type="email"
            placeholder="your@email.com"
            className="bg-[#0a0a09] border border-[#1e1e1c] border-r-0 text-[#e8e8e2] font-['Poppins',sans-serif] text-[12px] py-3 px-4 outline-none font-light flex-1 placeholder:text-[#252523]"
          />
          <button
            onClick={() =>
              handleSendPrompt(
                "What should the Danial Malik newsletter welcome email say?"
              )
            }
            className="bg-[#e8e8e2] text-[#0a0a09] font-['Poppins',sans-serif] text-[10px] font-bold tracking-[0.1em] uppercase py-3 px-[18px] border-none cursor-pointer whitespace-nowrap"
          >
            Subscribe free
          </button>
        </div>
        <div className="text-[10px] text-[#252523] font-light mt-2.5">
          No spam. Unsubscribe any time. Always free.
        </div>
      </div>

      {/* Footer */}
      <footer className="px-9 py-6 flex justify-between items-center border-t border-[#1c1c1a]">
        <Link
          to="/"
          className="text-[11px] font-semibold text-[#252523] tracking-[0.04em] hover:text-[#252523] transition-colors duration-150"
        >
          © 2026 Danial Malik
        </Link>
        <div className="flex gap-5">
          <Link
            to="/blog"
            className="text-[10px] text-[#252523] tracking-[0.08em] uppercase cursor-pointer font-medium hover:text-[#252523] transition-colors duration-150"
          >
            Blog
          </Link>
          <Link
            to="/watch"
            className="text-[10px] text-[#252523] tracking-[0.08em] uppercase cursor-pointer font-medium hover:text-[#252523] transition-colors duration-150"
          >
            Watch
          </Link>
          <Link
            to="/about-one"
            className="text-[10px] text-[#252523] tracking-[0.08em] uppercase cursor-pointer font-medium hover:text-[#252523] transition-colors duration-150"
          >
            About 1
          </Link>
          <Link
            to="/about-two"
            className="text-[10px] text-[#252523] tracking-[0.08em] uppercase cursor-pointer font-medium hover:text-[#252523] transition-colors duration-150"
          >
            About 2
          </Link>
          <Link
            to="/contact"
            className="text-[10px] text-[#252523] tracking-[0.08em] uppercase cursor-pointer font-medium hover:text-[#252523] transition-colors duration-150"
          >
            Contact
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default WatchPage;
