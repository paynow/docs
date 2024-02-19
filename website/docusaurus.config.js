module.exports = {
  title: 'Paynow Developer Hub', // Title for your website
  tagline: 'Integrate With Paynow & #GetPaid',
  url: 'https://developers.paynow.co.zw', // Your website URL
  baseUrl: '/', // Base URL for your project
  onBrokenLinks: 'throw', // throw an error if a broken link is detected during build
  onBrokenMarkdownLinks: 'warn', // warn if a broken markdown link is detected during build

  projectName: 'paynow-docs',
  organizationName: 'PaynowZW',

  themeConfig: {
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
      links: [],
      logo: {
        alt: 'Paynow Logo',
        src: 'img/paynow.p.emblem.png',
        href: 'https://www.paynow.co.zw',
      },
    },
    image: 'img/Paynow-Dev-Hub-Sharer-Image.png',
    colors: {
      primary: '#175ff8',
      secondary: '#ffffff',
    },
    twitterImage: 'img/paynow.logo.png',
    disableHeaderTitle: true,
 
    
    docs: {
      sidebar:{
        hideable:true,
      }
    },
    prism: {
      additionalLanguages: ['php','powershell','csharp'],
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/paynow/docs/edit/main/website/',
        },
        theme: {
         
        },
        gtag: {
          trackingID: 'GTM-WN8B6JL5',
          anonymizeIP: true,
        },
      },
      
    ],
  ],
};
