<script>
    import { page } from '$app/stores';
	import ErrorIcon from '$lib/illustrations/ErrorIcon.svelte';
</script>
  

<div class="w-full h-full flex flex-col items-center justify-center gap-2">
    <div class="w-[240px]">
        <ErrorIcon />
    </div>
    <p class="text-xl font-sans font-bold">
        Something Went Wrong
    </p>
    <p class="text-xl font-serif opacity-75">{$page.error.message}</p>
</div>