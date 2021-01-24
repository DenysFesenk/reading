<template>
  <div class="header">
    <ul class="header__list">
      <li class="header__item" v-for="route in routes" :key="route.name">
        <router-link class="header__item-link" :to="route.path">
          <img  :src="route.icon" alt="">
          <img  class="header__icon" src="../../assets/icon/morning.png" alt="">
          {{route.name}}
        </router-link>
      </li>
      <toggle-button 
        @change="onChange"
        color="#262626"
        switch-color="#cf1322"
        :labels="{checked: 'I', unchecked: '0'}"
      />
    </ul>
    
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
  name: "The-header",
  data() {
    return {
      value: 2,
      routes: [
        {
          path: "/",
          name: "Утренние чтение",
          icon: "/src/assets/icon/dove.png"
        },
        {
          path: "/sabbath-school",
          name: "Субботняя школа",
        },
        {
          path: "/evening",
          name: "Вечерние чтение",
        },
        {
          path: "/bible",
          name: "Библия",
        },
        {
          path: "/info",
          name: "Информация",
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
    padding: 20px;
    background-color: var(--bg-header);
    @include flex(center, center);
  }
  &__item {
    text-align: center;
    display: flex;
    align-items: center;
  }
  &__item:not(:last-child) {
    margin-right: 30px;
    border-right: 1px solid rgb(247, 246, 246);
    padding-right: 30px;
  }
  &__item-link {
    text-decoration: none;
    color: rgb(247, 246, 246);
    font-weight: 600;
    transition: color 0.25s ease-in-out;
    font-size: 18px;
    @include flex(center, center, column);
    &:hover {
      color: #b0b0b0;
    }
  }
  &__icon{
    margin-bottom: 10px;
  }
}
</style>
