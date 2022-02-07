module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
		es2021: true,
	},
	extends: ["plugin:react/recommended", "airbnb", "prettier", "eslint-config-prettier"],
	globals: {
		Atomics: "readonly",
		SharedArrayBuffer: "readonly",
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: "module",
	},
	plugins: ["react", "prettier", "@typescript-eslint"],
	settings: {
		react: {
			version: "latest",
		},
	},
	rules: {
		"prettier/prettier": ["error", { endOfLine: "auto", printWidth: 100 }],
		"react/jsx-filename-extension": [0],
		"import/extensions": [0],
		"react/forbid-prop-types": [0],
		"react/jsx-fragments": [0],
		"react/require-default-props": [0],
		"react/no-array-index-key": [0],
		"import/prefer-default-export": [0],
		"no-shadow": [0],
		"react/no-unknown-property": [0],
		"react/destructuring-assignment": [0],
		camelcase: [0],
		eqeqeq: "off",
		"no-console": "off",
		// "no-restricted-globals": [0],
		"react/jsx-props-no-spreading": [0],
		"jsx-a11y/media-has-caption": [0],
		"@next/next/no-img-element": [0],
		"import/no-unresolved": [0],
		"no-lonely-if": [0],
		"no-unused-vars": [0],
		"no-underscore-dangle": [0],
		"jsx-a11y/anchor-is-valid": [
			"error",
			{
				components: ["Link"],
				specialLink: ["hrefLeft", "hrefRight"],
				aspects: ["invalidHref", "preferButton"],
			},
		],
	},
};
