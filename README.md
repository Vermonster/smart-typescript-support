# Typescript support for CDS Hooks and SMART

This provides types for CDS Hooks and SMART Launch Context.

## Usage

```
> npm i -D smart-typescript-support
```

Update your tsconfig.json, add to typeRoots and types, for example:
```json
{
  "compilerOptions": {
    "esModuleInterop": true,
    "typeRoots": [
      "node_modules/smart-typescript-support"
    ],
    "types": [
      "smart-typescript-support"
    ]
  }
}
```

Now you will have `CDSHooks` and `SMART` typescript namespaces in your project.

