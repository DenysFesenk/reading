<template>
  <div class="app">
    <div id="nav">
      <the-header />
    </div>
    <router-view />
  </div>
</template>

<script>
import TheHeader from "./components/navigation/TheHeader";
import { mapState } from 'vuex'

export default {
  name: "app",
  components: {
    TheHeader,
  },
  computed: {
    ...mapState({
      lightTheme: ({ lightTheme }) => lightTheme,
    }),
  },
  methods:{

  },
  watch:{

  },
  mounted() {

  }
};
</script>

<style lang="scss">
.app {
  background-color: #fbfbfd;
}
</style>
