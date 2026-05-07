import axios from "axios";
import * as cheerio from "cheerio";

import Story from "../models/Story.js";

const scrapeHackerNews = async () => {
  try {
    console.log(
      "Scraping Hacker News..."
    );

    // Fetch HTML
   const { data } =
  await axios.get(
    "https://news.ycombinator.com",
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0",
      }
    }
  );
    // Load HTML
    const $ = cheerio.load(data);

    const stories = [];

    
    $(".athing")
      .slice(0, 30)
      .each((index, element) => {
        const title = $(element)
          .find(".titleline a")
          .text();

        const url = $(element)
          .find(".titleline a")
          .attr("href");

        // Next Row Contains Metadata
        const subtext = $(element).next();

        const pointsText = subtext
          .find(".score")
          .text();

        const points =
          parseInt(pointsText) || 0;

        const author = subtext
          .find(".hnuser")
          .text();

        const postedAt = subtext
          .find(".age")
          .text();

        stories.push({
          title,
          url,
          points,
          author,
          postedAt,
        });
      });

    // Clear Old Stories
    await Story.deleteMany();

    // Save New Stories
    await Story.insertMany(stories);

    console.log(
      "Stories Scraped Successfully"
    );
  } catch (error) {
    console.error(
  "Scraper Error:",
  error.response?.data ||
    error.message ||
    error
);
  }
};

export default scrapeHackerNews;
