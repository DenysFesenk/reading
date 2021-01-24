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
        font-size: 18px;
        @include text($H80, 400, var(--text-color));
  }
</style>