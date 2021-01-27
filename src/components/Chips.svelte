<script lang="ts">
    import Tailwindcss from '../Tailwindcss.svelte';
    export let name : string;

    import {schools} from "./store";

    function removeSchool() {
        $schools = $schools.filter(item => item !== name);
    }


</script>
<Tailwindcss/>

<div on:click={removeSchool}>
    <button class="bg-white rounded-xl shadow-md py-2 px-2 mx-1 text-pred uppercase font-semibold text-xl">{name}</button>
</div>







