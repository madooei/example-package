# Example Package

A minimal TypeScript package template that can be used both locally and published to NPM.

## Features

- Written in TypeScript
- Builds to modern ES modules
- Provides TypeScript type definitions
- Minimal dependencies
- Can be used locally or published to NPM

## Installation

### Local Development (Without Publishing to NPM)

There are two ways to use this package locally:

#### Option 1: Using npm link

1. Clone this repository:

   ```bash
   git clone <your-repo-url>
   cd example-package
   ```

2. Install dependencies and build:

   ```bash
   npm install
   npm run build
   ```

3. Create a global link:

   ```bash
   npm link
   ```

4. In your project where you want to use this package:

   ```bash
   npm link example-package
   ```

#### Option 2: Using local path

In your project's package.json, add this package as a dependency using the local path:

```json
{
  "dependencies": {
    "example-package": "file:/absolute/path/to/example-package"
  }
}
```

Then run `npm install` in your project.

### Installing from NPM (After Publishing)

Once published to NPM, the package can be installed using:

```bash
npm install example-package
```

## Usage

```typescript
// TypeScript
import { example, Person } from 'example-package';

// Type is fully supported in TypeScript
const person: Person = {
  name: 'John Doe',
  age: 30
};

example(person);
```

```javascript
// JavaScript
import { example } from 'example-package';

// Types are not visible in JavaScript but still provide runtime validation
const person = {
  name: 'John Doe',
  age: 30
};

example(person);
```

## Publishing to NPM

1. Build the package:

   ```bash
   npm run build
   ```

2. Publish to NPM:

   ```bash
   npm publish
   ```

3. In your project, install the package from NPM:

   ```bash
   npm install example-package
   ```
