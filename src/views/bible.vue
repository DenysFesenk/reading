<template>
  <div class="bible">
    <dot-loader 
    :loading="loading" 
    :color="color" 
    :size="size"
    class="spinner"
    ></dot-loader>
    <div v-if="!loading">
      <div v-if="readArray">
        <the-calendar :dateChanged="handleDateChanged"/>
        <the-title> {{ readArray.attributes.title }} </the-title>
        <the-content> {{ readArray.attributes.content }} </the-content>
      </div>
    </div>
  </div>
</template>
<script>
import { readingMorning } from '../helper/parse'
import  DotLoader from 'vue-spinner/src/DotLoader.vue'
import TheCalendar from '../components/common/TheCalendar.vue'
import TheTitle from '../components/common/TheTitle.vue'
import TheContent from '../components/common/TheContent.vue'

export default {
  name: 'Sabbath-school',
  data(){
    return {
      readArray: [],
      size: '50px',
      color: '#1a73e8',
      loading: true,
    }
  },
  watch: {
    date: function(){
      this.getData(this.date);
    },
  },
  components: {
    DotLoader,
    TheCalendar,
    TheTitle,
    TheContent,
  },
  methods: {
    readingMorning,
    async getData(value){
      this.readArray = await this.readingMorning(3, value),
      this.loading = false,
      this.verse = this.readArray.attributes.verse.replace(/(<([^>]+)>)/g, ""),
      this.content = this.readArray.attributes.content.replace(/(<([^>]+)>)/g, "");
    },
    handleDateChanged(value){
      this.getData(value);
    }
  },
  created() {
    this.getData(this.date);
  } 
}
</script>
<style scoped lang="scss">
    .spinner{
      padding: 10px;
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .bible{
      padding: 30px;
      @media screen and (min-width: 576px){
        padding: 0 60px;
      };
    }
</style>