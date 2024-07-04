<script lang="ts">
	import type { PageData } from './$types';
	import { onDestroy, onMount } from 'svelte';
	import { Clock, Language, LanguageSelector } from '$lib';

	export let interval: number;
	export let data: PageData;
	export let date = new Date();
	export let language: Language = Language.nl;

	onMount(() => {
		interval = setInterval(() => {
			date = new Date();
		}, 1000) as unknown as number;
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<Clock {date} config={data.config[language]} />
<LanguageSelector bind:language />
