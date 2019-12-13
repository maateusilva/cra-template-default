# cra-template-default

As CRA templates doesn't support `devDependencies` by default, add this node to your `package.json` file and run `npm install` or `yarn install`:
```json
"devDependencies": {
  "eslint": "^6.7.2",
  "eslint-config-airbnb": "^18.0.1",
  "eslint-plugin-import": "^2.19.1",
  "eslint-plugin-import-helpers": "^1.0.2",
  "eslint-plugin-jsx-a11y": "^6.2.3",
  "eslint-plugin-react": "^7.17.0",
  "eslint-plugin-react-hooks": "^2.3.0"
}
```