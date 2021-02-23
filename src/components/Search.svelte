<script lang="ts">
    import Tailwindcss from '../Tailwindcss.svelte';
    import Chips from './Chips.svelte';
    import {schools} from "./store";
    import loadOptions , { optionIdentifier , differentObjects } from "./helpers.ts";
    import Select from 'svelte-select';
    import Item from './Item.svelte';

    const getSelectionLabel = (option:object):string => {
        if (differentObjects($schools , option)) {
            $schools.push(option);
            $schools = $schools;
        }
        return "Cherchez vos Formations";
    }

</script>
<Tailwindcss />
<div class="bg-pblue my-10 flex md:flex-row flex-col">
    <section class="md:py-12 py-2 flex-1">
        <div class=" py-2 px-2 ml-12 w-72  text-sm  focus:outline-none themed">
            <Select {loadOptions} {optionIdentifier} {getSelectionLabel} {Item}  placeholder="Cherchez vos Formations"></Select>
        </div>
    </section>
    <aside class="flex flex-wrap flex-row justify-start items-center justify-center flex-1 my-2 ">
        {#each $schools as schoolName}
            <Chips name={schoolName["School"]}/>
        {/each}
    </aside>
</div>
