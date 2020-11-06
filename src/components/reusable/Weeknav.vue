<template>
    <div class="bg-white h-12 w-full border-solid border-2 border-black rounded-lg flex flex-row">
        <div class="h-full w-1/10 flex items-center"><Arrowbutton2/></div>
        <div class="w-5/10 h-full">aaaaa</div>
        <div class="h-full w-1/10 flex items-center"><Arrowbutton/></div>
        <div class="w-3/10 h-full">aaa</div>

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
