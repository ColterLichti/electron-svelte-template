import { wrap } from 'svelte-spa-router/wrap';
// Only import pages here that need to be loaded right away
// This will help keep initial bundle size small and reloads fast
import Home from './pages/Home.svelte';

// Configure SPA routes here
export default {
    '/': Home,

    // The "Other" page is not loaded until the user navigates to it
    '/other': wrap({
        asyncComponent: () => import('./pages/Other.svelte')
    })
}