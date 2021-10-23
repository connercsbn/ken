<script>
	import NavLink from '../components/NavLink.svelte';
	import '../styles/styles.css';
	import '../styles/tailwind-output.css';

	let y;
</script>

<div class="">
	<nav class="text-center flex-wrap m-auto flex items-end max-w-screen-xl">
		<a
			class="nav-link sm:nav-link-desktop hover:bg-transparent rounded-none hover:rounded-none"
			href="/"
		>
			<h1 class="font-body text-5xl px-10 py-10 sm:py-0 ">
				<img src="/logo.webp" alt="logo" />
			</h1>
		</a>
		<NavLink path="/defer-capital-gains-tax">Defer Capital Gains Tax</NavLink>
		<NavLink path="/1031-exchange-alternatives">1031 Exchange Alternative</NavLink>
		<NavLink path="/deferred-sales-trust-alternatives">Deferred Sales Trust Alternative</NavLink>
		<NavLink path="/contact">Contact</NavLink>
		<NavLink path="/more">More</NavLink>
	</nav>
</div>
<slot />
