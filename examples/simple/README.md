# Simple Example Usage

This is a minimal example showing how to use `example-package` locally.

## Setup

```bash
npm install
```

## Run the Example

```bash
npm run start
``` 

## How does it work?

The `@madooei/example-package` is a local package that is installed using the `file:` protocol; see the `dependencies` section in the `package.json` file:

```json
  "dependencies": {
    "@madooei/example-package": "file:../../packages/example-package"
  },
```

If you want to use the package through NPM, you can do so by changing the `dependencies` section in the `package.json` file to:

```json
  "dependencies": {
    "@madooei/example-package": "latest"
  },
```

Then install the dependencies again and it will be installed through NPM (assuming you have published the package to NPM).
