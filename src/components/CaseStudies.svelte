<script>
	import '../styles/styles.css';
	import '../styles/tailwind-output.css';
	import Card from './Card.svelte';
</script>

<main
	class="rounded translate-y-20 flex-1 bg-gradient-to-r from-yellow-100 to-yellow-200 bg-yellow-200 z-30 shadow-lg drop-shadow-xl mr-8"
>
	<h1 class="font-body text-3xl pb-2 pt-5 text-center font-bold text-blue-900">Case Studies</h1>
	<Card
		title="Real Estate"
		linklist={[
			{ title: 'investment real estate', href: '/' },
			{ title: '1031 exchange alternative', href: '/' },
			{ title: '1031 exchange rescue', href: '/' },
			{ title: 'partnership split-Up', href: '/' },
			{ title: 'portfolio of small properties', href: '/' },
			{ title: 'primary residence', href: '/' }
		]}
	/>
	<Card
		title="Business"
		linklist={[
			{ title: 'service business', href: '/' },
			{ title: 'retail business', href: '/' },
			{ title: 'health care', href: '/' },
			{ title: 'manufacturing', href: '/' }
		]}
	/>
	<Card
		title="Other Asset Types"
		linklist={[
			{ title: 'intellectual property', href: '/' },
			{ title: 'collectibles', href: '/' }
		]}
	/>
</main>
