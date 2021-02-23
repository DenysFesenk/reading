<template>
  <div class="header">
    <ul class="header__list">
      <li class="header__item" v-for="route in routes" :key="route.name">
        <router-link class="header__item-link" :to="route.path">
          <img class="header__icon" :src="route.icon" alt="" />
          {{ route.name }}
        </router-link>
      </li>
      
    </ul>
    <div class="header__block">
      <toggle-button
        class="header__switch"
        @change="onChange"
        color="#8c8c8c"
        switch-color="#cf1322"
        :labels="{ checked: 'on', unchecked: 'off' }"
      />
    </div>
    <!-- <the-touch-bar /> -->
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
// import TheTouchBar from './TheTouchBar.vue';
export default {
  // components: { TheTouchBar },
  name: "The-header",
  data() {
    return {
      value: 2,
      routes: [
        {
          path: "/",
          name: "Утро",
          icon: require("@/assets/icon/morning.png"),
        },
        {
          path: "/sabbath-school",
          name: "Школа",
          icon: require("@/assets/icon/school.png"),
        },
        {
          path: "/evening",
          name: "Вечер",
          icon: require("@/assets/icon/evening.png"),
        },
        {
          path: "/bible",
          name: "Библия",
          icon: require("@/assets/icon/bible.png"),
        },
        {
          path: "/info",
          name: "Инфо",
          icon: require("@/assets/icon/other.png"),
        },
      ],
    };
  },
  computed: {
    ...mapState({
      lightTheme: ({lightTheme}) => lightTheme
    })
  },
  methods: {
    ...mapMutations(["changeTheme"]),
    onChange(checked) {
      this.changeTheme(checked);
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  &__list {
    padding: 10px;
    background-color: var(--bg-header);
    @include flex(center, center);
    @media screen and (min-width: 576px) {
      padding: 20px;
    }
  }
  &__item {
    text-align: center;
    @include flex(center, center);
  }
  &__item:not(:last-child) {
    margin-right: 10px;
    padding-right: 10px;
    @media screen and (min-width: 576px) {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid rgb(247, 246, 246);
    }
    @media screen and (min-width: 992px) {
      margin-right: 30px;
      padding-right: 30px;
    }
  }
  &__item-link {
    height: 50px;
    @include text($H20, 600, rgb(247, 246, 246));
    @include flex(space-between, center, column);
    text-decoration: none;
    @media screen and (min-width: 576px) {
      @include text($H20, 600, rgb(247, 246, 246));
    }
    @media screen and (min-width: 768px) {
      transition: color 0.25s ease-in-out;
      @include text($H80, 600, rgb(247, 246, 246));
      &:hover {
        color: #b0b0b0;
      }
    }
  }
  &__icon {
    margin-bottom: 6px;
  }
  &__block{
    position: absolute;
    right: 120px;
    top: 90px;
    @media screen and (min-width: 576px) {
      right: 90px;
      top: 35px;
    }
  }
  &__switch {
    position: absolute;
    left: 100px;
    // top: 2px;
    @media screen and (min-width: 576px) {
      left: 60px;
    }
  }
}
</style>
