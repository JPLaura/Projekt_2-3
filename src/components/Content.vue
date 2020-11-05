<template>
<div class="mx-4  h-screen">
  <hooper class=" h-screen" :navButtons ="true">
    <slide class=" bg-yellow-300">
          test
    </slide>
    <slide class="bg-green-400">
      <h3>Hello2222</h3>
    </slide>
    <slide class="bg-orange-200">
      test
      <Timenev />
    </slide>
    </hooper>
    </div>
</template>

<script>
import { Hooper, Slide } from 'hooper';
import 'hooper/dist/hooper.css';
import Timenev from "./reusable2/Timenev";
export default {
  components: {
    Hooper,
    Slide,
    Timenev
  },
  mounted() {
    this.getData();
    console.log(this.codes)
  },
  data: () => ({
    codes: [],
  }),
  methods: {
     async getData(){
      try {
        const api = 'https://tahvel.edu.ee/hois_back/timetables/group/38/432?fbclid=IwAR3EsUV0GpdyImxKCMrlpezjKu2Z9buy3MrkBzBUGQhFXDliwsCWf3yVoEY'
        this.axios.get(api).then((response) => {
          for(var d in response.data) {
            this.codes.push(response.data[d].groupCode)
          }
          })
      } catch(err){
        console.log(err)
      }

      }

            
  }
}
</script>

<style>

</style>