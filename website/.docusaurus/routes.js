import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '0c9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'b5b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'fba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '180'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '8e4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'dd1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '249'),
    exact: true
  },
  {
    path: '/about',
    component: ComponentCreator('/about', '75c'),
    exact: true
  },
  {
    path: '/help',
    component: ComponentCreator('/help', '6df'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '3e0'),
    exact: true
  },
  {
    path: '/try',
    component: ComponentCreator('/try', '873'),
    exact: true
  },
  {
    path: '/users',
    component: ComponentCreator('/users', '8f3'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'd27'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'b6d'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '71a'),
            routes: [
              {
                path: '/docs/advanced_paynow_request_button',
                component: ComponentCreator('/docs/advanced_paynow_request_button', '0d0'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/artwork',
                component: ComponentCreator('/docs/artwork', '194'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/camptix_nigelrodgers',
                component: ComponentCreator('/docs/camptix_nigelrodgers', 'f72'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/complete_transaction',
                component: ComponentCreator('/docs/complete_transaction', 'e3b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/csharp_quickstart',
                component: ComponentCreator('/docs/csharp_quickstart', '1b2'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/easy_digital_downloads',
                component: ComponentCreator('/docs/easy_digital_downloads', '405'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/express_checkout_transactions',
                component: ComponentCreator('/docs/express_checkout_transactions', '82d'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/generating_hash',
                component: ComponentCreator('/docs/generating_hash', '0f8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/generation_hash',
                component: ComponentCreator('/docs/generation_hash', 'c4a'),
                exact: true
              },
              {
                path: '/docs/gravity_forms',
                component: ComponentCreator('/docs/gravity_forms', 'fb8'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/initiate_mobile_transaction',
                component: ComponentCreator('/docs/initiate_mobile_transaction', '6ee'),
                exact: true
              },
              {
                path: '/docs/initiate_ticket_transaction',
                component: ComponentCreator('/docs/initiate_ticket_transaction', '49a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/initiate_transaction',
                component: ComponentCreator('/docs/initiate_transaction', 'fc3'),
                exact: true
              },
              {
                path: '/docs/integration_generation',
                component: ComponentCreator('/docs/integration_generation', 'e4a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/java_quickstart',
                component: ComponentCreator('/docs/java_quickstart', '0b3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/magento_prizeless',
                component: ComponentCreator('/docs/magento_prizeless', '2f1'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/nodejs_quickstart',
                component: ComponentCreator('/docs/nodejs_quickstart', '03f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/notification_success_cancel_urls',
                component: ComponentCreator('/docs/notification_success_cancel_urls', '333'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/paynow_api',
                component: ComponentCreator('/docs/paynow_api', 'f42'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/paynow_initiate',
                component: ComponentCreator('/docs/paynow_initiate', '660'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/paynow_overview',
                component: ComponentCreator('/docs/paynow_overview', '028'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/php_quickstart',
                component: ComponentCreator('/docs/php_quickstart', '60e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/polling_status',
                component: ComponentCreator('/docs/polling_status', 'a2f'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/python_quickstart',
                component: ComponentCreator('/docs/python_quickstart', 'f96'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/quickstart',
                component: ComponentCreator('/docs/quickstart', '33c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/shopify',
                component: ComponentCreator('/docs/shopify', 'd21'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/simple_paynow_request_button',
                component: ComponentCreator('/docs/simple_paynow_request_button', '89a'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/sourcedocs_dotnet',
                component: ComponentCreator('/docs/sourcedocs_dotnet', '438'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/sourcedocs_nodejs',
                component: ComponentCreator('/docs/sourcedocs_nodejs', 'eb9'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/sourcedocs_php',
                component: ComponentCreator('/docs/sourcedocs_php', '7cb'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/springboot_bmukorera_tzifudzi',
                component: ComponentCreator('/docs/springboot_bmukorera_tzifudzi', '926'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/status_update',
                component: ComponentCreator('/docs/status_update', 'd83'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/test_mode',
                component: ComponentCreator('/docs/test_mode', 'bba'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/url_safe_base64_encoding',
                component: ComponentCreator('/docs/url_safe_base64_encoding', 'f4b'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/validating_hash',
                component: ComponentCreator('/docs/validating_hash', '350'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/woocommerce',
                component: ComponentCreator('/docs/woocommerce', '05c'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '23c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
