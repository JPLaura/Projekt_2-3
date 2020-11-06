<template>
  <div :class="containerClass">
    <slot
      v-for="(feed, index) in feeds"
      :index="index"
      :feed="feed"
      name="feeds"
    />
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>