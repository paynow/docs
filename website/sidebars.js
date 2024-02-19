/**
 * Creating a sidebar enables you to:
 * - create an ordered group of docs
 * - render a sidebar for each doc of that group
 * - provide next/previous navigation
 *
 * The sidebars can be generated from the filesystem, or explicitly defined here.
 *
 * Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    docs: {
      "Getting Started": [
        'quickstart',
        'integration_generation',
        'paynow_overview',
        'test_mode',
        'artwork',
      ],
      "Quick Start Guides": [
        'php_quickstart',
        'csharp_quickstart',
        'nodejs_quickstart',
        'python_quickstart',
        'java_quickstart',
        'woocommerce',
        'gravity_forms',
        'easy_digital_downloads',
        'shopify',
        'camptix_nigelrodgers',
        'magento_prizeless',
        'springboot_bmukorera_tzifudzi'
      ],
      "Links & Buttons": [
        'simple_paynow_request_button',
        'advanced_paynow_request_button',
        'notification_success_cancel_urls',
        'url_safe_base64_encoding'
      ],
      "API Reference": [
        'paynow_api',
        'initiate_transaction',
        'express_checkout_transactions',
        'complete_transaction',
        'status_update',
        'polling_status',
        'generating_hash',
        'validating_hash',
        'initiate_ticket_transaction'
      ],
      "Library Source Docs": [
        'sourcedocs_dotnet',
        'sourcedocs_nodejs'
      ]
    }
  };
  
  export default sidebars;
  