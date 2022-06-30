<script>
	import '$src/daisyUI.css';
    import { daisy_categorized_components } from '$src/stores/main_store';
	import MenuItems from './lib/MenuItems.svelte';
</script>

<div class="navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<label tabindex="0" class="btn btn-ghost lg:hidden">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</label>
			<ul
				tabindex="0"
				class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
			>
			<MenuItems/>
        </ul>
		</div>
		<a class="btn btn-ghost normal-case text-xl">daisyUI</a>
	</div>
	<div class="navbar-center hidden lg:flex">
		<ul class="menu menu-horizontal p-0">
			<MenuItems/>
		</ul>
	</div>
	<div class="navbar-end">
		<a class="btn">Get started</a>
	</div>
</div>

<div class="daisy-content flex-1 bg-base-300" >
    <slot />
</div>

<style>
	:global(html, body) {
		height: 100%;
		display: flex;
		flex-direction: column;
		flex-wrap: nowrap;
		padding: 0;
		margin: 0;
	}
</style>
