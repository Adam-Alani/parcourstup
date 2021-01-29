<script lang="ts">
	import Tailwindcss from './Tailwindcss.svelte';
	import Search from './components/Search.svelte'
	import NoteForm from './components/NoteForm.svelte';
	import Result from './components/Result.svelte';
	import {totalAverage , schools } from "./components/store";
	import {getAverageSchoolGrade , passingGrade , propositionsMessage} from "./components/helpers.ts";

	let searched = false;
	function search() {searched = true;}

	function schoolAverage() {
		for (let i = 0; i < $schools.length ; i++) {
			$schools[i]["Average"] = getAverageSchoolGrade($schools[i]);
		}
	}

</script>
<style global>body {font-family: "Segoe UI", sans-serif;}</style>
<Tailwindcss />
<main class="h-screen text-pblue">
	<nav class="flex flex-row justify-between items-center mx-12 flex-wrap ">
		<img src="/images/parcourstup.png" width="400px" height="auto" alt="ParcourStup" >
		<ul class="sm:flex-initial flex font-semibold text-xl  flex-1 justify-around  flex-row   ">
			<li class="sm:mr-12"><a href="https://dossier.parcoursup.fr/Candidat/carte">Formations</a></li>
			<li class="sm:mx-12"><a href="https://www.parcoursup.fr/">Calendrier</a></li>
			<li class="sm:ml-12"><a href="mailto:adamalany@gmail.com">Contact</a></li>
		</ul>
	</nav>
	<Search/>
	<div class="grid-cols-1 md:grid-cols-2 grid">
		<div class="">
			<h1 class=" px-12 font-bold text-2xl  ">Inserez votre Moyenne (/20)</h1>
			<div class="font-semibold text-xl mt-2 md:grid  md:grid-cols-2  flex-grow  ">
				<div class="px-12 flex flex-col ">
					<NoteForm subject="EC"/>
					<NoteForm subject="Francais Ecrit"/>
					<NoteForm subject="Francais Oral"/>
					<NoteForm subject="Spe 1"/>
					<NoteForm subject="Spe 2"/>
					<NoteForm subject="Philo"/>
					<NoteForm subject="Grand Oral"/>
				</div>
			</div>
			<div class="flex justify-center items-center">
				<button on:click={search} class="bg-pred rounded-md px-4 py-2 text-xl font-semibold text-white ">Search</button>
				<h1 class="ml-2 text-pblue font-semibold">Average: {$totalAverage}</h1>
			</div>
		</div>
		{#if searched}
			<div class="ml-12">
				<div class="bg-pred rounded-t-xl text-white font-bold text-2xl mr-12">
					<h1 class="mx-8 py-8">
						{propositionsMessage($schools , $totalAverage)}
					</h1>
				</div>
				<div class="bg-pblue text-white font-bold text-xl mr-12">
					<div class="flex flex-row justify-between">
						<h1 class="mx-8 py-8">Formation</h1>
						<h1 class="mx-8 py-8">Reponse</h1>
					</div>
				</div>
				{#each $schools as school}
					<Result ecole={school["School"]} moyenne={getAverageSchoolGrade(school).toFixed(2)} answer={passingGrade(school , $totalAverage)}/>
				{/each}
			</div>
		{/if}
	</div>
</main>