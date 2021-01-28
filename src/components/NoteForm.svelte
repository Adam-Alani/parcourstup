<script lang="ts">
    import Tailwindcss from '../Tailwindcss.svelte';
    export let subject:string;
    let grade:number;
    import {averages, schools} from "./store";

    function addGrade(){
        if (grade){
            $averages[subject] = grade;
            $averages = $averages;
        }
    }
</script>
<Tailwindcss/>

<div class="flex flex-row flex-1">
    <h1 class="flex-1 my-6">
        {subject}
        <input type=number on:change={addGrade}  bind:value={grade} min=0 max=20 class="border-2 border-pblue rounded float-right">
    </h1>

</div>









