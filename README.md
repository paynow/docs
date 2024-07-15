# Paynow API and SDK Documentation

Documentation outlining merchant integration into Paynow for externally hosted shopping carts or applications. Also included here is documentation and guides for the SDKs we've developed for the Paynow API. Please review this README file to understand how you can assist in contributing to the Paynow developer documentation.

## Getting Started

This code is what's used to generate https://developers.paynow.co.zw. The HTML files served on the website are generated from the files in `docs/` and `website/`.

The `docs/` folder contains all the markdown files that make up the entire documentation on the website while `website/` contains the JS, CSS, images and other files (as well as the blog).

To make significant changes to the site you should familiarise yourself with [docusaurus][docusaurus]. If you only want to make content changes (*fix errors, typos, or add new sections to the exisiting documentation*) you just need to know about markdown and make your edits to the files in `docs/`.

Two special files:

- `sidebars.json`: lists the sections.
- `siteConfig.json`: some header and i18n configs.

During your development, most changes will be picked up at each browser refresh. If you touch these two files or blog/, however, you'll have to restart the server to see the changes.

To download and run the website locally please follow the steps described below:

### Prerequisites
1. Git
1. NodeJS >=8.x and npm

#### Download
```bash
$ git clone https://github.com/paynow/docs.git
```

#### Install and run

```bash
$ cd docs/website
$ npm install #to install all required dependencies
$ npm start #to start the development server & watcher
```

## Contributing

We welcome contributions to this and the SDKs repositories of any kind including documentation, suggestions, bug reports, pull requests etc. Do check out our [contribution guide][contribution_guide]. We would love to hear from you.

## Building and Deploying

Changes merged into the `master` branch are automatically built and deployed by CI.


<!-- LINKS -->
[source_url]: https://github.com/paynow/docs.git
[docusaurus]: https://docusaurus.io
[contribution_guide]: https://github.com/paynow/docs/blob/master/CONTRIBUTING.md
