<script lang="ts">
	import { type Config, Language } from '$lib';
	import Dot from './Dot.svelte';
	import Letter from './Letter.svelte';

	const { date, config, language }: { date: Date; config: Config; language: Language } = $props();
	const letters = $derived(config.clock.split(''));
	const dots = $state(Array(4));
</script>

<div class="relative flex h-[95vmin] w-[95vmin] items-center justify-center">
	<div class="grid h-9/10 w-9/10 grid-cols-[repeat(11,_1fr)] grid-rows-[repeat(10,_1fr)]">
		{#each letters as letter, i (i)}
			<Letter
				{letter}
				{language}
				index={i}
				isOn={config.isHourOn(i, date.getHours(), date.getMinutes()) ||
					config.isMinuteOn(i, date.getMinutes())}
			/>
		{/each}
	</div>
	{#each dots as _, i (i)}
		<Dot index={i} isOn={i < date.getMinutes() % 5} />
	{/each}
</div>
