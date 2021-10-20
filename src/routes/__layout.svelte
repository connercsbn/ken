<script>
	import Header from '../components/Header.svelte';
	import Body from '../components/Body.svelte';
	import Footer from '../components/Footer.svelte';
	import '../app.css';
	import '../styles/styles.css';
	import '../styles/tailwind-output.css';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" />
	<link
		href="https://fonts.googleapis.com/css2?family=Andada+Pro:wght@400;500&family=PT+Serif:wght@400;700&family=Raleway&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Header />
<Body>
	<slot />
</Body>
<Footer />
