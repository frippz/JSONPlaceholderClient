<script lang="ts">
  interface Props {
    label: string;
    type?: 'text' | 'email' | 'password' | 'search' | 'url' | 'date';
    inputmode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
    value: string | null | undefined;
    required?: boolean;
    readonly?: boolean;
    hiddenLabel?: boolean;
    onkeydown?: (e: KeyboardEvent) => void;
    [key: string]: unknown;
  }

  let {
    label,
    type = 'text',
    inputmode = 'text',
    value = $bindable(),
    required = false,
    readonly = false,
    hiddenLabel = false,
    onkeydown,
    ...rest
  }: Props = $props();
</script>

<label>
  <span class:at-only={hiddenLabel}>
    {label}
    {#if required}
      <em>(required)</em>
    {/if}
  </span>
  <input {...{ type }} {...{ inputmode }} bind:value {required} {readonly} {onkeydown} {...rest} />
</label>

<style>
  label,
  input {
    display: block;
  }

  label {
    font-weight: 600;
    margin-block-start: 0;
  }

  em {
    font-weight: 400;
  }

  input {
    font: inherit;
    font-weight: normal;
    border: 1px solid var(--color-gray-ultralight);
    background-color: var(--color-gray-ultralight);
    border-radius: var(--form-border-radius);
    padding: var(--form-padding);
    margin-block-start: 0;
    width: 100%;
  }
</style>
