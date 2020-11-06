<template>
  <div class="about">
    <div v-for="room in rooms" :key="room.roomsId">
      <Test :room="room"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Test from '@/components/reusable/Test.vue'
import {mapState} from "vuex";
export default {
  name: 'About',
  components: {
    Test
  },
created() {
    this.$store.dispatch('getRooms');
  },
   computed: mapState(['rooms']),

}
</script>

