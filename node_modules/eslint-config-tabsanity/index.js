const ELEMENTS_CONTENT_WRAP_ALLOWED = ["div", "pre", "textarea", "p", "b", "i", "a", "u", "s", "em", "strong", "template", "router-link"]

module.exports = {
	root: true,
	env: {
		node: true, // Needed for "require" to be recognized  as defined
	},
	globals: {
		Vue: "readable",
	},
	parserOptions: {
		parser: "babel-eslint",
	},
	rules: {
		// 2020-03-22 Something about the latest ESlint or Vue language plugin or whatever is borking
		// when this is set to warn or error. Don't really need to lint tabs vs. spaces anyway since
		// this is handled by Prettier, so disbabling it for now.
		indent: [0, "tab"],
		quotes: [
			"error",
			"double",
			{
				avoidEscape: true,
			},
		],
		"no-console": "warn",
		"comma-dangle": [
			"error",
			{
				arrays: "ignore",
				objects: "always-multiline",
				imports: "ignore",
				exports: "never",
				functions: "ignore",
			},
		],

		// Don't force this, not worth the effort to save on git churn for Vue files since the last line is
		// almost aways the end of the script or style tag.
		"eol-last": "off",

		// Yes, we know it can be dangerous. But it's also very useful.
		"vue/no-v-html": "off",

		// This always ends up being arbitrary and makes it difficult to align similar code.
		// Let prettier's line width limit determine this.
		"vue/max-attributes-per-line": "off",

		// Disabled because newlines before closing brackets look ugly and waste space.
		"vue/html-closing-bracket-newline": 0,

		// Disabled because there's no way to ignore text nodes, we can only configure it to
		// ignore certain tags. This makes it difficult to use with simple text and template
		// {{references}}.
		"vue/singleline-html-element-content-newline": 0,

		// XHTML FTW!
		"vue/html-self-closing": [
			"error",
			{
				html: {
					void: "always",
					normal: "always",
					component: "always",
				},
				svg: "always",
				math: "always",
			},
		],

		// Spaces are unnecessary.
		// NOTE: Docs are wrong, it's 1 not "warning" or "warn". Version 5 vs 6 issue?
		// New version also doesn't allow use of "any" and it seems impossible to make Prettier
		// to STOP putting spaces on self-closing tags, so I'm disabling this rule completely.
		"vue/html-closing-bracket-spacing": 0,
		/*
		[
			1,
			{
				startTag: "never",
				endTag: "never",
				selfClosingTag: "any", // Prettier adds these, but I don't really care.
			},
		],*/

		// Mostly the default here, but a warning rather than an error, becuase it's just
		// not worth fighting weird indent issues just to compile. Also, TABS FOR LIFE!
		// NOTE: Docs are wrong, it's 1 not "warning" or "warn". Version 5 vs 6 issue?
		"vue/html-indent": [
			1,
			"tab",
			{
				attribute: 1,
				baseIndent: 1,
				closeBracket: 0,
				alignAttributesVertically: true,
			},
		],

		// For more complex tags, it makes sense to always intent their content under them,
		// unless the content is very simple.
		"vue/multiline-html-element-content-newline": [
			1,
			{
				ignoreWhenEmpty: true,
				ignores: ELEMENTS_CONTENT_WRAP_ALLOWED,
				allowEmptyLines: false,
			},
		],
	},
}
