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
    // ...mapMutations(["changeTheme"]),
  },
  watch:{
    lightTheme(e){
      e ? document.body.className = "" : document.body.className.add = ("dark-theme");
    }
  },
};
</script>

<style lang="scss">
.app {
  background-color: var(--bg-color); 
}
:root{
  --bg-color: #fafafa;
}
.dark-theme:root{
  --bg-color: #595959;
}
</style>
