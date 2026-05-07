import scrapeHackerNews from "../scraper/hackerNewsScraper.js";

export const scrapeStories = async (
  req,
  res
) => {
  try {
    await scrapeHackerNews();

    res.status(200).json({
      message:
        "Stories scraped successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};