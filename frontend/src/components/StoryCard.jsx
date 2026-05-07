// src/components/StoryCard.jsx

const StoryCard = ({
  story = {
    title: "OpenAI releases a new AI model for developers",
    url: "https://news.ycombinator.com",
    points: 256,
    author: "shivam_dev",
    postedAt: "2 hours ago",
  },
}) => {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-orange-500">
      
      {/* Title */}
      <a
        href={story.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl font-semibold text-white transition hover:text-orange-400"
      >
        {story.title}
      </a>

      {/* Story Info */}
      <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-zinc-400">
        
        <span>
          🔥 {story.points} Points
        </span>

        <span>
          👤 {story.author}
        </span>

        <span>
          🕒 {story.postedAt}
        </span>

      </div>

      {/* Bookmark Button */}
      <button className="mt-5 rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-orange-600">
        Bookmark
      </button>

    </div>
  );
};

export default StoryCard;