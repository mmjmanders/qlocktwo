<script lang="ts">
	import '@fontsource/allerta-stencil';
	import '@fontsource/kode-mono';
	import '@fortawesome/fontawesome-free/css/solid.css';
	import '../app.css';

	import allertaStencilWoff2 from '@fontsource/allerta-stencil/files/allerta-stencil-latin-400-normal.woff2?url';
	import kodeMonoWoff2 from '@fontsource/kode-mono/files/kode-mono-latin-400-normal.woff2?url';

	import { pwaInfo } from 'virtual:pwa-info';

	let { children } = $props();
	const webManifestHref = $derived(pwaInfo?.webManifest?.href || undefined);
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
	{#if webManifestHref}
		<link rel="manifest" href={webManifestHref} />
	{/if}
</svelte:head>

{@render children()}
