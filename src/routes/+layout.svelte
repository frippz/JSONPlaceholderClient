<script lang="ts">
  import { siteTitle } from '$lib/config';
  import type { Snippet } from 'svelte';

  import '../styles/main.css';

  import Navigation from '$lib/components/Navigation.svelte';
  import Dev from '$lib/components/Dev.svelte';

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<svelte:head>
  <title>{siteTitle}</title>
</svelte:head>

<header>
  <h1>My JSONPlaceholder client</h1>
  <Navigation />
</header>

<main>
  {@render children?.()}
</main>

<footer>
  <Dev />
</footer>

<style>
  :global(body) {
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
  }

  header,
  main,
  footer {
    padding: 1rem;
  }

  footer {
    margin-block-start: auto;
  }
</style>
