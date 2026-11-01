# CLAUDE.md

A SvelteKit 2 + Svelte 5 playground for SvelteKit `load` functions against a JSON REST API. Uses pnpm (Node version in `.nvmrc`), with `adapter-node` (`node build`) deployed via Nixpacks.

## Verifying changes

There is no test suite. A change is done when `pnpm check` and `pnpm lint` both pass. The husky pre-commit hook runs both, and CI also runs `pnpm build`. Run `pnpm format` to fix Prettier failures.

`.env` must exist before `check`/`build` will work: config comes from `$env/static/public`, so start with `cp .env.example .env`. In production `PUBLIC_BUILD_TIME` and `PUBLIC_VERSION` are filled in by `scripts/build.sh`.

`.env.example` holds the values for the Coolify deployment (CI copies it too), so leave it as it is. For local development, set `PUBLIC_API_BASE_URL="http://localhost:8000"` in your own `.env`. The dev server runs on port **4444** (`vite.config.ts`), whatever `PUBLIC_BASE_URL` says.

## The API

- Despite the repo name, the backend is the FastAPI project in `../fastapi` (`make start` there, served at `http://localhost:8000`), not jsonplaceholder.typicode.com. `src/types/*` mirrors its Pydantic models in `../fastapi/app/models/`, so check them there when they disagree. In particular: users have a numeric `id` **and** a UUID `userId`, and `/users/{userId}` takes the UUID. Posts embed an `author` object. `DELETE` returns 204 with no body, so don't call `.json()` on it.
- All HTTP goes through the shared `ky` instance in `src/lib/api/client.ts` (it uses `prefixUrl`, retries and a timeout). Write endpoint paths **without a leading slash**, because `ky` rejects them when `prefixUrl` is set.
- Each resource has a module `src/lib/api/<resource>.ts` with a local `endPoints` map and small typed functions (`getX`, `getXItem`, `createX`, `updateX`, `deleteXItem`), plus types in `src/types/<resource>.ts` (`X`, `XCreate`, `XUpdate`).
- The API is called from **both** sides. `+page.server.ts` `load` functions fetch the initial data on the server, and components like `TodoList.svelte` call the same API functions straight from the browser for mutations and refreshes. That means the API URL has to be reachable from the server and from the browser.

## Svelte conventions

- Write Svelte 5 runes: `interface Props` + `$props()`, `$state`, `$derived`, and callback props (`onclick`, `onchange`). Page components receive `let { data }: PageProps = $props()`. The few remaining `export let data` pages are legacy; convert them when you touch them.
- Progressive enhancement: features that only work with JavaScript are wrapped in `{#if browser}`, and a no-JS form-action fallback sits next to them (see `todos/+page.server.ts` `actions`).
- Import aliases: `$lib`, `$types` (`src/types`), `$styles` (`src/styles`).
- Icons are `@iconify/svelte` `<Icon icon="set:name" />` strings. Markdown is rendered with `{@html snarkdown(...)}`, and the lint rule against that is deliberately turned off.
- Reuse `Button`, `Input` and `Loading` from `src/lib/components` instead of writing raw controls.

## Styling

- Use the global design tokens in `src/styles/variables.css` (`--text-color`, `--brand-color-*`, `--form-border-radius`, …). Dark mode works by redefining those tokens under `prefers-color-scheme`, so a hard-coded color won't adapt to it.
- `basic.css` applies a flow rule `* + * { margin-block-start: 1.75em }` across the whole site. Inside flex, grid or inline layouts, set `margin-block-start: 0` on children (existing components already do this).
- Component styles go in the scoped `<style>` block. Native CSS nesting is fine.

## Repo conventions

- Commits use Conventional Commits (`feat(todos): …`, `fix: …`, `ci: …`).
- Every dependency is an exact-pinned `devDependency` (Renovate keeps them updated). Add new packages the same way: `pnpm add -D -E <pkg>`.
