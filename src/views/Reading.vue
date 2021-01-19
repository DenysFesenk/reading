<template>
  <div>
    <div class="reading">
      <dot-loader
        :loading="loading"
        :color="color"
        :size="size"
        class="reading__spinner"
      ></dot-loader>
      <div v-if="!loading">
        <div v-if="readArray">
          <the-calendar :dateChanged="handleDateChanged" />
          <the-title>{{ readArray.attributes.title }}</the-title>
          <the-verse>{{verse}}</the-verse>
          <the-content>{{content}}</the-content>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { readingMorning } from "../helper/parse";
import DotLoader from "vue-spinner/src/DotLoader.vue";
import TheTitle from '../components/common/TheTitle.vue';
import TheVerse from '../components/common/TheVerse.vue';
import TheContent from '../components/common/TheContent.vue';
import TheCalendar from '../components/common/TheCalendar.vue';

export default {
  name: "Morning",
  data() {
    return {
      value: 2,
      readArray: [],
      verse: " ",
      content: " ",
      size: "50px",
      color: "#1a73e8",
      loading: true,
      date: new Date(),
      modelConfig: {
        type: "nubmer",
      },
    };
  },
  watch: {
    date: function() {
      this.getData(this.date);
    }
  },
  components: {
    DotLoader,
    TheTitle,
    TheVerse,
    TheContent,
    TheCalendar,
  },
  methods: {
    readingMorning,
    async getData(value) {
      this.readArray = await this.readingMorning(0, value),
      this.loading = false,
      this.verse = this.readArray.attributes.verse.replace(/(<([^>]+)>)/g, ""),
      this.content = this.readArray.attributes.content.replace(/(<([^>]+)>)/g, "");
    },
    handleDateChanged(value) {
      this.getData(value);
    }
  },
  created() {
    this.getData(this.date);
  }
  
};
</script>

<style scoped lang="scss">
.reading {
  min-height: 85vh;
  padding: 20px 40px;
  &__spinner {
    padding: 10px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
