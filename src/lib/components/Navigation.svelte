<script lang="ts">
  import { page } from '$app/state';
  import Icon from '@iconify/svelte';

  interface NavItem {
    id: number;
    url: string;
    title: string;
    icon: string;
  }

  let navItems: Array<NavItem> = [
    { id: 1, title: 'Home', url: '/', icon: 'material-symbols-light:garage-home-rounded' },
    { id: 2, title: 'TODOs', url: '/todos', icon: 'material-symbols-light:fact-check-rounded' },
    { id: 3, title: 'Posts', url: '/posts', icon: 'material-symbols-light:article-rounded' },
    { id: 4, title: 'Users', url: '/users', icon: 'material-symbols-light:user-attributes' },
  ];
</script>

<nav aria-label="Main navigation">
  <ul class="nav-items">
    {#each navItems as { id, url, title, icon } (id)}
      <li>
        <a href={url} aria-current={page.url.pathname === url ? 'page' : undefined}>
          <Icon {icon} width={28} />
          {title}
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  .nav-items {
    display: flex;
    gap: 1.5rem;
  }

  li {
    margin-block-start: 0;
  }

  a {
    --hsl: 0deg 0% 100%;

    display: flex;
    align-items: center;
    gap: 0.2rem;

    text-decoration: none;
    color: var(--text-color-inverse);
    background-color: var(--bg-color-inverse);
    padding-block: 0;
    padding-inline: 0.75rem;
    border-radius: 0.5rem;
    transition: transform ease-in-out 200ms;

    &[aria-current='page'] {
      transform: scale(1.2);
    }
  }
</style>
