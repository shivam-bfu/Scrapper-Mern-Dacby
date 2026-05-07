import api from "../api/axios";

// GET STORIES
export const getStories = async (
  page = 1,
  limit = 10
) => {
  const response = await api.get(
    `/stories?page=${page}&limit=${limit}`
  );

  return response.data;
};

// TOGGLE BOOKMARK
export const toggleBookmark =
  async (storyId) => {
    const response =
      await api.post(
        `/stories/${storyId}/bookmark`
      );

    return response.data;
  };

// GET BOOKMARKS
export const getBookmarks =
  async () => {
    const response = await api.get(
      "/stories/bookmarks/all"
    );

    return response.data;
  };