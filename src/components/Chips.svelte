<script lang="ts">
    import Tailwindcss from '../Tailwindcss.svelte';
    import {schools} from "./store";
    export let name : string;

    function removeSchool():void {
        $schools = $schools.filter(item => item["School"] !== name);
    }
</script>
<Tailwindcss/>
<div on:click={removeSchool}>
    <button class="bg-white rounded-xl shadow-md py-2 px-2 mx-1 text-pred uppercase font-semibold text-xl">{name}</button>
</div>







