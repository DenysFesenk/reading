<template>
  <h1 class="the-title">
    <slot />
  </h1>
</template>

<script>
export default {
  name: "TheTitle",
};
</script>

<style lang="scss">
.the-title {
  text-align: center;
  padding-top: 10px;
  // margin-bottom: 10px;
  max-width: 300px;
  margin: 0 auto 10px;
  @include text($H220, 400, var(--text-color));
  @media screen and (min-width: 576px) {
    @include text($H280, 400, var(--text-color));
    max-width: 100%;
  }
  @media screen and (min-width: 768px) {
    @include text($H330, 400, var(--text-color));
    max-width: 100%;
  }
  @media screen and (min-width: 992px) {
    @include text($H400, 400, var(--text-color));
    max-width: 100%;
  }
}
</style>
