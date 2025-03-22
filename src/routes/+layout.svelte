<script lang="ts">
  import { siteTitle } from '$lib/config';
  import type { Snippet } from 'svelte';

  import '../styles/main.css';

  import Navigation from '$lib/components/Navigation.svelte';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<svelte:head>
  <title>{siteTitle}</title>
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
</svelte:head>

<header>
  <h1>My JSONPlaceholder client</h1>
  <Navigation />
</header>

<main>
  {@render children?.()}
</main>

<style>
  header,
  main {
    padding: 1rem;
  }
</style>
