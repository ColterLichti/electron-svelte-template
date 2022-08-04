<script>
	import Router from "svelte-spa-router";
	import routes from "./routing/router.config.js";
</script>

<main>
	<Router {routes} />
</main>

<!-- Make sure the App components imports the global stylesheet -->
<!-- Scope should also be set to global -->
<style lang="scss" global>
	@import "./theme/global.scss";
	// Do not put styles here
	// Styles that apply to this App component should be placed in global.scss
</style>
