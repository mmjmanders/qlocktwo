<script lang="ts">
	import { PUBLIC_BUILD_SHA as buildSha } from '$env/static/public';
</script>

<div
	class="flex w-full justify-center font-[Kode_Mono_Variable] text-xs text-zinc-950 dark:text-zinc-50"
>
	{buildSha}
</div>
