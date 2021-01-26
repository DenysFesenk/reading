<template>
  <div class="arrows">
      
  </div>
</template>

<script>
export default {
    name: "The-Arrows"
}
</script>

<style lang="scss" scoped>
    .arrows{
        position: absolute;
        top: 50%;
        width: 50px;
        height: 30px;
        border: 2px solid var(--text-color);
        border-radius: 5px;
        @include flex(center, center);
    }
</style>