<script lang="ts">
	let available_ui_libraries = [
		{ value: 'carbon', label: 'Carbon Design System' },
		{ value: 'material', label: 'Material UI' },
		{ value: 'daisy', label: 'Daisy UI' },
	];
	let selected_ui_libraries = ['carbon'];
</script>

<header style="">
	<h1>Svelte Closet</h1>
	{#each available_ui_libraries as ui_library (ui_library.value)}
		<label
			class="ui_option_label {selected_ui_libraries.includes(ui_library.value) ? 'selected' : ''}"
		>
			<input type="checkbox" bind:group={selected_ui_libraries} value={ui_library.value} />
			{ui_library.label}
		</label>
	{/each}
</header>
<main>
	{#each selected_ui_libraries as ui_library (ui_library)}
		<div name={ui_library} class="iframe_container flex-1">
			<iframe class="ui_iframe" title="UI_IFRAME" src="/{ui_library}">
				<slot />
			</iframe>
		</div>
	{/each}
</main>

<style>
	:global(html, body) {
		height: 100%;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		padding: 0;
		margin: 0;
	}
	main {
		flex: 1;
		display: flex;
		flex-direction: row;
	}
	.ui_iframe {
		width: 100%;
		height: 100%;
	}
	.iframe_container {
		width: 100%;
		height: 100%;
		transition: all 2s;
	}
	h1 {
		padding: 0;
		color: bisque;
        margin:  1rem 0.7rem 1.5rem  ;
	}
	header {
		text-align: center;
		font-size: larger;
		background-image: url('/closet.jpg');
		background-position: center;
		background-size: 70%;
		padding-top: 0.6rem;
		padding-bottom: 1rem;
	}
	.ui_option_label {
		color: white;
		font-weight: bold;
		font-size: large;
		background: rgba(0, 0, 0, 0.5);
		padding: 0.6rem;
		margin: 5rem 0.3rem;
		border-radius: 5px;
	}
	.ui_option_label.selected {
		background: rgba(13, 94, 21, 0.8);
	}
	.ui_option_label > input {
	
		display: none;
	}
</style>
