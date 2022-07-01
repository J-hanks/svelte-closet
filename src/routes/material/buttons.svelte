<script type="ts">
	import Button, { Label, Icon } from '@smui/button';
	import type { MenuComponentDev } from '@smui/menu';

	let clicked = 0;
	let menu: MenuComponentDev;
	let menu2: MenuComponentDev;

    let button_margin_bottom = ".8rem"
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
<div class="buttons-container">
	<h1>Buttons</h1>
	https://sveltematerialui.com/demo/button/

	<h3 class="">Default Buttons</h3>
	<Button style="margin-bottom: {button_margin_bottom};" variant="raised">
		<Label>Raised</Label>
	</Button>
	<Button style="margin-bottom: {button_margin_bottom};" variant="unelevated">
		<Label>Unelevated</Label>
	</Button>
	<Button style="margin-bottom: {button_margin_bottom};" color="secondary" variant="raised">
		<Label>Raised</Label>
	</Button>
	<Button style="margin-bottom: {button_margin_bottom};" color="secondary" variant="unelevated">
		<Label>Unelevated</Label>
	</Button>
	<hr />

	<h3 class="">Outline Buttons</h3>
	<Button style="margin-bottom: {button_margin_bottom};" variant="outlined">
		<Label>Outlined</Label>
	</Button>
	<Button style="margin-bottom: {button_margin_bottom};" color="secondary" variant="outlined">
		<Label>Outlined</Label>
	</Button>
	<hr />

	<h3 class="">Icon buttons</h3>

	<Button style="margin-bottom: {button_margin_bottom};" variant="raised" >
		<Icon class="material-icons">favorite</Icon>
		<Label>Leading Icon</Label>
	</Button>
	<Button style="margin-bottom: {button_margin_bottom};" >
		<Label>Trailing Icon</Label>
		<Icon class="material-icons">favorite</Icon>
	</Button>
	<Button style="margin-bottom: {button_margin_bottom};" color="secondary" variant="outlined">
		<Icon class="material-icons">favorite</Icon>
		<Label>Leading Icon</Label>
	</Button>
	<Button style="margin-bottom: {button_margin_bottom};" color="secondary" >
		<Label>Trailing Icon</Label>
		<Icon class="material-icons">favorite</Icon>
	</Button>
	<hr />

	<h3 class="">States</h3>
	<Button style="margin-bottom: {button_margin_bottom};" disabled>
		<Label>Disabled</Label>
	</Button>
	<hr />

	<h3 class="">Dropdown button</h3>
</div>

<style>
	.buttons-container {
		margin-top: 30px;
	}
	hr {
		margin-top: 0.5rem;
	}
</style>
