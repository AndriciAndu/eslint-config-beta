# ESLint config instal

## Command line

```
npm install --save-dev @byandu/eslint-config-beta
```

## .eslintrc.json file

```
{
  "extends": "@byandu/eslint-config-beta/eslintConfig"
}

```

## .eslintignore file (optional)

```
# Dependencies
node_modules
```

## .stylelintrc.json

```
{
  "extends": "@byandu/eslint-config-beta/stylelintConfig"
}

```

---

# Internals

## Dependency list

```
  "dependencies": {
    "@ronilaukkarinen/stylelint-a11y": "1.2.7",
    "eslint": "8.55.0",
    "eslint-plugin-css-modules": "2.12.0",
    "eslint-plugin-import": "2.29.0",
    "eslint-plugin-jsx-a11y": "6.8.0",
    "eslint-plugin-react": "7.33.2",
    "eslint-plugin-react-hooks": "4.6.0",
    "stylelint": "15.10.2",
    "stylelint-config-css-modules": "4.3.0",
    "stylelint-config-standard": "34.0.0",
    "stylelint-order": "6.0.4",
    "stylelint-stylistic": "0.4.3"
  }
```

**Note**: Installing the package itself (`@byandu/eslint-config-beta`) as a dev-dependency, will treat all of the dependencies as dev-dependencies as well (aka, they will not be part of the production build).

## TODO - list config packages, their own dependencies, rule-sets and reasoning
