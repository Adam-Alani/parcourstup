<script lang="ts">
    import Tailwindcss from '../Tailwindcss.svelte';
    import Chips from './chips.svelte';
    import axios from 'axios';
    import {schools} from "./store";
    import VirtualList from '@sveltejs/svelte-virtual-list';
    import Select from 'svelte-select';
    import Item from './Item.svelte';

    let newSchool : string = "";
    let res = null
    let start = 0;
    let end = 25;

    let items = [];

    function addToSchools() {
        newSchool = newSchool.trim();
        if (!newSchool) return;
        $schools = [...$schools, newSchool];
        if (newSchool.length > 2) {
            axios({ method: "POST", url: "http://localhost:8090/", data: {school: newSchool }, headers: {"content-type": "text/plain"}}).then(result => {
                res = result.data;
                for (let i = 0; i < result.data.length ;i++) {
                    items.push(result.data[i][0]);
                    items = items;
                }
                newSchool = res;
                console.log(items)
            }).catch( error => {
                console.error(error);
            })
        }
        newSchool = '';
    }

    function loadOptions(filterText : string) {
        if (filterText.length > 3) {
            return axios({ method: "POST", url: "http://localhost:8090/", data: {school: filterText }, headers: {"content-type": "text/plain"}})
                .then(result => result.data)
        }
    }

    let favouriteFood = undefined;
    function handleSelect(event) {
        favouriteFood = event.detail;
        addToSchools();
    }


    const getSelectionLabel = (option:object):string => {
        console.log(option)
        $schools.push(option[0]);
        $schools = $schools;
        return "Cherchez vos Formations";
    }
    const optionIdentifier = (option) => {
        return option;
    }



</script>
<Tailwindcss />

<div class="bg-pblue my-10 flex flex-row">
    <section class="py-12 flex-1 ">
        <div class=" py-2 px-2 ml-12 w-72  text-sm  focus:outline-none">
            <Select {loadOptions} {optionIdentifier} {getSelectionLabel} {Item}  placeholder="Cherchez vos Formations"></Select>
        </div>
    </section>
    <aside class="flex flex-wrap flex-row justify-start flex-1 my-2 ">
        {#each $schools as schoolName}
            <Chips name={schoolName}/>
        {/each}
    </aside>
</div>



