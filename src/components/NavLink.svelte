<script>
	import '../styles/styles.css';
	import '../styles/tailwind-output.css';
	import { page } from '$app/stores';
	export let path;
</script>

<a
	sveltekit:prefetch
	class:active={$page.path === path}
	class="nav-link sm:nav-link-desktop after:nav-link-after sm:after:desktop-nav-link-after"
	href={path}
>
	<slot />
</a>
