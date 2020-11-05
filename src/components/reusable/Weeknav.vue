<template>
    <div class="bg-white h-16 w-auto border-solid border-4 border-black rounded-lg flex flex-row">
        <div class="h-full flex items-center"><Arrowbutton2/></div>
        <div class="w-5/10 h-full"></div>
        <div class="h-full flex items-center"><Arrowbutton/></div>
        <div class="w-3/10 h-full"></div>

    </div>
</template>

<script>
import Arrowbutton from './Arrowbutton';
import Arrowbutton2 from './Arrowbutton2';
export default {
    components: {
        Arrowbutton,
        Arrowbutton2

    }
}
</script>

<style>

</style>
