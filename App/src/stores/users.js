import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { uuid } from "vue-uuid";
import { getLocalStorage, setLocalStorage } from "../hooks/localStorage";

export const useUsersStore = defineStore("users", () => {
  // State
  const users = ref(
    getLocalStorage("users") || [
      {
        id: uuid.v4(),
        internalId: 1000,
        name: "Alice Smith",
        email: "alice.smith@gmail.com",
        password: "123",
        role: "admin",
        school: "ESMAD",
        course: null,
        year: null,
        photo: null,
        badges: [0, 2, 4], // badges ids
        highlightedBadge: null,
      },
    ]
  );

  // Getters
  const getUsers = computed(() => users.value);
  const getUsersByRole = computed((role) =>
    users.value.filter((user) => user.role === role)
  );
  const getMembersBySchool = computed((school, role = null) =>
    users.value
      .filter((user) => user.school === school)
      .filter((user) => {
        if (role) return user.role === role;
        return true;
      })
  );
  const getUser = computed((id) => users.value.find((user) => user.id === id));
  const isUserLogged = computed(() => getLocalStorage("loggedUser") !== null);
  const getLoggedUser = computed(() => {
    const loggedUserId = getLocalStorage("loggedUser");
    if (!loggedUserId) return null;
    return getUser.value(loggedUserId);
  });

  // Actions
  const addUser = (newUser) => {
    users.value.push(newUser);
    setLocalStorage("users", users.value);
  };
  const editUser = (id, email, password, course, year) => {
    if (users.value.findIndex((user) => user.id === id) !== -1) {
      users.value[index].email = email;
      users.value[index].password = password;
      users.value[index].course = course;
      users.value[index].year = year;
      setLocalStorage("users", users.value);
    }
  };
  const changeUserRole = (id, newRole) => {
    users.value.find((user) => user.id === id).role = newRole;
    setLocalStorage("users", users.value);
  };
  const setHighlightedBadge = (id, badgeId) => {
    users.value.find((user) => user.id === id).highlightedBadge = badgeId;
    setLocalStorage("users", users.value);
  };
  const addBadge = (id, badgeId) => {
    const user = users.value.find((user) => user.id === id);
    // check if the user already has the badge
    if (user.badges.includes(badgeId)) return;

    // add the badge to the user
    user.badges.push(badgeId);
    setLocalStorage("users", users.value);
  };
  const logIn = (email, password) => {
    // find if there's an user with the given email and password
    const user = users.value.find(
      (user) => user.email === email && user.password === password
    );

    if (!user) return false;

    // save the user id in the local storage
    setLocalStorage("loggedUser", user.id);
    return true;
  };

  return {
    getUsers,
    getUsersByRole,
    getMembersBySchool,
    getUser,
    addUser,
    editUser,
    changeUserRole,
    setHighlightedBadge,
    addBadge,
    logIn,
    isUserLogged,
    getLoggedUser,
  };
});
