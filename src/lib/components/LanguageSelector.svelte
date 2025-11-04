<script lang="ts">
	import { Language } from '$lib';

	let { language = $bindable<Language>() }: { language: Language } = $props();
	const languages = $derived(Object.values(Language));
</script>

<div class="flex gap-2 font-[Allerta_Stencil] text-zinc-950 dark:text-zinc-50">
	{#each languages as lang, i}
		<!-- svelte-ignore a11y_click_events_have_key_events,a11y_no_static_element_interactions -->
		<div
			class="cursor-pointer uppercase {language === lang
				? 'opacity-100'
				: 'opacity-25'} {language === lang
				? 'text-shadow-xs text-shadow-zinc-950 dark:text-shadow-zinc-50'
				: ''}"
			onclick={() => (language = Language[lang])}
		>
			{lang}
		</div>
		{#if i < languages.length - 1}
			<span>|</span>
		{/if}
	{/each}
</div>
