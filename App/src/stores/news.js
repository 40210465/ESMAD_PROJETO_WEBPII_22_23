import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { uuid } from "vue-uuid";
import { getLocalStorage, setLocalStorage } from "../hooks/localStorage";

export const useNewsStore = defineStore("news", () => {
  // State
  const news = ref(getLocalStorage("news") || []);

  // Getters
  const getNews = computed(() => news.value);
  const getNewById = computed((id) =>
    news.value.find((news) => news.id === id)
  );

  // Actions
  const addNew = (newNew) => {
    newNew.id = uuid.v4();
    newNew.date = new Date();
    news.value.push(newNew);
    setLocalStorage("news", news.value);
  };

  return {
    getNews,
    getNewById,
    addNew,
  };
});
