<template>
  <div>
     <div>
         <span> {{room.code}} </span>
     </div>
  </div>
</template>

<script>
export default {

    props: {
        room: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            isVisible: false
        };
    },
}
</script>


<style>

</style>