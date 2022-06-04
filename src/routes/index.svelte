<script>
	import '../styles/styles.css';
	import '../styles/tailwind-output.css';
	import CaseStudies from '../components/CaseStudies.svelte';
	import TopBanner from '../components/TopBanner.svelte';
	import SecondBanner from '../components/SecondBanner.svelte';
	import LearnMoreSection from '../components/LearnMoreSection.svelte';
</script>

<main class="bg-yellow-50">
	<TopBanner>
		<p class="">Defer your capital gains tax (for 30 years)</p>
		<p class="">and keep your cash when you sell</p>
	</TopBanner>
	<SecondBanner />
	<div class="max-w-screen-xl m-auto">
		<div class="flex justify-around pb-36">
			<LearnMoreSection />
			<CaseStudies />
		</div>
	</div>
</main>
