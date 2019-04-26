# Contribute to the Paynow API & SDK docs

## Create a fork

It’s best to make changes to the docs on your local machine to check for consistent visual styling. Make sure you’ve created a fork of `paynow/docs` on GitHub and cloned the repository locally on your machine.

You can then create a separate branch for your additions. Be sure to choose a descriptive branch name that best fits the type of content. The following is an example of a branch name you might use for updating code examples in the Python SDK doc page:

```bash
$ git checkout -b update-python-code-examples
```

## Markup

1. All `docs/` markdown files need to include a header section at the top of the file. The header contains metadata used to generate the page slug, title, and sidebar label among other things. You can read more about it [here][docusaurus_markdown]
1. The only **H1** tag that is the title of the page will be generated from header `title` variable so there's no need to manually include one.
1. Main page subsections should use **H2** tags and next-level subsections to those should use **H3** tags. These **H2** and **H3** tags will be used to generate section navigation links in the right sidebar.

## Code blocks
Use the typical triple-back-tick markdown syntax (```) is used.

To add language syntax highlighting, append the language to the opening triple-back-tick as seen here:

<pre>
<code>```bash
$ cd ~/Projects/docs/website && npm install && npm start
```</code>
</pre>

Your options for languages are `sh`, `bash`, `cs`, `csharp`, `python`, `java`, `nodejs`, `php`, `gradle`, `xml`.

<!-- Links -->
[docusaurus_markdown]: https://docusaurus.io/docs/en/doc-markdown#documents