<script>
	import NavLink from '../components/NavLink.svelte';
	import '../styles/styles.css';
	import '../styles/tailwind-output.css';
	import '../app.css';
	import '../styles/styles.css';
	import '../styles/tailwind-output.css';
	import Footer from './Footer.svelte';
</script>

<div class="">
	<nav class="text-center justify-center flex-wrap m-auto flex">
		<a href="/">
			<h1 class="font-body text-5xl px-10 sm:py-2 py-10">
				<img src="/logo.webp" alt="logo" />
			</h1>
		</a>
		<NavLink path="/defer">Defer Capital Gains Tax</NavLink>
		<NavLink path="/1031">1031 Exchange Alternative</NavLink>
		<NavLink path="/defferred">Defferred Sales Trust Alternative</NavLink>
		<NavLink path="/contact">Contact</NavLink>
		<NavLink path="/more">More</NavLink>
	</nav>
</div>
<slot />
