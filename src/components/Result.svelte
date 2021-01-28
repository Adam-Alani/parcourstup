<script lang="ts">
    import Tailwindcss from '../Tailwindcss.svelte';
    export let ecole : string;
    export let moyenne : number;

</script>
<Tailwindcss />
<div class="bg-pgray  font-semibold  mr-12">
    <div class="mx-8 py-4">
    <h1 class="text-xl">{ecole}</h1>
        <h3 class="text-pred">Moyenne 2020: {moyenne}</h3>
    </div>
</div>
