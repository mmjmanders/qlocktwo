<script lang="ts">
	import { Language } from '$lib';

	let { language = $bindable<Language>() }: { language: Language } = $props();
	const languages = $derived(Object.values(Language));
	const style: (lang: string) => string = (lang) => (lang === language ? 'on' : 'off');
</script>

<div class="flex gap-2">
	{#each languages as lang, i (lang)}
		<!-- svelte-ignore a11y_click_events_have_key_events,a11y_no_static_element_interactions -->
		<div
			class="language-selector cursor-pointer uppercase {style(lang)}"
			onclick={() => (language = Language[lang])}
		>
			{lang}
		</div>
		{#if i < languages.length - 1}
			<span>|</span>
		{/if}
	{/each}
</div>
