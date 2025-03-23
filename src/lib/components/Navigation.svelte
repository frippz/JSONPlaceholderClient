<script lang="ts">
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
  ];
</script>

<nav aria-label="Main navigation">
  <ul class="nav-items">
    {#each navItems as { id, url, title, icon } (id)}
      <li><a href={url}><Icon {icon} width={28} />{title}</a></li>
    {/each}
  </ul>
</nav>

<style>
  .nav-items {
    display: flex;
    gap: 1rem;
  }

  li {
    margin-block-start: 0;
  }

  a {
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }
</style>
