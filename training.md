## Этап 0 — Учебный sandbox (до кода, на игрушечном проекте)

Не трогаем `comreg-fe`. Разворачиваем отдельно:
```bash
npm create nuxt@latest nuxt-sandbox
cd nuxt-sandbox && npm install && npm run dev
```

Концепции Nuxt через призму Next.js, с офиц. ссылками:

| Nuxt | Next.js-аналог | Отличие / ссылка |
|---|---|---|
| `app/pages/*.vue`, файловый роутинг (`[id].vue`, `index.vue`) | `app/[id]/page.tsx` | Похоже по идее, но нет разделения server/client компонентов как в RSC — весь `.vue`-файл один. [Directory structure: pages](https://nuxt.com/docs/guide/directory-structure/pages) |
| `app/layouts/default.vue` + `<NuxtLayout>` | `layout.tsx` | Layout выбирается явно через `definePageMeta({ layout: 'auth' })`, не по вложенности папок. [Layouts](https://nuxt.com/docs/guide/directory-structure/layouts) |
| `useFetch`/`useAsyncData` | `fetch()` в server component / `getServerSideProps` | SSR-aware из коробки, дедуплицирует запрос между сервером и клиентом при гидратации — модель кэширования своя. [Data fetching](https://nuxt.com/docs/getting-started/data-fetching) · [useFetch API](https://nuxt.com/docs/api/composables/use-fetch) |
| Auto-imports (`composables/`, `components/`, `utils/`) | Нет прямого аналога | Специфика Nuxt: функции доступны без `import`. [Auto-imports](https://nuxt.com/docs/guide/concepts/auto-imports) |
| `server/api/*.ts` (h3 event handlers) | `app/api/*/route.ts` | Свой рантайм (Nitro), `defineEventHandler`/`getQuery`/`readBody`. [Server directory](https://nuxt.com/docs/guide/directory-structure/server) |
| `<ClientOnly>` | `next/dynamic({ ssr: false })` | Обязателен для сторонних компонентов, трогающих `window`/`document` до маунта — актуально для Google Maps. [ClientOnly](https://nuxt.com/docs/api/components/client-only) |
| Nuxt-модули (`@pinia/nuxt` и т.п.) | Ручная настройка | Многое, что раньше регистрировалось вручную в `externalVueModules.js`, здесь ставится модулем в `nuxt.config.ts` одной строкой. [Modules directory](https://nuxt.com/modules) |
| Route middleware (`app/middleware/*.ts`) | `middleware.ts` | Похоже концептуально, другой API — `defineNuxtRouteMiddleware`. [Middleware](https://nuxt.com/docs/guide/directory-structure/middleware) |
| `nuxt.config.ts` | `next.config.js` | Сюда же уходит регистрация модулей, `runtimeConfig`, `routeRules` (per-route rendering mode — механизм для точечного SSG). [nuxt.config](https://nuxt.com/docs/api/nuxt-config) |
| Деплой SSR (Node) | `next start` | `.output/server/index.mjs`, свой процесс (systemd/pm2), не статика. [Deployment](https://nuxt.com/docs/getting-started/deployment) |

Практика на sandbox (не пропускать):
1. 2 страницы + общий layout.
2. `useFetch` к публичному API, проверить в Network — запрос не должен дублироваться при гидратации.
3. `@pinia/nuxt`, один store, использовать в двух компонентах. ([Pinia + Nuxt](https://pinia.vuejs.org/ssr/nuxt.html))
4. Обернуть любой client-only виджет в `<ClientOnly>`, посмотреть на ошибку гидратации без обёртки — один раз увидеть глазами.
