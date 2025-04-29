<script lang="ts">
  // TODO: Handle icon size based on size prop
  import Icon from '@iconify/svelte';

  type ButtonType = 'button' | 'submit' | 'reset';
  type ButtonTheme = 'primary' | 'secondary' | 'tertiary';
  type ButtonSize = 'small' | 'medium' | 'large';

  interface Props {
    label: string;
    type?: ButtonType;
    theme?: ButtonTheme;
    size?: ButtonSize;
    icon?: string | null;
    iconOnly?: boolean;
    autofocus?: boolean | null;
    isLoading?: boolean;
    onclick?: () => void;
  }

  let {
    label,
    type = 'button',
    theme = 'primary',
    size = 'medium',
    icon = null,
    iconOnly = false,
    autofocus = null,
    isLoading = false,
    onclick,
  }: Props = $props();

  let themeClass = $derived(theme === 'primary' ? '' : theme);
  let sizeClass = $derived(`size-${size}`);

  // Set sizes of icons based on button size
  const iconSizeMap: Record<ButtonSize, number> = {
    small: 20,
    medium: 24,
    large: 24,
  };
  let iconSize = $derived(iconSizeMap[size] ?? 24);
</script>

<!-- svelte-ignore a11y_autofocus -->
<button
  {type}
  {autofocus}
  {onclick}
  class="{themeClass} {sizeClass}"
  aria-label={iconOnly ? label : undefined}
>
  {#if icon}
    {#if isLoading}
      <Icon icon="svg-spinners:180-ring-with-bg" width={iconSize} />
    {:else}
      <Icon {icon} width={iconSize} />
    {/if}
  {/if}
  {#if !iconOnly}
    {label}
  {/if}
</button>

<style>
  button {
    --tertiary-hover-bg: hsl(0deg 0% 0% / 0.07);
  }

  button {
    font: inherit;
    background-color: var(--primary-brand-color);
    color: var(--base-white);
    border: 1px solid transparent;
    justify-self: end;
    margin-block-start: 0;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5em;
    transition:
      background-color 250ms,
      filter 250ms;
  }

  button:hover {
    filter: brightness(1.1);
  }

  /* Themes */
  .secondary {
    color: var(--text-color);
    background-color: var(--base-white);
    border-color: currentColor;
  }

  .tertiary {
    color: var(--text-color);
    background-color: transparent;
    border-color: transparent;
    padding-inline: 0;
  }

  .tertiary:hover {
    background-color: var(--tertiary-hover-bg);
  }

  .danger {
    color: var(--base-white);
    background-color: var(--bg-color-danger);
    border-color: var(--bg-color-danger);
  }

  .header-primary {
    color: var(--primary-brand-color);
    background-color: var(--base-white);
  }

  /* Sizes */
  .size-small:not(.tertiary) {
    padding-block: 0.1em;
    padding-inline: 0.5em;
  }

  .size-medium:not(.tertiary) {
    padding-block: 0.5em;
    padding-inline: 1.25em;
  }
  .size-large:not(.tertiary) {
    padding-block: 0.75em;
    padding-inline: 2em;
  }
</style>
