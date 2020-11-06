<template>
<div class="h-screen w-full">
  <div>
<Weeknav/>
  </div>
  <div>

 <Content/>
  </div>
  </div>
</template>

<script>
import Content from "./Content"
import Weeknav from "./reusable/Weeknav.vue"
export default {
  components: {
    Content,
    Weeknav,
  },
  // eslint-disable-next-line no-unused-vars
  async fetch({ store, params }) {
        await store.dispatch('index/getRooms');
    },
  computed: {
    rooms(){
      return this.$store.index.rooms;
    }
  }
}
</script>

<style>
</style>
