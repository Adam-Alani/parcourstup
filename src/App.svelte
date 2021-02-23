<script lang="ts">
	import Tailwindcss from './Tailwindcss.svelte';
	import Search from './components/Search.svelte'
	import NoteForm from './components/NoteForm.svelte';
	import Result from './components/Result.svelte';
	import { totalAverage, schools, exams, footer } from "./components/store";
	import { getAverageSchoolGrade, passingGrade, propositionsMessage } from "./components/helpers.ts";

	let searched = false;

	/** Displays Right hand of the page on click */
	function search() {searched = true;}

	function schoolAverage():void {
		for (let i = 0; i < $schools.length ; i++) {
			$schools[i]["Average"] = getAverageSchoolGrade($schools[i]);
		}
	}

</script>
<style global>body {font-family: "Segoe UI", sans-serif;}</style>
<Tailwindcss />
<main class=" flex flex-col min-h-screen text-pblue hidden md:flex">
	<div class="flex-grow">
		<nav class="flex flex-row justify-between items-center mx-12 flex-wrap ">
			<img src="/images/parcourstup.png" width="400px" height="auto" alt="ParcourStup" >
			<ul class="sm:flex-initial flex font-semibold text-xl  flex-1 justify-around  flex-row   ">
				<li class="sm:mr-12"><a href="https://dossier.parcoursup.fr/Candidat/carte" target=”_blank”>Formations</a></li>
				<li class="sm:mx-12"><a href="https://www.parcoursup.fr/" target=”_blank”>Calendrier</a></li>
				<li class="sm:ml-12"><a href="mailto:adamalany@gmail.com" target=”_blank”>Contact</a></li>
			</ul>
		</nav>
		<Search/>
		<div class="grid-cols-1 md:grid-cols-2 grid">
			<div>
				<h1 class=" px-12 font-bold text-2xl  ">Inserez votre Moyenne (/20)</h1>
				<div class="font-semibold text-xl mt-2  flex-grow">
					<div class="px-12 flex flex-col lg:grid  lg:grid-cols-2">
						{#each $exams as exam}
							<NoteForm subject={exam}/>
						{/each}
					</div>
				</div>
				<div class="flex justify-center items-center">
					<button on:click={search} class="bg-pred rounded-md px-4 py-2 text-xl font-semibold text-white ">Search</button>
					<h1 class="ml-2 text-pblue font-semibold">Moyenne: {$totalAverage}</h1>
				</div>
			</div>
			{#if searched}
				<div class="ml-12 mb-10">
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
						<Result school={school} answer={passingGrade(school , $totalAverage)}/>
					{/each}
				</div>
			{/if}
		</div>
	</div>
	<footer class="bg-pblue text-white font-light px-10 py-10 text-xs ">
		<div>
			<p> Ce site calcule la probabilite selon les donnees fournis par
				<a href="https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/information/?timezone=Europe%2FBerlin&sort=tri" class="underline" style="color:blue;">
					Parcoursup
				</a>.
				{$footer}
			</p>
		</div>
	</footer>
</main>

<main class=" flex flex-col min-h-screen w-screen text-pblue md:hidden">
	<div class="flex-grow">
		<nav class="flex flex-row justify-between items-center mx-12 flex-wrap ">
			<img src="/images/parcourstup.png" width="400px" height="auto" alt="ParcourStup" >
			<ul class="sm:flex-initial flex font-semibold  flex-1 justify-around  flex-row   ">
				<li class="mr-2"><a href="https://dossier.parcoursup.fr/Candidat/carte" target=”_blank”>Formations</a></li>
				<li class="mx-2"><a href="https://www.parcoursup.fr/" target=”_blank”>Calendrier</a></li>
				<li class="ml-2"><a href="mailto:adamalany@gmail.com" target=”_blank”>Contact</a></li>
			</ul>
		</nav>
		<Search/>
		<div class="grid-cols-1 md:grid-cols-2 grid">
			<div>
				<h1 class=" px-12 font-bold text-2xl  ">Inserez votre Moyenne (/20)</h1>
				<div class="font-semibold mt-2  flex-grow">
					<div class="px-12 flex flex-col lg:grid  lg:grid-cols-2">
						{#each $exams as exam}
							<NoteForm subject={exam}/>
						{/each}
					</div>
				</div>
				<div class="flex justify-center items-center">
					<button on:click={search} class="bg-pred rounded-md px-4 py-2 text-xl font-semibold text-white ">Search</button>
					<h1 class="ml-2 text-pblue font-semibold">Moyenne: {$totalAverage}</h1>
				</div>
			</div>
			{#if searched}
				<div class=" mb-10 justify-center mx-3">
					<div class="bg-pred rounded-t-xl text-white font-bold ">
						<h1 class="mx-8 py-8">
							{propositionsMessage($schools , $totalAverage)}
						</h1>
					</div>
					<div class="bg-pblue text-white font-bold ">
						<div class="flex flex-row justify-between">
							<h1 class="mx-8 py-8">Formation</h1>
							<h1 class="mx-8 py-8">Reponse</h1>
						</div>
					</div>
					{#each $schools as school}
						<Result school={school} answer={passingGrade(school , $totalAverage)}/>
					{/each}
				</div>
			{/if}
		</div>
	</div>
	<footer class="bg-pblue text-white font-light px-10 py-10 text-xs ">
		<div>
			<p> Ce site calcule la probabilite selon les donnees fournis par
				<a href="https://data.enseignementsup-recherche.gouv.fr/explore/dataset/fr-esr-parcoursup/information/?timezone=Europe%2FBerlin&sort=tri" class="underline" style="color:blue;">
					Parcoursup
				</a>.
				{$footer}
			</p>
		</div>
	</footer>
</main>



