Sigasi Documentation source
===========================

This repository contains the source of the Sigasi documentation.
You can find the rendered version at <http://insights.sigasi.com>

## Authoring guide

We are using markdown

* [MarkDown tutorial](http://markdowntutorial.com/)
* [MarkDown cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

### links

* external link : `[text](http://www.example.com)`
* internal link : `[/manual/demo]`
* internal link with different text : `[text][/manual/setup]
* link with link text  : `<http://www.sigasi.com>`

### Filenames

* Use dashes as separator. E.g.: **`test-me.md`** and **not** ~~`test_me.md`~~

### Images

* Images are stored in an `images` folder (e.g. `/opinion/images`, `/tech/images/`, ...)
* Image file names must be **lower case**

Tips:

* Images can be aligned by appending `{: style="float:right"}` to the regular `![](images/...)` markdown syntax

### Code snippets

Tips:

* You can specify the language of code blocks by appending the language to the first three back ticks: e.g.
  ````` ```vhdl `````

