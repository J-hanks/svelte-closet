<script lang="ts">
</script>

<header>
    <h1>
        Svelte Closet
    </h1>
    <a href="/carbon" sveltekit:prefetch>Carbon Design Systen</a>
</header>

<main>
    <iframe src="/carbon">
	    <!-- <slot /> -->
    </iframe>
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
        display: flex;
    }
    iframe {
        width: 100%;
        margin-top: 0.7rem;
    }
    footer {
        display: flex;
        justify-content: center;
    }
    h1 {
        padding: 1rem 0 0.5rem 0;
    }
    header {
        text-align: center;
        font-size: large;
    }
    
</style>
