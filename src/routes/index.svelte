<script lang="ts">
	let labels_container;
	let available_ui_libraries = [
		{ value: 'carbon', label: 'Carbon' },
		{ value: 'material', label: 'Material' },
		{ value: 'daisy', label: 'Daisy' }
	];
	let selected_ui_libraries = available_ui_libraries.map((value: Object) => {
        return value.value
    });
	let last_selected = 'carbon';
	$: {
		if (selected_ui_libraries.length == 0) {
			selected_ui_libraries = [last_selected];
		}
	}
	let on_select = (e) => {
		last_selected = e.target.value;
	};
</script>

<header style="">
	<h1>Svelte Closet</h1>
	<div class="labels_container flex  flex-row ">
		{#each available_ui_libraries as ui_library (ui_library.value)}
			<label
				class="ui_option_label {selected_ui_libraries.includes(ui_library.value) ? 'selected' : ''}"
			>
				<input
					type="checkbox"
					on:click={on_select}
					bind:group={selected_ui_libraries}
					value={ui_library.value}
				/>
				{ui_library.label}
			</label>
		{/each}
	</div>
</header>
<main>
	{#each selected_ui_libraries as ui_library, i (ui_library)}
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
		max-width: 100%;

	}
	.ui_iframe {
		width: 100%;
		height: 100%;
	}
	.iframe_container {
		width: 100%;
		max-width: 100%;
        overflow: hidden;
		height: 100%;
	}
	h1 {
		padding: 0;
		color: rgb(90, 17, 100);
		margin: 1rem auto;
		background-color: rgba(255, 255, 255, 0.9);
		border-radius: 5px;
		padding: 0.4rem 0.8rem;
        font-family:  'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

	}
	header {
		text-align: center;
		font-size: larger;
		background-image: url('/closet.jpg');
		background-position: center;
		background-size: 70%;
		padding-top: 1rem;
		padding-bottom: 1rem;
		display: flex;
		flex-direction: column;
        margin: 0;
	}
	.ui_option_label {
		color: white;
		font-weight: bold;
		font-size: large;
		background: rgba(3, 4, 65, 0.8);
		padding: 0.6rem;
		margin: 0rem 0.6rem;
		border-radius: 5px;
		border: 1px solid rgb(3, 4, 65);
		box-shadow: 3px 2px 5px rgba(3, 4, 65, 0.8);
		transition: all 300ms ease-in;
		display: inline-block;
        font-family: 'Courier New', Courier, monospace;
	}
	.labels_container {
		margin: 0.5rem 0.6rem 1rem;
	}
	.ui_option_label.selected {
		background: rgba(13, 94, 21, 0.8);
		box-shadow: 3px 2px 5px green;
		border-color: green;
	}
	.ui_option_label > input {
		display: none;
	}
</style>
