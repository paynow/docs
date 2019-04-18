/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? language + '/' : '') + doc;
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          {/* <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="61"
                height="58"
              />
            )}
          </a> */}
          <div>
            <h5>Documentation</h5>
            <a href={this.docUrl('quickstart.html')}>
              Getting Started
            </a>
            <a href={this.docUrl('paynow_api.html')}>
              API Reference
            </a>
            <a href={this.docUrl('#')}>
              Frequently Asked Questions
            </a>
            {/* <a href={this.docUrl('doc2.html')}>
              Guides (or other categories)
            </a>
            <a href={this.docUrl('doc3.html')}>
              API Reference (or other categories)
            </a> */}
          </div>
          <div>
          <h5>Libraries & Plugins</h5>
            <a href={this.docUrl('php_quickstart.html')}>
              PHP
            </a>
            <a href={this.docUrl('csharp_quickstart.html')}>
              .NET
            </a>
            <a href={this.docUrl('nodejs_quickstart.html')}>
              Node.JS
            </a>
            <a href={this.docUrl('python_quickstart.html')}>
              Python
            </a>
            <a href={this.docUrl('java_quickstart.html')}>
              Java
            </a>
          </div>
          <div>
          <h5>Plugins</h5>
            <a href={this.docUrl('woocommerce.html')}>
              WooCommerce
            </a>
            <a href={this.docUrl('gravity_forms.html')}>
              Gravity Forms
            </a>
            <a href={this.docUrl('easy_digital_downloads.html')}>
              Easy Digital Downloads
            </a>
            <a href={this.docUrl('shopify.html')}>
              Shopify
            </a>
          </div>          
          <div>
            <h5>Community</h5>
            {/* <a href={this.pageUrl('users.html')}>
              User Showcase
            </a> */}
            <a href="https://forums.paynow.co.zw/">Discussion Forums</a>
            <a href={this.props.config.baseUrl + 'blog'}>Blogs & Tutorials</a>
            <a href="https://github.com/paynow">Github</a>
            {/* <a
              href="http://stackoverflow.com/questions/tagged/"
              target="_blank"
              rel="noreferrer noopener">
              Stack Overflow
            </a> */}
            <a
              href="https://facebook.com/paynowzw"
              target="_blank"
              rel="noreferrer noopener">
              Facebook
            </a>
            <a
              href="https://twitter.com/paynowzw"
              target="_blank"
              rel="noreferrer noopener">
              Twitter
            </a>
          </div>
          {/* <div>
            <h5>More</h5>

            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div> */}
        </section>

        <a
          href="https://www.paynow.co.zw/"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={this.props.config.baseUrl + 'img/paynow.png'}
            alt="Paynow Zimbabwe"
            width="170"
            height="45"
          />
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
