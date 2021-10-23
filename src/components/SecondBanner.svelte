<script>
	import '../styles/styles.css';
	import '../styles/tailwind-output.css';
	let y = 0;
	$: translateDown = (200 - y) / 15;
</script>

<svelte:window bind:scrollY={y} />

<!-- blue background / content container -->
<div style="--varTop: {translateDown}px" class="bg-blue-900 overflow-hidden">
	<!-- content -->
	<div
		class="max-w-6xl relative m-auto flex justify-evenly items-center font-body text-lg h-72 bg-blue-900 text-white"
	>
		<!-- text -->
		<div class="max-w-xl h-full flex font-semibold flex-col justify-evenly text-yellow-50">
			<p class="flex">
				Are you facing a large capital gains tax bill on the sale of your real estate, your
				business, or other highly appreciated asset?
			</p>
			<p class="flex">
				Now you can defer your tax – for 30 years – and exit with cash equivalent to 93.5% of your
				net sales proceeds, up front, that you can invest any way you wish.
			</p>
		</div>
		<!-- image -->
		<img
			class="max-h-96 object-contain"
			style="transform: translate(0, var(--varTop));"
			src="/30.webp"
			alt="logo"
		/>
	</div>
</div>
