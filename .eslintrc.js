module.exports = {
  extends: [
    "standard",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "prettier",
    "prettier/react",
    "prettier/standard"
  ],
  plugins: ["prettier", "react", "jsx-a11y", "standard"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
      jsx: true
    }
  },
  env: {
    browser: true,
    es6: true,
    jest: true
  },
  settings: {
    react: {
      version: "latest"
    }
  },
  rules: {
    // https://github.com/yannickcr/eslint-plugin-react#configuration
    "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx"] }],
    "react/jsx-uses-react": "error",
    "react/react-in-jsx-scope": "error",
    "react/no-deprecated": "error",
    "react/prefer-stateless-function": "warn",

    // https://www.npmjs.com/package/eslint-plugin-jsx-a11y#supported-rules
    "jsx-a11y/accessible-emoji": "warn",
    "jsx-a11y/anchor-is-valid": "warn",
    "jsx-a11y/alt-text": "warn",

    // prettier - gatsby-starter-default options
    "prettier/prettier": [
      "error",
      {
        printWidth: 80,
        tabWidth: 2,
        useTabs: false,
        semi: false,
        singleQuote: false,
        endOfLine: "lf",
        jsxSingleQuote: false,
        trailingComma: "es5",
        bracketSpacing: true,
        jsxBracketSameLine: false,
        arrowParens: "avoid"
      }
    ]
  }
};
