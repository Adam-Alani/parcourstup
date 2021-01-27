<script lang="ts">
    import Tailwindcss from '../Tailwindcss.svelte';
    import Chips from './chips.svelte';

    import {schools} from "./store";
    let newSchool : string = "";

    function addToSchools() {
        newSchool = newSchool.trim();
        if (!newSchool) return;
        $schools = [...$schools, newSchool];
        newSchool = '';
    }
</script>
<Tailwindcss />

<div class="bg-pblue my-10 flex flex-row">
    <section class="py-12 flex-1 ">
        <form on:submit|preventDefault={addToSchools}>
        <input class="border-2 border-pblue bg-white py-2 px-2 ml-12 w-72 rounded-lg text-sm  focus:outline-none"
        type="search" name="search" placeholder="Cherchez vos Formations"  bind:value={newSchool}>
        </form>
    </section>

    <aside class="flex flex-wrap flex-row justify-start flex-1 my-2 ">
        {#each $schools as schoolName}
            <Chips name={schoolName}/>
        {/each}
    </aside>



</div>
