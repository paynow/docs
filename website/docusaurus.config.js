module.exports = {
  title: 'Paynow Developer Hub', // Title for your website
  tagline: 'Integrate With Paynow & #GetPaid',
  url: 'https://developers.paynow.co.zw', // Your website URL
  baseUrl: '/', // Base URL for your project
  onBrokenLinks: 'warn', // throw an error if a broken link is detected during build
  onBrokenMarkdownLinks: 'warn', // warn if a broken markdown link is detected during build
  favicon: '/img/favicon.png',
  projectName: 'paynow-docs',
  organizationName: 'PaynowZW',
  scripts: [
        '/js/custom.js',
  ],
 
 
  themeConfig: {
    algolia: {
      appId:'3H7ITVC7MS',
      apiKey: '1a1e673b71df14e33281d0447c1d63f7',
      indexName: 'paynow',
      algoliaOptions: {} // Optional, if provided by Algolia
    },
    navbar: {
      title: 'Paynow Developer Hub',
      logo: {
        alt: 'Paynow Logo',
        src: 'img/paynow.logo.png',
      },
      items: [
        { to: 'docs/quickstart', label: 'Documentation', position: 'left' },
        { to: 'about', label: 'About', position: 'left' },
        { to: 'help', label: 'Help', position: 'left' },
        { href: 'https://forums.paynow.co.zw/', label: 'Forums', position: 'right' },
        { href: 'https://forums.paynow.co.zw/signup', label: 'Sign Up / Sign In', position: 'right' },
      ],
    },

  
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: 'docs/quickstart',
              },
              {
                label: 'API Reference',
                to: 'docs/paynow_api',
              },
              {
                label: 'Frequently Asked Questions',
                to: 'docs/#',
              },
              {
                label: 'Artwork & Buttons',
                to: 'docs/artwork',
              },
            ],
          },
          {
            title: 'Libraries & Plugins',
            items: [
              {
                label: 'PHP',
                to: 'docs/php_quickstart',
              },
              {
                label: '.NET',
                to: 'docs/csharp_quickstart',
              },
              {
                label: 'Node.JS',
                to: 'docs/nodejs_quickstart',
              },
              {
                label: 'Python',
                to: 'docs/python_quickstart',
              },
              {
                label: 'Java',
                to: 'docs/java_quickstart',
              },
            ],
          },
          {
            title: 'Plugins',
            items: [
              {
                label: 'WooCommerce',
                to: 'docs/woocommerce',
              },
              {
                label: 'Gravity Forms',
                to: 'docs/gravity_forms',
              },
              {
                label: 'Easy Digital Downloads',
                to: 'docs/easy_digital_downloads',
              },
              {
                label: 'Shopify',
                to: 'docs/shopify',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discussion Forums',
                href: 'https://forums.paynow.co.zw/',
              },
              {
                label: 'Blogs & Tutorials',
                to: 'blog',
              },
              {
                label: 'Github',
                href: 'https://github.com/paynow',
              },
              {
                label: 'Facebook',
                href: 'https://facebook.com/paynowzw',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/paynowzw',
              },
            ],
          },
        ],
        logo: {
          alt: 'Paynow Zimbabwe',
          src: 'img/paynow.png',
          href: 'https://www.paynow.co.zw/',
        },
        // Make sure to update the copyright text as per your requirement
        copyright: `Copyright © ${new Date().getFullYear()} Paynow Zimbabwe`,
      },
    image: 'img/Paynow-Dev-Hub-Sharer-Image.png',
    colors: {
      primary: '#175ff8',
      secondary: '#ffffff',
    },
    twitterImage: 'img/paynow.logo.png',
    disableHeaderTitle: true,


    docs: {
      sidebar: {
        hideable: true,
      }
    },
    prism: {
      additionalLanguages: ['php', 'powershell', 'csharp','rest'],
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/paynow/docs/edit/main/website/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'UA-126207230-1',
          anonymizeIP: true,
        },
      },

    ],
  ],
};
