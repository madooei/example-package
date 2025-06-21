# Example Package

A minimal TypeScript package template. It is designed to demonstrate how to structure, build, test, and publish a TypeScript package in a portable and easy-to-understand way.

**Features:**

- Written in TypeScript
- Builds to both modern ES modules and CommonJS formats
- Provides TypeScript type definitions
- ESLint for code linting
- Prettier for code formatting
- Vitest for testing
- Tsup for building
- Minimal dependencies

## Installation

This is a dummy package created for demonstration purposes. It does not contain any real functionality. However, it is published to NPM and you can install it using the following command:

```bash
npm install @madooei/example-package
```

## Usage

Currently, this package only exports a simple function and a type as an example.

```typescript
// TypeScript
import { example, type Person } from "@madooei/example-package";

// Type is fully supported in TypeScript
const person: Person = {
  name: "John Doe",
  age: 30,
};

example(person);
```

If you run the above code, it will produce the following output:

```plaintext
Hello, John Doe! You are 30 years old.
```

## Cloning the Repository

To make your workflow more organized, it's a good idea to clone this repository into a directory named `example-package-workspace`. This helps differentiate the workspace from the `example-package` located in the `packages` directory.

```bash
git clone https://github.com/madooei/example-package example-package-workspace

cd example-package-workspace
```

## Repository Structure

- `packages` — Contains the primary package(s) for this repository (e.g., `example-package`). Each package is self-contained and can be copied out and used independently.
- `examples` — Contains examples of how to use the packages. Each example is a minimal, standalone project.
- `playgrounds` — Contains demos of the dependencies of the primary package(s). Each playground is a minimal, standalone project.
- `docs` — Contains various documentation for users and developers.
- `.github` — Contains GitHub-specific files, such as workflows and issue templates.

## How to Use This Repo

- To work on a package, go to `packages/<package-name>` and follow its README.
- To try an example, go to `examples/<example-name>` and follow its README.
- To run the playground, go to `playground/<package-name>` and follow its README.
- For documentation, see the `docs` folder.

### Using a VSCode Multi-root Workspace

With Visual Studio Code, you can enhance your development experience by using a multi-root workspace to access packages, examples, and playgrounds simultaneously. This approach is more efficient than opening the root directory, or each package or example separately.

To set up a multi-root workspace:

1. Open Visual Studio Code.
2. Navigate to `File > Open Workspace from File...`.
3. Select the `example-package.code-workspace` file located at the root of the repository. This action will open all specified folders in one workspace.

The `example-package.code-workspace` file can be customized to include different folders or settings. Here's a typical configuration:

```json
{
  "folders": [
    {
      "path": "packages/example-package"
    },
    {
      "path": "examples/simple"
    },
    {
      "path": "playgrounds/tsx"
    }
  ],
  "settings": {
    // Add any workspace-specific settings here, for example:
    "git.openRepositoryInParentFolders": "always"
  }
}
```

## Developing the Package

Change to the package directory and install dependencies:

```bash
cd packages/example-package
npm install
```

- Read the [Project Roadmap](ROADMAP.md) for project goals, status, evolution, and development guidelines.
- Read the [Development Guide](DEVELOPMENT.md) for detailed information on the package architecture, build configuration, and implementation patterns.
- Follow the [Contributing Guide](CONTRIBUTING.md) for contribution guidelines, coding standards, and best practices.

## Package Management

When you are ready to publish your package, you can use the following these steps:

1. Run `npm run validate` to ensure everything is in order.
2. Build the package with `npm run build`.
3. Run `npm run release` to create a new release, which will:
   - Bump the version in `package.json`
   - Update the changelog
   - Create a Git tag
4. Push the changes to your repository `git push --follow-tags origin master`
5. This will trigger the GitHub Actions workflow to publish the package to NPM.

> [!TIP]
> For detailed information about package publishing, versioning, and local development workflows, see the [NPM Package Management Guide](../../docs/guides/npm-package.md).
