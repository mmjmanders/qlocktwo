<script lang="ts">
	import '@fontsource/allerta-stencil';
	import '@fontsource/kode-mono';
	import '@fortawesome/fontawesome-free/css/solid.css';
	import '../app.css';

	import allertaStencilWoff2 from '@fontsource/allerta-stencil/files/allerta-stencil-latin-400-normal.woff2?url';
	import kodeMonoWoff2 from '@fontsource/kode-mono/files/kode-mono-latin-400-normal.woff2?url';

	let { children } = $props();
</script>

<svelte:head>
	<link
		rel="preload"
		as="font"
		type="font/woff2"
		href={allertaStencilWoff2}
		crossorigin="anonymous"
	/>
	<link rel="preload" as="font" type="font/woff2" href={kodeMonoWoff2} crossorigin="anonymous" />
</svelte:head>

{@render children()}
