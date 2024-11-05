# Bug Report

This repo shows an issue with **turbopack** when using an **enum** from **types.d.ts** in the **useState** hook.
Without **--turbo** the exact same code works. 

## Steps to Reproduce

First run it normally to confirm it's working.

```
    pnpm install
    pnpm run dev
```

Then run it with turbopack to see the error.
```
    pnpm install
    pnpm run dev-turbo
```
