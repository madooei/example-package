# How to Use This Template

This guide provides a step-by-step checklist for using the example-package-workspace template to create your own TypeScript package workspace.

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Git
- A text editor (VS Code recommended)

## Step 1: Download the Template

### Option A: Download as ZIP (Recommended for new projects)

1. Go to the GitHub repository page
2. Click the green "Code" button
3. Select "Download ZIP"
4. Extract the ZIP file to your desired location
5. Rename the extracted folder to your project name (e.g., `my-awesome-package-workspace`)

### Option B: Clone and Remove Git History

```bash
git clone <repository-url> my-awesome-package-workspace
cd my-awesome-package-workspace
rm -rf .git
git init
```

## Step 2: Update Package Information

### 2.1 Update Main Package (`packages/example-package/package.json`)

Open `packages/example-package/package.json` and update:

```json
{
  "name": "@your-scope/your-package-name",
  "version": "0.1.0",
  "description": "Your package description",
  "repository": {
    "type": "git",
    "url": "https://github.com/your-username/your-package-name.git"
  },
  "homepage": "https://your-username.github.io/your-package-name/",
  "bugs": {
    "url": "https://github.com/your-username/your-package-name/issues"
  }
}
```

**Checklist:**

- [ ] Update `name` with your NPM scope and package name
- [ ] Set appropriate `description`
- [ ] Update `repository.url` with your GitHub repository
- [ ] Update `homepage` with your GitHub Pages URL
- [ ] Update `bugs.url` with your issues URL
- [ ] Change `author` if needed
- [ ] Update `keywords` array to match your package

### 2.2 Update Root Package (`package.json`)

Update the root `package.json`:

```json
{
  "name": "your-package-workspace",
  "description": "Workspace for your-package-name"
}
```

**Checklist:**

- [ ] Update `name` to match your workspace name
- [ ] Update `description`

## Step 3: Update Documentation

### 3.1 Update Main README (`README.md`)

Replace the content with your project information:

**Checklist:**

- [ ] Update project title and description
- [ ] Update installation instructions with your package name
- [ ] Update repository URLs
- [ ] Update clone instructions with your repository
- [ ] Update VS Code workspace file references
- [ ] Replace example usage with your package's usage

### 3.2 Update Package README (`packages/example-package/README.md`)

**Checklist:**

- [ ] Update package title and description
- [ ] Update installation command: `npm install @your-scope/your-package-name`
- [ ] Replace usage examples with your package's API
- [ ] Update repository clone instructions
- [ ] Update VS Code workspace references
- [ ] Update documentation links

### 3.3 Update Documentation (`docs/index.md`)

**Checklist:**

- [ ] Update package name and description
- [ ] Replace API documentation with your package's API
- [ ] Update usage examples
- [ ] Update installation instructions

### 3.4 Update Roadmap (`docs/ROADMAP.md`)

**Checklist:**

- [ ] Replace with your package's actual roadmap
- [ ] Update project overview section
- [ ] List your package's current features
- [ ] Define your future plans and goals
- [ ] Update technical architecture section
- [ ] Customize success criteria

## Step 4: Update Source Code

### 4.1 Replace Example Source (`packages/example-package/src/`)

**Checklist:**

- [ ] Replace `src/index.ts` with your package's main exports
- [ ] Update or replace `src/types.ts` with your type definitions
- [ ] Add your package's implementation files
- [ ] Update `src/example.ts` or remove if not needed

### 4.2 Update Tests (`packages/example-package/tests/`)

**Checklist:**

- [ ] Replace `tests/index.test.ts` with tests for your package
- [ ] Add comprehensive test coverage for your features
- [ ] Update test descriptions and assertions

## Step 5: Update Examples

### 5.1 Update Simple Example (`examples/simple/`)

**Checklist:**

- [ ] Update `examples/simple/package.json` with your package name
- [ ] Replace `examples/simple/src/index.ts` with usage of your package
- [ ] Update `examples/simple/README.md` with relevant example description

### 5.2 Add More Examples (Optional)

If you need additional examples:

**Checklist:**

- [ ] Create new example directories under `examples/`
- [ ] Copy the structure from `examples/simple/`
- [ ] Update each example's package.json and source code
- [ ] Add README.md files explaining each example

## Step 6: Update Playgrounds

### 6.1 Update Existing Playgrounds

For each playground in `playgrounds/`:

**Checklist:**

- [ ] Update package.json files with relevant dependencies
- [ ] Replace source code with demos relevant to your package
- [ ] Update README.md files with playground descriptions

### 6.2 Add Package-Specific Playgrounds

**Checklist:**

- [ ] Create playgrounds for your package's key dependencies
- [ ] Add playground for your main build tool (if different from tsup)
- [ ] Create playground for any unique dependencies

## Step 7: Update Configuration Files

### 7.1 Update VS Code Workspace (`.code-workspace`)

**Checklist:**

