# Sigasi Documentation source

This repository contains the source of the Sigasi documentation.
You can find the rendered version at <https://insights.sigasi.com>

## Building locally

To work locally with this project, you'll have to follow the steps below:

1. Fork, clone or download this project
1. Make sure to initialize the git submodules: `git submodule update --init --recursive`
1. Install Hugo
1. Preview your project: `hugo server`
1. Add content
1. Generate the website: `hugo` (optional)

## Hugo

We are using markdown with [Hugo].

* Install: [Hugo]
* Build `hugo`
* Test: `hugo server --buildFuture --buildDrafts --navigateToChanged` to start serving pages locally. The url will be printed in the `hugo` output.
  * Use the `-F` (or `--buildFuture`) option to show posts with dates in the future.
  * Use the `-D` (or `--buildDrafts`) option to show posts with draft status.
  * Use `--navigateToChanged` to navigate to changed content file on live browser reload
* Tools:
  * Enable shell autocompletion: `sudo hugo gen autocomlete`
* Create content based on archetypes:
  * New release notes: `hugo new content/releasenotes/sigasi-4.06.md`
  * New tech article: `hugo new content/tech/fancy-title.md`

## Markdown authoring

* [Markdown tutorial](http://markdowntutorial.com/)
* [New Markdown tutorial](http://commonmark.org/help/tutorial/index.html)
* [Markdown cheat sheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

### Links

* External link: `[text](http://www.example.com)`
* Internal link: `[text]({{< ref "/manual/demo" >}})`
  * title as text: `{{< page "manual/demo" >}}`
* Link with link text: `<https://www.sigasi.com>`
* Link with reference:

```md
   [text][reference]
   ...
   [reference]: https://example.com
```

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

```vhdl
entity example is
  port(
    clk : in std_logic
  );
end entity;
```

Syntax highlighting is configured as follows:

* Added 2 config settings to config.toml
  * to allow code blocks like above automatically be highlighted: `pygmentsCodeFences = "true"`
  * to use a separate css file: `pygmentsUseClasses = "true"`
* Included a new css file `syntax.css` in `layouts/_default/baseof.html` which is generated using the command `hugo gen chromastyles --style=monokai > static/css/syntax.css`
* In case you want to change the style, different styles are available, check <https://xyproto.github.io/splash/docs/all.html>
* More Hugo documentation on highlighting: <https://gohugo.io/content-management/syntax-highlighting/>

[Hugo]: https://gohugo.io/
