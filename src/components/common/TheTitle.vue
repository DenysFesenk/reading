<template>
  <h1 class="the-title">
      <slot />
  </h1>
</template>

<script>
export default {
    name: 'TheTitle'
}
</script>

<style lang="scss">
    .the-title{
        text-align: center;
        margin-bottom: 10px;
        @include text($H220, 400, var(--text-color));
        @media screen and (min-width: 576px){
            @include text($H280, 400, var(--text-color));
        }
        @media screen and (min-width: 768px){
            @include text($H330, 400, var(--text-color));
        }
        @media screen and (min-width: 992px){
            @include text($H400, 400, var(--text-color));
        }
    }
</style>