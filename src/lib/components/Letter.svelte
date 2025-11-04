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
	class="relative flex items-center justify-center font-[Allerta_Stencil] text-2xl text-zinc-950 uppercase dark:text-zinc-50 index-{index} {language} {isOn
		? 'opacity-100'
		: 'opacity-25'}"
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
