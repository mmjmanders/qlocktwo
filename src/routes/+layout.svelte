<script lang="ts">
	import '@fontsource/allerta-stencil';
	import '@fontsource/kode-mono';
	import '@fortawesome/fontawesome-free/css/solid.css';
	import '../app.css';
	import { pwaInfo } from 'virtual:pwa-info';
	import favicon from '$lib/assets/favicon.svg';
	import appleTouchIcon from '$lib/assets/apple-touch-icon.png';

	let { children } = $props();
	const manifest = $derived(pwaInfo?.webManifest);
	const registerSW = $derived(pwaInfo?.registerSW);
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href={favicon} />
	<link rel="apple-touch-icon" type="image/png" href={appleTouchIcon} />
	{#if manifest}
		{@html manifest.linkTag}
	{/if}
	{#if registerSW}
		{@html registerSW.scriptTag}
	{/if}
</svelte:head>

<main>
	{@render children()}
</main>
