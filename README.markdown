# Sigasi Documentation source

This repository contains the source of the Sigasi documentation.
You can find the rendered version at <https://insights.sigasi.com>

## Authoring guide

We are using markdown with [Hugo].

* [MarkDown tutorial](http://markdowntutorial.com/)
* [New MarkDown tutorial](http://commonmark.org/help/tutorial/index.html)
* [MarkDown cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

### Links

* External link: `[text](http://www.example.com)`
* Internal link: `[text]({{< ref "/manual/demo" >}})`
* Link with link text: `<https://www.sigasi.com>`

### Filenames

* Use dashes as separator. E.g.: **`test-me.md`** and **not** ~~`test_me.md`~~

### Images

* Images are stored in an `img` folder (e.g. `/img/opinion/...`, `/img/tech/...`, ...)
* Image file names must be **lower case**

Tips:

* Images can be aligned by using the `figure` shortcode with `class` argument, e.g. `{{< figure src="/img/xxx" alt="alt text" class="uk-align-right" >}}`
* When adding a `link` to a figure, it becomes clickable. When the link is an image (e.g. same as the src), a lightbox is used to show the image.

### Code snippets

Tips:

* You can specify the language of code blocks by appending the language to the first three back ticks: e.g.
  ````` ```vhdl `````

### Testing
* Install [Hugo]
* Run `hugo server` to start serving pages locally.

[Hugo]: https://gohugo.io/
