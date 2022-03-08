This is an OPINIONATED set of `package.json` linting and formatting defaults I use for my open-source and closed-source work.

This is SUBJECT TO CHANGE AT ANY TIME. I don't really expect anyone else to use this, as it's highly subjective to my personal taste n HTML, JS, and CSS formatting. I just did it because I got tired of having to copy and paste settings among all of my repos. But if you get value from it, great!

This assumes that the Vue eslint plugin has been installed properly. Rather than manually adding the packages, do this from the command line (it will edit the package.json as needed), then replace the "extends" part of the eslint config with just extending "tabsanity" (which already extends the recommended Vue and Prettier rules). Install with:

```
vue add @vue/cli-plugin-eslint
``

This project will track with the eslint rules and options as installed through the Vue eslint plugin, so don't update eslint, etc., just update the plugin.

Also, install these packages:

- stylelint
- stylelint-config-standard

You will also need your eslint config to extend:

"plugin:vue/vue3-essential",
"eslint:recommended",
"@vue/prettier"

The latest version of the Vetur plugin is also assumed, with the Vetur HTML Formatter option set to
use **prettier**. I've tried pretty-html, it creates ugly wrapping of divs, and js-beautify-html
results in odd formatting as well.

## History

- 2.0.0 Add Vue3 support by removing extension of vue 2 ruleset
```
