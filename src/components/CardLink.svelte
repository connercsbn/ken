<script>
	import '../styles/styles.css';
	import '../styles/tailwind-output.css';
	export let href;
</script>

<li class="">
	<a
		class="p-1 my-1 font-body capitalize text-sm font-bold underline text-blue-600
        hover:text-blue-900 hover:rounded transition-none duration-200"
		sveltekit:prefetch
		{href}
	>
		<slot />
	</a>
</li>
