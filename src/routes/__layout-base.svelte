<script lang="ts">
</script>

<header>
    <h1>
        Svelte Closet
    </h1>
    <a href="/carbon" sveltekit:prefetch>Carbon Design Systen</a>
</header>

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
    h1 {
        padding: 1rem 0;
    }
    header {
        text-align: center;
    }
</style>
