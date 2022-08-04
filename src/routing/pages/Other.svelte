<script>
    import { link } from "svelte-spa-router";
    import { fade } from "svelte/transition";
</script>

<main in:fade={{ duration: 500 }}>
    <h1>Other Page</h1>
    <p>The router is working!</p>
    <!-- Make sure to use:link if you are linking to a route -->
    <!-- Omit use:link to link to a regular url -->
    <a href="/" use:link>To the Home page</a>
</main>

<style lang="scss" scoped>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;

        h1 {
            color: #2b2e3b;
            text-transform: uppercase;
            font-size: 4em;
            font-weight: 100;
            margin: 35px 0;
        }
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
