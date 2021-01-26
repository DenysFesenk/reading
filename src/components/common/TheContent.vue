<template>
  <p class="the-content">
      <slot />
  </p>
</template>

<script>
export default {
    name: 'TheContent'
}
</script>

<style lang="scss">
    .the-content {
        margin-top: 20px;
        @include text($H70, 400, var(--text-color));
        @media screen and (min-width: 576px){
          @include text($H80, 400, var(--text-color));
        }
  }
</style>