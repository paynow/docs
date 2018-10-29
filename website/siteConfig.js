/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config.html for all the possible
// site configuration options.

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: 'Zimbabwe Online (ZOL)',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/zol.png',
    infoLink: 'https://www.zol.co.zw',
    pinned: true,
  },
  {
    caption: 'Total Zimbabwe',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/total.png',
    infoLink: 'http://www.total.co.zw',
    pinned: true,
  },
  {
    caption: 'Food World',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/foodworld.png',
    infoLink: 'https://www.foodworld.co.zw/',
    pinned: true,
  },  
];


const siteConfig = {
  title: 'Paynow Developer Hub' /* title for your website */,
  tagline: 'Integrate With Paynow & #GetPaid',
  url: 'https://developers.paynow.co.zw' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://paynowzw.github.io',
  //   baseUrl: '/',

  // Used for publishing and more
  projectName: 'paynow-docs',
  // organizationName: 'PaynowZW',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'quickstart', label: 'DOCUMENTATION'},
    // {page: 'try', label: 'TRY NOW'},
    {page: 'about', label: 'ABOUT'},
    {page: 'help', label: 'HELP'},
    {blog: true, label: 'BLOG'},
    {href: 'https://forums.paynow.co.zw/', label: 'FORUMS'},
    {href: 'https://forums.paynow.co.zw/signup', label: 'SIGN UP'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/paynow.logo.png',
  footerIcon: 'img/paynow.p.emblem.png',
  favicon: 'img/favicon.png',

  /* colors for website */
  colors: {
    primaryColor: '#175ff8',
    secondaryColor: '#ffffff',
  },

  /* custom fonts for website */
  fonts: {
    bodyFont: [
      "SF Regular",
      "sans-serif"
    ],
    headerFont: [
      "SF Bold",
      "sans-serif"
    ]
  },

  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright:
    'Copyright © ' +
    new Date().getFullYear() +
    ' Paynow Zimbabwe',

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'tomorrow-night-blue',//'tomorrow-night-blue',
  },

  // Add custom scripts here that would be placed in <script> tags
  scripts: ['https://buttons.github.io/buttons.js','../js/custom.js','https://embed.runkit.com'],

  /* On page navigation for the current documentation page */
  onPageNav: 'separate',

  /* Open Graph and Twitter card images */
  ogImage: 'img/paynow.logo.png',
  twitterImage: 'img/paynow.logo.png',

  // Disable Header Title
  disableHeaderTitle: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',

  algolia: {
    apiKey: '8345ef0af3e205a03fa7f5950b33935b',
    indexName: 'paynow',
    algoliaOptions: {} // Optional, if provided by Algolia
  },
  gaTrackingId: 'UA-126207230-1',
  scrollToTop: true,
  scrollToTopOptions: {
    zIndex: 100,
  },
};

module.exports = siteConfig;
