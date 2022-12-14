import { defineStore } from "pinia";
import { uuid } from "vue-uuid";
import { getLocalStorage, setLocalStorage } from "../hooks/localStorage";

async function fetchNews() {
  const news = getLocalStorage("news");
  if (news) return news;
  const response = await fetch("./data/json/news.json");
  const data = await response.json();
  return data;
}

export const useNewsStore = defineStore("news", {
  state: () => ({
    news: fetchNews(),
  }),

  getters: {
    getNews: (state) => state.news,
    getNewById: (state) => (id) => state.news.find((news) => news.id === id),
  },

  actions: {
    addNew(newNew) {
      newNew.id = uuid.v4();
      newNew.date = Date.now();
      this.news.push(newNew);
      setLocalStorage("news", this.news);
    },
  },
});
