<script>
	import 'carbon-components-svelte/css/all.css';
	import {
		Header,
		HeaderNav,
		HeaderNavItem,
		HeaderNavMenu,
		SideNav,
		SideNavItems,
		SideNavMenu,
		SideNavMenuItem,
		SideNavLink,
		SideNavDivider,
		SkipToContent,
		Content,
		Grid,
		Row,
		Column
	} from 'carbon-components-svelte';
	import { carbon_components } from '$src/stores/main_store';

	let isSideNavOpen = false;
</script>

<Header href="/carbon" target="_top" company="IBM" platformName="Carbon" bind:isSideNavOpen>
	<svelte:fragment slot="skip-to-content">
		<SkipToContent />
	</svelte:fragment>
	<HeaderNav>
		<HeaderNavItem href="/" target="_top" text="Svelte Closet" />
		<HeaderNavMenu text="UI Libraries">
			<HeaderNavItem href="/" text="Link 1" />
			<HeaderNavItem href="/" text="Link 2" />
			<HeaderNavItem href="/" text="Link 3" />
		</HeaderNavMenu>
		<HeaderNavItem href="/" text="Link 4" />
	</HeaderNav>
</Header>

<SideNav bind:isOpen={isSideNavOpen}>
	<SideNavItems>
		<SideNavMenu text="Components">
			{#each carbon_components as carbon_component}
				<SideNavMenuItem href="./{carbon_component}" target="_top" text={carbon_component} />
			{/each}
		</SideNavMenu>
	</SideNavItems>
</SideNav>

<Content class="flex-1">
	<slot />
</Content>

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
