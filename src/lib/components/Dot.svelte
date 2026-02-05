<script lang="ts">
	let { index, date }: { index: number; date: Date } = $props();

	const isOn = $derived<boolean>(index < date.getMinutes() % 5);
	const style = $derived.by<string>(() => (isOn ? 'on' : 'off'));
</script>

<div class="dot-{index} absolute font-icon text-xxs/4 {style}">&#xf111;</div>
