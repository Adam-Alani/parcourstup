<script lang="ts">
	import Tailwindcss from './Tailwindcss.svelte';
	import Search from './components/Search.svelte'

</script>
<Tailwindcss />

<main class="h-screen text-pblue">

	<nav class="flex flex-row justify-between items-center mx-12 ">
		<div class="flex-1">
		<img src="/images/parcourstup.png" width="400px" height="auto" alt="ParcourStup" >
		</div>
		<ul class="flex-initial flex font-semibold text-xl  ">
			<li class="mr-12"><a>Formations</a></li>
			<li class="mx-12"><a>Calendrier</a></li>
			<li class="ml-12"><a>Contact</a></li>
		</ul>
	</nav>
	<Search/>



</main>







<style global>
	body {
		font-family: "Segoe UI", sans-serif;
	}
</style>
