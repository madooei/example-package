# Example Package

A minimal TypeScript package template that can be used both locally and published to NPM.

> [!TIP]
> Refer to this package's docs ([source](../../docs/index.md) or [website](https://madooei.github.io/example-package/)) for how to use it.

## Features

- Written in TypeScript
- Builds to modern ES modules
- Provides TypeScript type definitions
- ESLint for code linting
- Prettier for code formatting
- Vitest for testing
- Minimal dependencies
- Can be used locally or published to NPM

## Development

### Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development:

   ```bash
   npm run dev
   ```

### Available Scripts

- `npm run build` - Build the package
- `npm run dev` - Run in development mode with watch
- `npm start` - Run the package
- `npm run debug` - Run with debugger attached
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage
- `npm run test:ui` - Run tests with UI
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Check code formatting
- `npm run format:fix` - Format code with Prettier
- `npm run validate` - Run all checks (types, lint, format, tests)
- `npm run clean` - Clean the package (remove dist and coverage)
- `npm run clean:all` - Clean the package and all dependencies (remove dist, coverage, and node_modules)
- `npm run release` - Create a new release (bump version, update changelog, create tag)

## Package Management

> [!TIP]
> For detailed information about package publishing, versioning, and local development workflows, see the [NPM Package Management Guide](../../docs/guides/npm-package.md).

### Quick Reference

- `npm run release` - Create automated release with versioning and changelog
- `npm publish` - Publish to NPM (after building)
- `npm link` - Create global symlink for local development

### Package Scope

This package uses the npm scope `@madooei`. When using this template:

1. Change the package name in `package.json` to `@your-scope/your-package-name`
2. For first publish of scoped packages: `npm publish --access public`
