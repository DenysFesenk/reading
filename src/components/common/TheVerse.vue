<template>
  <p class="the-verse">
      <slot />
  </p>
</template>

<script>
export default {
    name: 'TheVerse',

}
</script>

<style lang="scss">
    .the-verse {
    text-align: center;
    margin: 0 auto;
    max-width: 820px;
    @include text($H60, 600, var(--text-color));
    @media screen and (min-width: 576px){
      @include text($H80, 500, var(--text-color));
      max-width: 480px;
    }
    @media screen and (min-width: 768px){
      @include text($H80, 500, var(--text-color));
      max-width: 620px;
    }
    @media screen and (min-width: 992px){
      @include text($H80, 500, var(--text-color));
      max-width: 820px;
    }
  }
</style>