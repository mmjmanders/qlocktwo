<script lang="ts">
	import '@fontsource/allerta-stencil';
	import '@fontsource/kode-mono';
	import '@fortawesome/fontawesome-free/css/solid.css';
	import '../app.css';
	import { pwaInfo } from 'virtual:pwa-info';

	let { children } = $props();
	const manifest = $derived(pwaInfo?.webManifest);
	const registerSW = $derived(pwaInfo?.registerSW);
</script>

<svelte:head>
	{#if manifest}
		{@html manifest.linkTag}
	{/if}
	{#if registerSW}
		{@html registerSW.scriptTag}
	{/if}
</svelte:head>

{@render children()}
