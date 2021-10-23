<script>
	import '../styles/styles.css';
	import '../styles/tailwind-output.css';
	import CardLink from './CardLink.svelte';
	export let linklist;
	export let title;
</script>

<main
	class="bg-white w-11/12 mx-auto my-5 px-4 py-3 shadow-l hover:shadow-xl transition-all after:transition-all group"
>
	<h1
		class="font-bold font-body text-lg py-1 capitalize relative after:redbar group-hover:after:redbar-darker transition-all"
	>
		{title}
	</h1>
	<ul class="flex flex-col py-2">
		{#each linklist as link}
			<CardLink href={link.href}>{link.title}</CardLink>
		{/each}
	</ul>
</main>
