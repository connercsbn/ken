<script>
	import Header from '../components/Header.svelte';
	import Body from '../components/Body.svelte';
	import Footer from '../components/Footer.svelte';
	import '../app.css';
	import '../styles/styles.css';
	import '../styles/tailwind-output.css';
	let x;
</script>

<svelte:window bind:innerWidth={x} />
<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Andada+Pro:wght@400;500&family=PT+Serif:wght@400;700&family=Raleway:wght@400;500;600;700;800&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

{#if x > 1100 || x == undefined}
	<Header />
	<Body>
		<slot />
	</Body>
	<Footer />
{:else}
	<h1>Design for current size not yet implemented</h1>
{/if}
