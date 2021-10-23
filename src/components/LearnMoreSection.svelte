<script>
	import '../styles/styles.css';
	import '../styles/tailwind-output.css';
	import CardLink from './CardLink.svelte';
	import NavLink from './NavLink.svelte';
	import Fa from 'svelte-fa/src/fa.svelte';
	import { faPhone } from '@fortawesome/free-solid-svg-icons';
</script>

<main
	class="relative rounded-2xl flex flex-1 ml-8 flex-col bg-white pl-10 pr-48 -mr-36 z-0 pt-9 translate-y-10"
>
	<!-- video container -->
	<div class="w-11/12 mx-auto my-7">
		<div class="vid-container">
			<!-- video -->
			<iframe
				class="iframe h-1/2"
				width="560"
				height="315"
				title="2 Wet Crew: Anderson"
				src="https://player.vimeo.com/video/131829841?h=e4161c5172"
				frameborder="0"
				allow="autoplay; fullscreen; picture-in-picture"
				allowfullscreen
			/>
		</div>
		<p class="font-body font-bold mt-9">
			Watch this quick 2-minute video to learn how you can defer your capital gains taxes for 30
			years with a Tax-Deferred Cash Out
		</p>
		<div class="flex flex-col mx-auto py-3 transition-all after:transition-all group">
			<h1
				class="mt-5 font-bold font-body text-xl py-1 capitalize relative after:redbar group-hover:after:redbar-darker transition-all"
			>
				Learn More
			</h1>
			<div class="flex items-center justify-items-center mt-1">
				<Fa icon={faPhone} size="2x" primaryColor="black" flip="horizontal" class="pr-3" />
				<a
					class="py-1 my-2 font-body capitalize text-sm font-bold underline text-blue-600 hover:text-blue-900 hover:rounded transition-none duration-200"
					href="/">Contact us to discuss your situation</a
				>
			</div>
		</div>
	</div>
</main>

<slot />

<style>
	/* automatic sizing stuff */
	.vid-container {
		position: relative;
		padding-bottom: 56.25%; /* 16:9 */
		height: 0;
	}
	.vid-container iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
</style>
