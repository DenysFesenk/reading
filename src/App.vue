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
import { mapMutations, mapState } from 'vuex'

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
    ...mapMutations(["changeTheme"]),
  },
  watch:{
    lightTheme(e){
      localStorage.setItem('lightTheme', e)
      document.getElementById("my-app").classList.contains("dark-theme") 
        ? document.getElementById("my-app").classList.remove("dark-theme") 
        : document.getElementById("my-app").classList.add("dark-theme") 
        
    }
  },
};
</script>

<style lang="scss">
.app {
  background-color: var(--bg-color); 
  min-height: 100vh;
}
:root{
    --bg-color: #fafafa;
    --text-color: #1d1d1f;
    --bg-header: #2997ff;
    --bg-btn: #d9d9d9;
}
.dark-theme:root{
  --bg-color: #1d1d1f;
  --text-color: #fafafa;
  --bg-header: #013b8c;
  --bg-btn: #8c8c8c;
}
</style>
