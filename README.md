# Turborepo

## What's inside?

This Turborepo includes the following packages/apps:

### Apps and Packages

- `turborepo-nestjs`: a Nest.js web API server
- `web`: Next.js application
- `@repo/types`: types library shared by both `turborepo-nestjs` and `web` applications
- `@repo/eslint-config`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo

### Build

To build all apps and packages, run the following command:

```
cd my-turborepo
pnpm build
```

### Develop

To develop all apps and packages, run the following command:

```
cd my-turborepo
pnpm dev
```

### Remote Caching

This repository uses a technique known as to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

### Env Variables

- development:    
Web API server (`turborepo-nestjs`) listens on port 3001

```
API_URL=http://localhost:3001
```