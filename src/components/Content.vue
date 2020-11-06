<template>

<div class="mx-2  h-full">
  <hooper class="h-full" :navButtons ="true">
    <slide class=" bg-yellow-300">
          
    </slide>
    <slide class="bg-green-400">
    </slide>
    <slide class="bg-orange-200 flex-col flex justify-center items-center">
      <div class="mx-8" v-for="lesson in getValid" :key="lesson.id">
      <Lessonbox>
        <template v-slot:time>
          {{lesson.timeStart}} - {{lesson.timeEnd}}
        </template>
        <template v-slot:room>
          {{lesson.rooms[0].roomCode}}
        </template>
        <template v-slot:lesson>
          {{ lesson.nameEt }}
        </template>
        <template v-slot:teacher>
          {{ lesson.teachers[0].name }}
        </template>
      </Lessonbox>
       </div>
    </slide>
    </hooper>
    </div>
</template>

<script>
import { Hooper, Slide } from 'hooper';
import { mapGetters } from 'vuex'
import 'hooper/dist/hooper.css';

import Lessonbox from "./reusable/Lessonbox.vue"


export default {
  components: {
    Hooper,
    Slide,
    Lessonbox,
  },
  created() {
    this.$store.dispatch('getLessons');
  },
   computed: mapGetters(['getValid']),
    
  
}
</script>

<style>

</style>