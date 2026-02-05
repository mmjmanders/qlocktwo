<script lang="ts">
	import { Config, type Language } from '$lib/types';

	let {
		letter,
		config,
		date,
		language,
		index
	}: { letter: string; config: Config; date: Date; language: Language; index: number } = $props();

	const style = $derived.by<string>(() =>
		config.isHourOn(index, date.getHours(), date.getMinutes()) ||
		config.isMinuteOn(index, date.getMinutes())
			? 'on'
			: 'off'
	);
</script>

<div
	class="relative flex items-center justify-center text-2xl uppercase index-{index} {language} {style}"
>
	{letter}
</div>
