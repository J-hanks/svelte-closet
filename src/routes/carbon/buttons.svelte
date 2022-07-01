<script>
	import { Button, Link } from 'carbon-components-svelte';
	import Add from 'carbon-icons-svelte/lib/Add.svelte';
	import TrashCan from 'carbon-icons-svelte/lib/TrashCan.svelte';
	import Pedestrian from 'carbon-icons-svelte/lib/Pedestrian.svelte';
	import Document from 'carbon-icons-svelte/lib/Document.svelte';
</script>

<div class="content-container">
	<div>
		<h1>
			Buttons
			<Button
				target="_blank"
				href="https://carbon-components-svelte.onrender.com/components/Button"
				style="margin: 0.5rem 0"
				kind="ghost"
				icon={Document}
				iconDescription="Go to documentation"
			/>
		</h1>

		<h3>Default Buttons</h3>
		<Button style="margin: 0.5rem 0">Primary button</Button>
		<Button style="margin: 0.5rem 0" kind="secondary">Secondary button</Button>
		<Button style="margin: 0.5rem 0" kind="danger">Danger button</Button>
		<hr />

		<h3>Outline Buttons</h3>
		<Button style="margin: 0.5rem 0" kind="tertiary">Tertiary button</Button>
		<Button style="margin: 0.5rem 0" kind="ghost">Ghost button</Button>
		<Button style="margin: 0.5rem 0" kind="danger-tertiary">Danger tertiary button</Button>
		<hr />

		<h3>Icon buttons</h3>
		<Button icon={Add}>With text</Button>
		<Button iconDescription="Only Icon" kind="secondary" icon={Pedestrian} />
		<Button iconDescription="Only Icon Danger" kind="danger" icon={TrashCan} />

		<hr />
		<h3>States</h3>
		<Button style="margin-bottom: 0.5rem " disabled>Disabled button</Button>
		<Button skeleton />
		<hr />
		<h3>Dropdown button</h3>
	</div>
</div>

<style>
	div.content-container {
		display: flex;
		width: 100%;
		height: 100%;
		justify-content: center;
	}
	h3 {
		margin-top: 2rem;
		margin-bottom: 0.5rem;
	}
    hr {
        margin-top: .7rem;
    }

</style>
