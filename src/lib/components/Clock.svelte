<script lang="ts">
	import { type Config, Language } from '$lib';
	import Dot from './Dot.svelte';
	import Letter from './Letter.svelte';
	import { PUBLIC_BUILD_SHA as buildSha } from '$env/static/public';

	let { date, config, language }: { date: Date; config: Config; language: Language } = $props();
	const letters = $derived(config.clock.split(''));
	const dots = $state(Array(4));
</script>

<div class="relative m-2 flex h-[100vmin] w-[100vmin] items-center justify-center">
	<div class="grid h-9/10 w-9/10 grid-cols-[repeat(11,_1fr)] grid-rows-[repeat(10,_1fr)]">
		{#each letters as letter, i}
			<Letter
				{letter}
				{language}
				index={i}
				isOn={config.isHourOn(i, date.getHours(), date.getMinutes()) ||
					config.isMinuteOn(i, date.getMinutes())}
			/>
		{/each}
	</div>
	{#each dots as _, i}
		<Dot index={i} isOn={i < date.getMinutes() % 5} />
	{/each}
	<div
		class="absolute bottom-0 flex w-full justify-center font-[Kode_Mono_Variable] text-base text-xs text-zinc-950 dark:text-zinc-50"
	>
		{buildSha}
	</div>
</div>
