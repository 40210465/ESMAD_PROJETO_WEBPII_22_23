<template>
  <div class="searchbar">
    <b-input-group class="mt-4">
      <template #prepend>
        <b-input-group-text class="searchbar-input searchbar-icon">
          <strong>
            <img
              src="../assets/icons/search.svg"
              alt="search"
              width="20"
            /> </strong
        ></b-input-group-text>
      </template>
      <b-form-input
        class="searchbar-input"
        v-model="search"
        placeholder="Search"
        type="search"
        style="width: 400px"
      ></b-form-input>
    </b-input-group>
  </div>
</template>

<script>
export default {
  name: "Searchbar",
  props: {
    route: String,
  },

  data() {
    // TODO: Depending on the current route, the searchbar should filter
    // news or activities or both.

    return {
      search: "",
    };
  },
};
</script>

<style lang="scss" scoped>
$searchbar-bg: #343e3d;
$searchbar-text-color: #aedcc0;
$searchbar-selected-color: #3fc380;

.searchbar {
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.searchbar-input {
  background-color: $searchbar-bg;
  color: $searchbar-text-color;
  border: none;
  border-radius: 13px;

  &:focus {
    box-shadow: none;
  }
}

.searchbar-icon {
  background-color: $searchbar-bg;
  color: $searchbar-text-color;
}

@media (max-width: 620px) {
  // stop the input from moving to the next line
  .searchbar {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .searchbar-input {
    border-radius: 0;
  }

  .searchbar-icon {
    display: none;
  }
}
</style>
