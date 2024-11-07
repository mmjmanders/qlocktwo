<script lang="ts">
	import type { PageData } from './$types';
	import { onDestroy, onMount } from 'svelte';
	import { Clock, Language, LanguageSelector } from '$lib';

	interface Props {
		interval: number;
		data: PageData;
		date?: Date;
		language?: Language;
	}

	let {
		interval = $bindable(),
		data,
		date = $bindable(new Date()),
		language = $bindable(Language.en)
	}: Props = $props();

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
