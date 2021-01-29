<script lang="ts">
    import Tailwindcss from '../Tailwindcss.svelte';
    import {getAverageSchoolGrade , nonSelectiveSchool } from "./helpers.ts";
    export let school : string;
    export let answer : string;
</script>
<Tailwindcss />

<div class="bg-pgray  font-semibold  mr-12">
    <div class="flex flex-row justify-between">
        <div class="mx-8 py-4 ">
            <a href={school["Link"]} target=”_blank” class="text-xl">{school["School"]}</a>
            {#if getAverageSchoolGrade(school) === "-1"}
                <h3 class="text-pred">Moyenne pas disponible pour cette formation</h3>
            {:else}
                <h3 class="text-pred">Moyenne des mentions au BAC: {getAverageSchoolGrade(school)}</h3>
            {/if}
            {#if (nonSelectiveSchool(school))}
                <p class="text-green-500">Cette formation n'est pas selective</p>
            {/if}
        </div>
        <h1 class="mx-12 py-8">{answer}</h1>
    </div>
</div>
