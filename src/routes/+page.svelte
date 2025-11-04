<script lang="ts">
	import { EnglishConfig, DutchConfig, Language, type ClockConfig } from '$lib';
	import { Clock, LanguageSelector } from '$lib/components';
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

<Clock {date} config={config[language]} {language} />
<LanguageSelector bind:language />
