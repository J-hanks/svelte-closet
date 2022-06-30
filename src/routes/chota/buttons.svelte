<script>
	import { Input, Button, Tag } from 'svelte-chota';
	import {
		mdiDelete,
		mdiAccountPlus,
		mdiSend,
		mdiWhiteBalanceSunny,
		mdiChevronDown
	} from '@mdi/js';
	let dropdown_is_open = false;
</script>

<div>
	<h1>Buttons</h1>
	<h3>Default Buttons</h3>
	<Button>Default</Button>
	<Button style="margin: 0.5rem 0" primary>Primary</Button>
	<Button style="margin: 0.5rem 0" secondary>Secondary</Button>
	<Button style="margin: 0.5rem 0" dark>Dark</Button>
	<Button style="margin: 0.5rem 0" error>Error</Button>
	<Button style="margin: 0.5rem 0" success>Success</Button>
	<hr />

	<h3>Outline Buttons</h3>
	<Button style="margin: 0.5rem 0" outline>Default</Button>
	<Button style="margin: 0.5rem 0" primary outline>Primary</Button>
	<Button style="margin: 0.5rem 0" secondary outline>Secondary</Button>
	<Button style="margin: 0.5rem 0" dark outline>Dark</Button>
	<Button style="margin: 0.5rem 0" clear>Clear</Button>
	<hr />

	<h3>Icon buttons</h3>
	<Button style="margin: 0.5rem 0" primary icon={mdiAccountPlus}>Add User</Button>
	<Button style="margin: 0.5rem 0" outline primary iconRight={mdiSend}>Submit</Button>
	<Button style="margin: 0.5rem 0" error icon={mdiDelete} />
	<hr />

	<h3>States</h3>
	<Button style="margin: 0.5rem 0" loading>Loading</Button>
	<Button style="margin: 0.5rem 0" loading error>Loading</Button>
	<Button style="margin: 0.5rem 0" disabled>Disabled</Button>
	<Button style="margin: 0.5rem 0" primary disabled>Disabled</Button>
	<hr />

	<h3>Dropdown button</h3>
	<Button style="margin: 0.5rem 0" dropdown="Brightness" outline icon={mdiWhiteBalanceSunny}>
		<Input range min="1" max="100" step="10" />
	</Button>
	<Button
		style="margin: 0.5rem 0"
		dropdown="Autoclose"
		autoclose
		outline
		iconRight={mdiChevronDown}
	>
		<p><a href="/">Edit</a></p>
		<p><a href="/">Alerts&nbsp;<Tag>3</Tag></a></p>
		<hr />
		<p><a href="/" class="text-error">Logout</a></p>
	</Button>
	<Button style="margin: 0.5rem 0" dropdown="Reactive" bind:open={dropdown_is_open} outline>
		<p><input placeholder="username" /></p>
		<p><input placeholder="password" type="password" /></p>
		<p>
			<Button style="margin: 0.5rem 0" clear>Sign up</Button>
			<Button style="margin: 0.5rem 0" primary>Sign in</Button>
		</p>
	</Button>
</div>

<style>
	h3 {
		margin-top: 2rem;
		margin-bottom: 0.5rem;
	}
	div {
		padding: 0 1.5rem;
	}
</style>
