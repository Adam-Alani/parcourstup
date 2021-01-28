<script lang="ts">
    import Tailwindcss from '../Tailwindcss.svelte';
    import Chips from './chips.svelte';
    import {schools} from "./store";
    import loadOptions , { optionIdentifier } from "./search.ts";
    import Select from 'svelte-select';
    import Item from './Item.svelte';

    const getSelectionLabel = (option:object):string => {
        if (!$schools.includes(option["School"])) $schools.push(option);
        $schools = $schools;
        return "Cherchez vos Formations";
    }
</script>
<Tailwindcss />
<div class="bg-pblue my-10 flex flex-row">
    <section class="py-12 flex-1 ">
        <div class=" py-2 px-2 ml-12 w-72  text-sm  focus:outline-none themed">
            <Select {loadOptions} {optionIdentifier} {getSelectionLabel} {Item}  placeholder="Cherchez vos Formations"></Select>
        </div>
    </section>
    <aside class="flex flex-wrap flex-row justify-start flex-1 my-2 ">
        {#each $schools as schoolName}
            <Chips name={schoolName["School"]}/>
        {/each}
    </aside>
</div>
