# example-package

The `@madooei/example-package` is a minimal TypeScript package template. It is designed to demonstrate how to structure, build, test, and publish a TypeScript package in a portable and easy-to-understand way.

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

### Local Development (Without Publishing to NPM)

There are three ways to use this package locally:

#### Option 1: Using npm link

1. Clone this repository, install dependencies, build the package, and create a global symlink:

   ```bash
   git clone <repository-url>
   cd example-package/packages/example-package
   # Install dependencies and build the package
   npm install
   npm run build
   # Create a global symlink
   npm link
   ```

   Note: You can unlink the package later using `npm unlink`.

2. In your other project where you want to use this package:

   ```bash
   npm link @madooei/example-package
   ```

3. Import the package in your project:

   ```typescript
   import { example, Person } from '@madooei/example-package';
   ```

#### Option 2: Using local path

In your other project's `package.json`, add this package as a dependency using the local path:

```json
{
  "dependencies": {
    "@madooei/example-package": "file:/path/to/example-package"
  }
}
```

You can use absolute or relative paths with the `file:` protocol.

Then run `npm install` in your project.

Now you can import the package in your project as usual.

#### Option 3: Using a local tarball (npm pack)

1. Follow option 1 but instead of using `npm link`, create a tarball of the package:

   ```bash
   npm pack
   ```

   This will generate a file like `madooei-example-package-1.0.0.tgz`. (Or whatever version you have.)
   You can find the tarball in the same directory as your `package.json`.

2. In your other project, install the tarball:

   ```bash
   npm install /absolute/path/to/example-package/madooei-example-package-1.0.0.tgz
   ```

   Or, if you copy the tarball into your project directory:

   ```bash
   npm install ./madooei-example-package-1.0.0.tgz
   ```

This method installs the package exactly as it would be published to npm, making it ideal for final testing. After this installation, you must have the package in your `node_modules` directory, and you can import it as usual. You will also see the package in your `package.json` file as a dependency:

```json
{
  "dependencies": {
    "@madooei/example-package": "file:madooei-example-package-1.0.0.tgz"
  }
}
```
