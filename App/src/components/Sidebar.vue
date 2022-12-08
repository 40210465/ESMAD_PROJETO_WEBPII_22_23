<template>
  <nav
    :class="{
      sidebar: true,
      expanded: isExpanded,
      reduced: !isExpanded,
      openAnimation: openAnimation,
      closeAnimation: closeAnimation,
    }"
    @mouseover="open"
    @mouseleave="close"
  >
    <div class="top-logo">
      <router-link
        to="/"
        :disabled="currentRoute === '/'"
        :class="{ 'disabled-link': currentRoute === '/' }"
        >Home</router-link
      >
    </div>
    <div class="nav-links">
      <router-link
        to="/news"
        :disabled="currentRoute === '/news'"
        :class="{ 'disabled-link': currentRoute === '/news' }"
      >
        <img
          src="../assets/icons/news.svg"
          alt="News"
          width="50"
          height="50"
          class="route-icon"
        />
        <span v-if="showText"> News </span>
      </router-link>
      <router-link
        to="/activities"
        :disabled="currentRoute === '/activities'"
        :class="{ 'disabled-link': currentRoute === '/activities' }"
        ><img
          src="../assets/icons/activities.svg"
          alt="Activities"
          width="50"
          height="50"
          class="route-icon"
        />
        <span v-if="showText"> Activities </span>
      </router-link>
      <router-link
        to="/dashboard"
        :disabled="currentRoute === '/dashboard'"
        :class="{ 'disabled-link': currentRoute === '/dashboard' }"
        ><img
          src="../assets/icons/dashboard.svg"
          alt="Dashboard"
          width="50"
          height="50"
          class="route-icon"
        />
        <span v-if="showText"> Dashboard </span>
      </router-link>
      <router-link
        to="/manage"
        :disabled="currentRoute === '/manage'"
        :class="{ 'disabled-link': currentRoute === '/manage' }"
        ><img
          src="../assets/icons/manage.svg"
          alt="Manage"
          width="50"
          height="50"
          class="route-icon"
        />
        <span v-if="showText"> Manage </span>
      </router-link>
    </div>

    <div class="bottom-link">
      <router-link
        to="/account"
        :disabled="currentRoute === '/account'"
        :class="{ 'disabled-link': currentRoute === '/account' }"
      >
        <img
          src="../assets/icons/account.svg"
          alt="Account"
          width="50"
          height="50"
          :class="{
            'route-icon': true,
            'mt-2': showText,
          }"
        />
        <span v-if="showText"> Account </span>
      </router-link>
      <button v-if="showText" class="sign-out-btn" @click="signOut">
        Sign Out
      </button>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    const currentRoute = this.$route.path;
    return {
      currentRoute,
      showText: false,
      openAnimation: false,
      closeAnimation: false,
      isExpanded: false,
    };
  },

  methods: {
    /* Sidebar Animations */
    open() {
      if (this.isExpanded) return;

      this.openAnimation = true;
      setTimeout(() => {
        this.openAnimation = false;
        this.isExpanded = true;
        this.showText = true;
      }, 300);
    },

    close() {
      if (!this.isExpanded) return;

      if (this.openAnimation) {
        setTimeout(() => {
          this.close();
        }, 300);
        return;
      }

      this.closeAnimation = true;
      this.showText = false;
      setTimeout(() => {
        this.closeAnimation = false;
        this.isExpanded = false;
        this.showText = false;
      }, 300);
    },

    signOut() {
      alert("Sign Out");
    },
  },
};
</script>

<style lang="scss" scoped>
$sidebar-bg: #343e3d;
$sidebar-text-color: #aedcc0;
$sidebar-text-color-hover: #3fc380;

.sidebar {
  background-color: $sidebar-bg;
  color: $sidebar-text-color;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  text-align: center;
  font-size: 1.7rem;
  font-weight: 300;

  transition: color 0.1s ease-in-out;

  a {
    text-decoration: none;
    color: $sidebar-text-color;
    display: block;
    padding: 16px;
    transition: 0.3s;
    &:hover {
      color: $sidebar-text-color-hover;

      .route-icon {
        fill: $sidebar-text-color-hover;
      }
    }
  }
}

.expanded {
  width: 250px;
}

.reduced {
  width: 80px;
}

.top-logo {
  height: 10%;
}

.nav-links {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80%;
}

.bottom-link {
  height: 10%;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

.route-icon {
  margin-right: 10px;
  float: left;
}

.disabled-link {
  pointer-events: none;
  opacity: 50%;
}

.sign-out-btn {
  background-color: transparent;
  color: $sidebar-text-color;
  opacity: 40%;
  border: none;
  font-size: 1.2rem;
  top: -40px;
  position: relative;
  align-self: flex-end;
  margin-right: 53px;

  &:hover {
    opacity: 70%;
  }
  transition: color 0.5s ease-in-out;
}

.openAnimation {
  animation: slideRight 0.3s ease-in-out;
}

.closeAnimation {
  animation: slideLeft 0.3s ease-in-out;
  width: 80px;
}

@keyframes slideLeft {
  0% {
    width: 250px;
  }
  100% {
    width: 80px;
  }
}

@keyframes slideRight {
  0% {
    width: 80px;
  }
  100% {
    width: 250px;
  }
}
</style>
