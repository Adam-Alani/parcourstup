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
            <h3 class="text-pred">Moyenne 2020: {getAverageSchoolGrade(school).toFixed(2)}</h3>
            {#if (nonSelectiveSchool(school))}
                <p class="text-green-500">Cette formation n'est pas selective</p>
            {/if}
        </div>
        <h1 class="mx-12 py-8">{answer}</h1>
    </div>
</div>
