<script lang="ts">
</script>


<main>
	<slot />
</main>

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

<style>
	:global(html, body){
        height: 100%;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }
    main {
        flex: 1;
    }
    footer {
        display: flex;
        justify-content: center;
    }
</style>
