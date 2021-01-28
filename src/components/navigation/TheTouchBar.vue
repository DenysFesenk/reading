<template>
  <div class="bar">
    <the-arrow-left />
    <span class="bar__date">{{this.date.getUTCDay()}}</span>
    <toggle-button 
        class="bar__switch"
        @change="onChange"
        color="#8c8c8c"
        switch-color="#cf1322"
        :labels="{checked: 'on', unchecked: 'off'}"
      />
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import TheArrowLeft from '../common/TheArrowLeft.vue';
export default {
  components: { TheArrowLeft },
    name: "The-Touch-Bar",
    data() {
      return {
        date: new Date()
      }
    },
    watch: {
      date: function() {
        this.getData(this.date);
      }
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
    async func() {
      const date = this.date;
      // console.log(new Intl.DateTimeFormat('ru-RU', date).format(date));
      console.log(date, 'hello word');
    }
  },
}
</script>

<style lang="scss">
  .bar{
    padding: 10px 60px;
    @include flex(center, center);
  }
</style>