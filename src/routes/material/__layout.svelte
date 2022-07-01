<script lang="ts">
	import type { TopAppBarComponentDev } from '@smui/top-app-bar';
	import TopAppBar, { Row, Section, Title, AutoAdjust } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
	import Button, { Label } from '@smui/button';
	let topAppBar: TopAppBarComponentDev;
</script>

<svelte:head>
	<!-- Material Icons -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
	<!-- Roboto -->
	<!-- <link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700"
	/> -->
	<!-- Roboto Mono -->
	<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Mono" />
	<link rel="stylesheet" href="/smui.css" media="(prefers-color-scheme: light)" />
	<link rel="stylesheet" href="/smui-dark.css" media="screen and (prefers-color-scheme: dark)" />
</svelte:head>
<TopAppBar bind:this={topAppBar}>
	<Row>
		<Section>
			<IconButton class="material-icons">menu</IconButton>
			<Title>
				<Button href="https://sveltematerialui.com/" target="_blank" variant="unelevated">
					<Label>Material UI</Label>
				</Button>
			</Title>
		</Section>
		<Section align="end" toolbar>
			<IconButton class="material-icons" aria-label="Download">file_download</IconButton>
			<IconButton class="material-icons" aria-label="Print this page">print</IconButton>
			<IconButton class="material-icons" aria-label="Bookmark this page">bookmark</IconButton>
		</Section>
	</Row>
</TopAppBar>
<AutoAdjust {topAppBar}>
	<!-- <img
		alt="Page content placeholder"
		src=""
		style="display: block; max-width: 100%; height: auto; margin: 1em auto;"
	/> -->
</AutoAdjust>

<main>
	<slot />
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
		display: flex;
		flex: 1;
		justify-content: center;
		padding: 0 2rem;
	}
</style>
