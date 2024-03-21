---
title: Project Formatting Configuration
---

# Project Formatting Configuration
You can configure the VHDL formatting preferences of a project in both Sisasi Studio for Eclipse and VS Code. This will ensure consistent formatting
across platforms and users using the same project.

## Properties
* `Enable project formatting settings`, dictates whether or not the formatting preferences specific to this project are enabled
* `Preserve newlines`, the formatter respects newlines: it does not add or remove any
* `Use vertical alignment`, align lists such as generics or ports
* `Lowercase/Uppercase keywords`, controls how the formatter transforms keywords: lowercase, UPPERCASE, or ignore
* `Alignment column for trailing comments`, the column in the line to which the trailing comments will be aligned

<ul uk-tab style="margin-left: 2em; margin-right: 2em">
  <li><a href="#">Eclipse</a></li>
  <li><a href="#">VS Code</a></li>
</ul>

<ul class="uk-switcher" style="margin-left: 2em; margin-right: 2em">
  <li>
{{< figure src="/img/manual/formattingPreferencesEclipse.gif" link="/img/manual/formattingPreferencesEclipse.gif" title="Project formatting preferences in Eclipse">}}
  </li><li>
{{< figure src="/img/manual/vscode/formattingPreferences.gif" link="/img/manual/vscode/formattingPreferences.gif" title="Project formatting preferences in VS Code">}}
  </li>
</ul>
