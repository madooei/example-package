# Example Package

A minimal TypeScript package template. It is designed to demonstrate how to structure, build, test, and publish a TypeScript package in a portable and easy-to-understand way.

## Installation

The package can be installed using:

```bash
npm install @madooei/example-package
```

## Usage

Currently, this package only exports a simple function and a type as an example.

```typescript
// TypeScript
import { example, Person } from "@madooei/example-package";

// Type is fully supported in TypeScript
const person: Person = {
  name: "John Doe",
  age: 30,
};

example(person);
```

```javascript
// JavaScript
import { example } from "@madooei/example-package";

// Types are not visible in JavaScript but still provide runtime validation
const person = {
  name: "John Doe",
  age: 30,
};

example(person);
```
