<script lang="ts">
  import type { TodoItem } from '$types/todos';

  interface Props {
    task: TodoItem['task'];
    completed: TodoItem['completed'];
    onchange: (event: Event) => void;
  }

  let { task, completed, onchange }: Props = $props();
</script>

<label>
  <input type="checkbox" name={task} checked={completed} {onchange} />
  <span>{task}</span>
</label>

<style>
  label {
    display: flex;
    flex: 1;
    cursor: pointer;
  }

  label:focus-within {
    outline: 2px solid currentColor;
    border-radius: 0.2em;
  }

  span {
    margin-block-start: 0;
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: flex-start;
  }

  input {
    display: inline-block;
    overflow: hidden;
    height: 0;
    width: 0;
    margin: 0;

    &:focus {
      outline: 0;
    }

    & + span::before {
      --size: 1.4em;

      content: '';
      display: inline-block;
      width: var(--size);
      height: var(--size);
      --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='M19 3H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 2v14H5V5z'/%3E%3C/svg%3E");
      background-color: currentColor;
      -webkit-mask-image: var(--svg);
      mask-image: var(--svg);
      -webkit-mask-repeat: no-repeat;
      mask-repeat: no-repeat;
      -webkit-mask-size: 100% 100%;
      mask-size: 100% 100%;
    }

    &:checked + span::before {
      --svg: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23000' d='m10 17l-5-5l1.41-1.42L10 14.17l7.59-7.59L19 8m0-5H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2'/%3E%3C/svg%3E");
    }
  }

  :checked + span {
    text-decoration-line: line-through;
    text-decoration-color: hsl(0 100 50 / 0.5);
    text-decoration-thickness: 0.2em;
  }
</style>