- [ ] Rename the workspace file to match your project
- [ ] Update folder paths if you've renamed directories
- [ ] Add any additional folders you've created

### 7.2 Update GitHub Workflows (`.github/workflows/`)

**Checklist:**

- [ ] Update workflow names and descriptions
- [ ] Verify npm scope and package names in publish workflow
- [ ] Update any hardcoded references to example-package

### 7.3 Update Release Configuration

**Checklist:**

- [ ] Update `.release-it.json` if needed
- [ ] Verify CHANGELOG.md generation settings
- [ ] Check version bump configuration

## Step 8: Update Metadata Files

### 8.1 Update License

**Checklist:**

- [ ] Update `LICENSE` file with your name and year
- [ ] Ensure license type matches your package.json

### 8.2 Update Contributing Guide (`CONTRIBUTING.md`)

**Checklist:**

- [ ] Update project name references
- [ ] Update repository URLs
- [ ] Customize contribution guidelines for your project

### 8.3 Update Claude Instructions (`CLAUDE.md`)

**Checklist:**

- [ ] Update project description and overview
- [ ] Update package structure information
- [ ] Update development commands if they've changed
- [ ] Add any project-specific Claude instructions

## Step 9: Initialize Your Package

### 9.1 Install Dependencies

```bash
cd packages/your-package-name
npm install
```

**Checklist:**

- [ ] Install dependencies successfully
- [ ] Verify all dev dependencies are installed
- [ ] Check for any dependency conflicts

### 9.2 Build and Test

```bash
npm run validate
```

**Checklist:**

- [ ] TypeScript compilation succeeds
- [ ] Linting passes
- [ ] Formatting passes
- [ ] Tests pass
- [ ] Build completes successfully

### 9.3 Test Examples and Playgrounds

```bash
cd ../../examples/simple
npm install
npm start
```

**Checklist:**

- [ ] Examples install and run successfully
- [ ] Playgrounds work as expected
- [ ] All linking between workspace packages works

## Step 10: Set Up Repository

### 10.1 Initialize Git

```bash
git init
git add .
git commit -m "Initial commit: Set up package workspace from template"
```

### 10.2 Create GitHub Repository

**Checklist:**

- [ ] Create new repository on GitHub
- [ ] Add remote origin
- [ ] Push initial commit
- [ ] Set up GitHub Pages (if using documentation site)

### 10.3 Configure NPM Publishing

**Checklist:**

- [ ] Create NPM account if needed
- [ ] Set up NPM scope if using scoped packages
- [ ] Add NPM_TOKEN to GitHub repository secrets
- [ ] Test publishing workflow (optional: publish first version)

## Step 11: Final Verification

### 11.1 Complete Package Check

**Checklist:**

- [ ] All package.json files have correct information
- [ ] All README files are updated and accurate
- [ ] Documentation reflects your package's actual API
- [ ] Examples demonstrate real usage
- [ ] Tests cover your package's functionality
- [ ] Build system works correctly
- [ ] Publishing workflow is configured

### 11.2 Documentation Check

**Checklist:**

- [ ] Repository README is comprehensive
- [ ] Package README explains installation and usage
- [ ] API documentation is complete
- [ ] Examples are clear and working
- [ ] Contributing guidelines are relevant

## Common Gotchas

### Package Names and Scopes

- Ensure all package names are consistent across all files
- Don't forget to update import statements in examples
- Verify NPM scope availability before choosing names

### Repository URLs

- Update all GitHub URLs consistently
- Check both HTTPS and SSH URL formats
- Verify GitHub Pages URL structure

### Dependencies

- Remove dependencies you don't need
- Add dependencies your package actually uses
- Keep example and playground dependencies minimal

### Documentation

- Don't leave example-package references in documentation
- Ensure API documentation matches your actual implementation
- Update code examples to use your package's real API

## Troubleshooting

### Build Issues

If builds fail:

1. Check TypeScript configuration matches your source structure
2. Verify all imports are correct
3. Ensure dependencies are properly installed

### Linking Issues

If examples can't find your package:

1. Run `npm run build` in the main package
2. Verify package exports are correct
3. Check example package.json dependencies

### Publishing Issues

If GitHub Actions fail:

1. Verify NPM_TOKEN is set correctly
2. Check package name availability on NPM
3. Ensure all required files are included in package

## Next Steps

After completing this checklist:

1. **Implement Your Package**: Start building your actual package functionality
2. **Write Tests**: Add comprehensive test coverage
3. **Create Documentation**: Build detailed API documentation
4. **Add Examples**: Create realistic usage examples
5. **Set Up CI/CD**: Configure automated testing and publishing
6. **Build Community**: Add issue templates, contributing guides, and community features

## Getting Help

If you run into issues:

- Check the original template repository for updates
- Review the example implementations in other workspace packages
- Consult the TypeScript and Node.js documentation
- Ask questions in relevant developer communities

Remember: This template provides a solid foundation, but you'll need to customize it significantly to match your specific package requirements and goals.
