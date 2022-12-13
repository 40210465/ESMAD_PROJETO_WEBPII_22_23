import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { uuid } from "vue-uuid";
import { getLocalStorage, setLocalStorage } from "../hooks/localStorage";

export const useActivitiesStore = defineStore("activities", () => {
  // State
  const activities = ref(getLocalStorage("activities") || []);

  // Getters
  const getActivities = computed(() => activities.value);
  const getActivityById = computed((id) =>
    activities.value.find((activity) => activity.id === id)
  );

  // Actions
  const addActivity = (newActivity) => {
    newActivity.id = uuid.v4();
    activities.value.push(newActivity);
    setLocalStorage("activities", activities.value);
  };
  const finishActivity = (id) => {
    activities.value.find((activity) => activity.id === id).finished = true;
    setLocalStorage("activities", activities.value);
  };
  const addReport = (id, report) => {
    activities.value.find((activity) => activity.id === id).report = report;
    setLocalStorage("activities", activities.value);
  };

  return {
    getActivities,
    getActivityById,
    addActivity,
    finishActivity,
    addReport,
  };
});
