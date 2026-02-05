<script lang="ts">
	import { EnglishConfig, DutchConfig, Language, type ClockConfig } from '$lib';
	import { Clock, LanguageSelector, Version } from '$lib/components';

	const config: ClockConfig = {
		en: new EnglishConfig(),
		nl: new DutchConfig()
	};

	let date = $state<Date>(new Date());
	let language = $state<Language>(Language.en);

	$effect(() => {
		const interval = setInterval(() => {
			date = new Date();
		}, 1000);

		return () => clearInterval(interval);
	});
</script>

<div class="flex flex-col items-center gap-1">
	<Clock {date} config={config[language]} {language} />
	<LanguageSelector bind:language />
	<Version />
</div>
