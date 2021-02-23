<template>
  <div class="bar">
    <ul class="bar__list-btn">
      <li class="bar__item"><button class="bar__btn">&#8249;</button></li>
      <li class="bar__item"><button class="bar__btn">Today</button></li>
      <li class="bar__item"><button class="bar__btn">&#8250;</button></li>
    </ul>
    <!-- <span class="bar__date">today</span> -->
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
export default {
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
    &__btn{
      padding: 4px 8px;
      border: none;
      border-radius: 3px; 
      outline: none;
      cursor: pointer;
      background-color: var(--bg-btn);
      @include text($H40, normal, var(--text-color));
    }
    &__item{
      &:not(:last-child){
        margin-right: 5px;
      }
    }
    &__list-btn{
      margin-right: 50px;
      @include flex(flex-start, stretch, row);
    }
  }
</style>