<script lang="ts">
	import type { Language } from '$lib/types';

	let {
		letter,
		isOn,
		language,
		index
	}: { letter: string; isOn: boolean; language: Language; index: number } = $props();
</script>

<div
	class="relative flex items-center justify-center text-2xl uppercase index-{index} {language} {isOn
		? 'opacity-100'
		: 'opacity-15'} {isOn ? 'text-shadow-xs text-shadow-zinc-50' : ''}"
>
	{letter}
</div>

<style>
	.en.index-104::after {
		display: block;
		position: absolute;
		right: 10%;
		content: "'";
	}
</style>
