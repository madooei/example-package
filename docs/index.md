# Example Package

A minimal TypeScript package template. It is designed to demonstrate how to structure, build, test, and publish a TypeScript package in a portable and easy-to-understand way.

Currently, this package only exports a simple function and a type as an example. 

## Usage

```typescript
// TypeScript
import { example, Person } from '@madooei/example-package';

// Type is fully supported in TypeScript
const person: Person = {
  name: 'John Doe',
  age: 30
};

example(person);
```

```javascript
// JavaScript
import { example } from '@madooei/example-package';

// Types are not visible in JavaScript but still provide runtime validation
const person = {
  name: 'John Doe',
  age: 30
};

example(person);
```

## Installation

### Installing from NPM (After Publishing)

Once published to NPM, the package can be installed using:

```bash
npm install @madooei/example-package
```

This template is particularly useful for creating packages that are intended to be used locally so read the instructions below for local development.

### Local Development

> [!TIP]
> For detailed local development workflows and package management strategies, see the [NPM Package Management Guide](guides/npm-package.md).

**Quick options:**
- `npm link` - For active development with live updates
- `file:` protocol - For stable local dependencies
- `npm pack` - For testing the exact publish artifact
