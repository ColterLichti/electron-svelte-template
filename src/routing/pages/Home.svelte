<script>
    import { link } from "svelte-spa-router";
    import { fade } from "svelte/transition";
</script>

<main in:fade={{ duration: 500 }}>
    <h1>Electron & <span>Svelte</span> Template!</h1>
    <p>Get started fast with Electron and Svelte ⚡</p>
    <!-- Make sure to use:link if you are linking to a route -->
    <!-- Omit use:link to link to a regular url -->
    <a href="/other" use:link>Go to the "Other" page</a>
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

            span {
                color: #ff3e00;
            }
        }
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
