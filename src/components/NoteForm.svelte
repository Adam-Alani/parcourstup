<script lang="ts">
    import Tailwindcss from '../Tailwindcss.svelte';
    export let subject:string;
    let grade:number;
    import {averages , totalAverage} from "./store";

    function addGrade(){
        if (grade){
            $averages[subject] = grade;
            $averages = $averages;
        }
    }
    export function average():void {
        let total = 0;
        for (let key in $averages) {
            total += $averages[key];
        }
        console.log(Object.keys($averages).length)
        $totalAverage =  (total / Object.keys($averages).length)
    }

    function clickHandler() {
        addGrade();
        average();
    }

</script>
<Tailwindcss/>

<div class="flex flex-row flex-1">
    <h1 class="flex-1 my-6">
        {subject}
        <input type=number on:change={clickHandler}  bind:value={grade} min=0 max=20 class="border-2 border-pblue rounded float-right">
    </h1>
</div>










