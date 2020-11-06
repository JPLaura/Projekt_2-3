
<template>
    <div id="box" class="bg-gray-100 h-24 border-solid border-2 mb-2 border-black rounded-lg">
        <div class="h-1/2">
        <h5 class="text-black text-2xl float-left pl-4 font-bold"><slot name="time"></slot></h5>
        <div class="text-black text-2xl float-right pr-4 font-bold"><slot name="room"></slot></div>

        </div>
        <div class="h-1/2 w-full flex flex-col">
        <h3 class="text-black text-base pl-4 font-bold"><slot name="lesson"></slot></h3>
        <div class="text-black text-base pl-4 font-normal"><slot name="teacher"></slot></div>

        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#box {
    width: 328px;
}

</style>