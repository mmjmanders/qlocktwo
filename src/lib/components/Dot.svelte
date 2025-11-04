<script lang="ts">
	let { isOn, index }: { isOn: boolean; index: number } = $props();
</script>

<div
	class="dot-{index} absolute font-['Font_Awesome_7_Free'] text-xs {isOn
		? 'opacity-100'
		: 'opacity-25'} text-zinc-950 dark:text-zinc-50"
>
	&#xf111;
</div>

<style>
	.dot-0 {
		left: 0;
		top: 0;
	}

	.dot-1 {
		right: 0;
		top: 0;
	}

	.dot-2 {
		right: 0;
		bottom: 0;
	}

	.dot-3 {
		left: 0;
		bottom: 0;
	}
</style>
